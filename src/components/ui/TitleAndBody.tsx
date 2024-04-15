export type TitleAndBodyProps = {
  title: string;
  body: string;
};

const TitleAndBody = (props: TitleAndBodyProps) => {
  return (
    <div className="flex flex-col md:border-l-2 border-secondary/20 px-2 space-x-2">
      <p className="text-2xl font-header text-primary mb-4 text-center">
        {props.title}
      </p>
      <p className="font-body font-thin text-2xl leading-7 text-cyan-600 text-justify">
        {props.body}
      </p>
    </div>
  );
};

export default TitleAndBody;
