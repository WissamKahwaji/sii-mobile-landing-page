import Lottie from "lottie-react";
import pointIcon from "../../assets/animated-icons/pointIcon.json";
export type TitleAndBodyProps = {
  title: string;
  body: string;
};

const TitleAndBody = (props: TitleAndBodyProps) => {
  return (
    <div className="flex flex-col md:border-l-2 border-secondary/20 px-2 space-x-2">
      <div className="flex flex-row justify-start items-start">
        <Lottie animationData={pointIcon} className="w-12 h-12" />
        <p className="text-2xl font-header text-primary mb-4 text-center">
          {props.title}
        </p>
      </div>
      <p className="font-header text-base md:text-lg leading-7 text-gray-900 text-justify">
        {props.body}
      </p>
    </div>
  );
};

export default TitleAndBody;
