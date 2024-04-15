import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import image2 from "../../assets/image3.png";

const ThirdSection = () => {
  const appType = [
    "المراكز طبية",
    "تجارة إلكترونية",
    "المراكز التعليمية",
    "الشحن والتوصيل",
    "الشركات العقارية",
    "تأجير السيارات",
    "المراكز التجارية",
    "المطاعم",
    "خدمات منزلية",
    "شركات التأمين",
  ];
  const features = [
    "كود نظيف 100%",
    "أحدث أنواع البرمجيات",
    "مساحة غير محدودة",
    "ملكية تامة للعميل",
    "سيرفرات محلية",
    "تطبيقات حسب الطلب",
    "لوحة تحكم مرنة",
    "حماية و دعم فني",
    "تصاميم مميزة UI-UX",
    "حلول الدفع والتوصيل",
    "24/7 صيانة وضمان",
    "تدريب العميل",
  ];
  return (
    <div
      className="bg-slate-50 px-2 md:px-20 py-10"
      style={{ direction: "rtl" }}
    >
      <p className="text-center font-header text-2xl text-primary font-semibold">
        نقوم بإنشاء تطبيقات بأي فكرة تخطر ببالك
      </p>
      <div className="mt-14  grid grid-flow-row grid-cols-1 md:grid-cols-2 space-x-4">
        <img src={image2} alt="mobile" />
        <div>
          <div className="grid grid-cols-2   md:grid-cols-2 gap-4 ">
            {appType.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 my-2 border border-gray-200 rounded transform hover:scale-105 duration-300 ease-in-out"
              >
                <LiaAngleDoubleRightSolid className="w-6 h-6 mr-3 text-primary" />
                <p className="text-2xl text-gray-800 font-body ">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-2xl font-header font-semibold text-primary text-center mt-8 mb-12">
        عقود موثقة تضمن لك إنجاز المشروع على أكمل وجه
      </p>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 mt-8 ">
        {features.map(item => (
          <div className="flex flex-row items-center justify-start">
            <svg
              viewBox="0 0 665.8 1000"
              fill="currentColor"
              height="1em"
              width="1em"
              className="shrink-0 h-5 w-5 fill-current text-green-500"
            >
              <path d="M248 850c-22.667 0-41.333-9.333-56-28L12 586C1.333 570-2.667 552.667 0 534s11.333-34 26-46 31.667-16.667 51-14c19.333 2.667 35 12 47 28l118 154 296-474c10.667-16 25-26 43-30s35.667-1.333 53 8c16 10.667 26 25 30 43s1.333 35.667-8 53L306 816c-13.333 21.333-32 32-56 32l-2 2" />
            </svg>{" "}
            <p className="font-body text-2xl text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
