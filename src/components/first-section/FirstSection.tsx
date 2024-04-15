import mobile_background from "../../assets/mobile_back.png";

interface FirstSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const FirstSection: React.FC<FirstSectionProps> = ({ scrollToContact }) => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 px-4 pb-8 md:px-20 space-y-8 md:space-y-0 md:space-x-4 bg-secondary/10">
      <img
        src={mobile_background}
        alt=""
        className="h-auto w-auto  object-cover "
      />
      <div
        className="flex flex-col space-y-4 justify-center"
        style={{ direction: "rtl" }}
      >
        <p className="text-5xl font-bold font-serif text-primary uppercase">
          تطوير تطبيقات الهاتف المحمول
        </p>
        <p className="text-secondary text-2xl font-body ">
          تساعد تطبيقات الهاتف المحمول الجذابة والمبتكرة العلامات التجارية على
          التواصل بشكل أفضل مع العملاء. Sii Media هي وكالة تطوير تطبيقات الأجهزة
          المحمولة التي تحتاجها لتحويل أفكار عملك إلى تطبيقات جوال عالية الأداء
          تعمل بنظامي IOS وAndroid والتي تعد بواجهة نظيفة وذكية وتجربة مستخدم
          سلسة وبديهية.
        </p>
        <a
          onClick={e => {
            e.preventDefault();
            scrollToContact(e);
          }}
          href="/"
          className="w-fit uppercase duration-500 hover:bg-secondary/20 hover:text-black py-3 px-6 rounded text-secondary shadow-lg border-primary border-2  "
        >
          تواصل معنا الان
        </a>
      </div>
    </div>
  );
};

export default FirstSection;
