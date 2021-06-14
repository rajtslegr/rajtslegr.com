import CodeBlock from 'components/CodeBlock';

interface Props {
  heroCode: string[];
}

const Hero: React.FC<Props> = ({ heroCode }) => {
  return (
    <div className="flex flex-col-reverse items-center justify-between xl:justify-around gap-y-8 lg:flex-row">
      <CodeBlock code={heroCode} />
      <img
        className="rounded-full shadow-xl"
        src="/static/images/hero.jpg"
        alt="Hero"
        width={344}
        height={344}
      ></img>
    </div>
  );
};

export default Hero;
