import { IPostData } from '@/types/types';
import parseDate from '@/utils/date';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import hero from '../../public/static/images/hero.jpg';

interface Props {
  postData: IPostData;
}

const PostLayout: React.FC<Props> = ({
  postData: { title, date, content, image, readingTime },
}) => {
  const IS_DEV = process.env.NODE_ENV === 'development';

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      <article className="w-full text-black max-w-none dark:text-white">
        <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-gray-100">
          {title}
        </h1>
        <div className="flex flex-row items-center mt-4 space-x-2 text-gray-500 dark:text-gray-400">
          <div className="flex flex-col">
            <div className="w-10 h-10 overflow-hidden rounded-full shadow">
              <Image
                unoptimized={IS_DEV}
                src={hero}
                alt="Hero"
                placeholder="blur"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col text-sm">
            <p className="font-semibold">by Petr Rajtslegr</p>
            <div className="flex flex-row">
              <p>
                {parseDate(date)}
                {` • `}
                {readingTime.text}
              </p>
            </div>
          </div>
        </div>
        {image && (
          <div className="mt-12 overflow-hidden rounded shadow text-[0px]">
            <Image
              unoptimized={IS_DEV}
              src={`/static/images/blog/${image}`}
              alt="Blog post header image"
              placeholder="blur"
              blurDataURL={`/static/images/blog/${image}`}
              height={720}
              width={1125}
            ></Image>
          </div>
        )}
        <div className="mt-12 prose max-w-none dark:prose-dark">
          <MDXRemote {...content} />
        </div>
      </article>
    </div>
  );
};

export default PostLayout;
