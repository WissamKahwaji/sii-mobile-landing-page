import app1 from "../../assets/samples/app1.png";
import app2 from "../../assets/samples/app2.png";
import app3 from "../../assets/samples/app3.png";
import app4 from "../../assets/samples/app4.png";
import app5 from "../../assets/samples/app5.png";
import app6 from "../../assets/samples/app6.png";
import app7 from "../../assets/samples/app7.png";
import app8 from "../../assets/samples/app8.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TitleAndButton from "../ui/TitleAndButton";
interface SamplesSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const SamplesSection: React.FC<SamplesSectionProps> = ({ scrollToContact }) => {
  const appSamples = [app1, app2, app3, app4, app5, app6, app7, app8];
  const RESPONSIVE = {
    xxl: {
      breakpoint: { max: 5000, min: 1536 },
      items: 1,
    },
    xl: {
      breakpoint: { max: 1536, min: 1280 },
      items: 1,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 1,
    },
    md: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    sm: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-seconBackground px-3 text-center py-8">
      <p className="text-secondary font-body font-semibold text-2xl md:text-4xl">
        من خلال تطبيقك الالكتروني انشأ قناتك التسويقية الخاصة وحقق أفضل الأرباح
      </p>
      <Carousel
        responsive={RESPONSIVE}
        infinite
        autoPlay
        className="pb-4 mt-8 md:mx-20 mx-4"
      >
        {appSamples.map((sample, index) => (
          <div className="object-fill rounded-md border border-primary hover:shadow-lg md:mx-2 h-[310px] md:h-[610px]">
            <img
              src={sample}
              alt={`sample-${index}`}
              className="w-full h-[87%] object-contain transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </Carousel>
      <TitleAndButton
        title="احصل على تطبيقك الخاص"
        scrollToContact={scrollToContact}
      />
    </div>
  );
};

export default SamplesSection;
