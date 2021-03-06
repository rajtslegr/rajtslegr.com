import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import MetaData from '@/components/meta-data/MetaData';
import PostLayout from '@/components/post/PostLayout';
import { useIncrementView } from '@/hooks/useIncrementViews';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { ContentPostData } from '@/types/entities';

interface BlogProps {
  postData: ContentPostData;
}

const Blog: NextPage<BlogProps> = ({ postData }) => {
  const image = postData.image
    ? `/static/images/blog/${postData.image}`
    : undefined;
  useIncrementView(postData.id);

  return (
    <>
      <MetaData
        title={`${postData.title} | Petr Rajtslegr`}
        description={postData.description}
        type="article"
        date={new Date(postData.date).toISOString()}
        image={image}
      />
      <PostLayout postData={postData} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);

  return {
    props: {
      postData,
    },
  };
};

export default Blog;
