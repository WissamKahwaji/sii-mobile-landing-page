import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SchoolIcon from "@mui/icons-material/School";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CarRentalRoundedIcon from "@mui/icons-material/CarRentalRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import TitleAndButton from "../ui/TitleAndButton";
import programming from "../../assets/icons/programming.png";
import conding from "../../assets/icons/coding.png";
import folder from "../../assets/icons/folder.png";
import verified from "../../assets/icons/verified.png";
import server from "../../assets/icons/database-storage.png";
import mobile from "../../assets/icons/mobile-phone.png";
import panel from "../../assets/icons/admin-panel.png";
import support from "../../assets/icons/support.png";
import illustration from "../../assets/icons/illustration.png";
import credit from "../../assets/icons/credit-card.png";
import tools from "../../assets/icons/tools.png";
import training from "../../assets/icons/training.png";
import dailyIcon from "../../assets/icons/24-hours-support.png";
import image2 from "../../assets/image3 new.png";

interface ThirdSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ scrollToContact }) => {
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const { ref: appTypeRef, inView: appTypeInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const appType = [
    {
      title: "المراكز طبية",
      icon: <MedicalServicesIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "تجارة إلكترونية",
      icon: <AddShoppingCartIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "المراكز التعليمية",
      icon: <SchoolIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "الشحن والتوصيل",
      icon: <LocalShippingIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "الشركات العقارية",
      icon: <ApartmentIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "تأجير السيارات",
      icon: <CarRentalRoundedIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "المراكز التجارية",
      icon: <LocalMallRoundedIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "المطاعم",
      icon: <RestaurantMenuRoundedIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "خدمات منزلية",
      icon: <HomeWorkRoundedIcon className="w-6 h-6 mx-2 text-primary" />,
    },
    {
      title: "شركات التأمين",
      icon: <LocationCityRoundedIcon className="w-6 h-6 mx-2 text-primary" />,
    },
  ];

  const features = [
    {
      title: "كود نظيف 100%",
      icon: programming,
    },
    {
      title: "أحدث أنواع البرمجيات",
      icon: conding,
    },
    {
      title: "مساحة غير محدودة",
      icon: folder,
    },
    {
      title: "ملكية تامة للعميل",
      icon: verified,
    },
    {
      title: "سيرفرات محلية",
      icon: server,
    },
    {
      title: "تطبيقات حسب الطلب",
      icon: mobile,
    },
    {
      title: "لوحة تحكم مرنة",
      icon: panel,
    },
    {
      title: "حماية و دعم فني",
      icon: support,
    },
    {
      title: "تصاميم مميزة UI-UX",
      icon: illustration,
    },
    {
      title: "حلول الدفع والتوصيل",
      icon: credit,
    },
    {
      title: "24/7 صيانة وضمان",
      icon: tools,
    },
    {
      title: "تدريب العميل",
      icon: training,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-slate-50" style={{ direction: "rtl" }}>
      <div className="bg-secondary/10 py-10 px-2 md:px-20">
        <p className="text-2xl font-header font-bold text-primary text-center px-2 md:px-0 mt-8">
          ضمن عقود موثقة تضمن لك انجاز مشروعك على أكمل وجه
        </p>
        <p className="text-base font-header font-bold text-secondary text-center px-2 md:px-0 mt-7 mb-12">
          نقدم لكم الخدمات التالية بأفضل جودة وأعلى كفاءة
        </p>

        <div
          className="grid grid-flow-row grid-cols-3 md:grid-cols-6 gap-8 md:gap-8 mt-8"
          ref={featuresRef}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center space-y-2"
              variants={itemVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 md:w-10 md:h-10 text-primary"
              />
              <div className="border-t pt-2 border-secondary">
                <p className="text-[8.2px] md:text-base font-header text-primary font-bold">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-lg md:text-lg font-header  text-gray-600 mt-6 md:mt-12 text-center px-4">
          تصميم وتطوير تطبيقات مبتكرة مع خبراءنا المحترفين من شركة{" "}
          <span className="font-sans text-primary font-bold">سيي ميديا</span>
        </p>
      </div>

      <div className="bg-primary/10 py-8 text-center space-y-6">
        <p className="text-primary text-2xl md:text-3xl font-bold font-header">
          ضمان غير محدود المدة
        </p>
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <p className="font-header font-semibold text-secondary text-lg md:text-2xl">
            دعم فني{" "}
          </p>
          <img
            src={dailyIcon}
            alt="24/7"
            className="w-10 h-10 md:w-14 md:h-14"
          />
          <p className="font-header font-semibold text-secondary text-lg md:text-2xl">
            تحديثات مستمرة
          </p>
        </div>
        <p className=" font-header text-gray-700 px-5 text-justify md:px-16 text-base md:text-lg">
          أطلق عنان إبداعك مع خدمتنا لإنشاء تطبيقات الهاتف المبتكرة! سواء كنت
          تبحث عن توسيع نطاق عملك أو تحسين تجربة عملائك، فإن تطبيقات الهاتف التي
          نقدمها توفر الحلول المثالية. فريقنا المتخصص في التطوير يعمل بجد لتحقيق
          رؤيتك بأفضل الطرق التقنية والجمالية. ابدأ الآن واجعل فكرتك تلمع على
          شاشات الهواتف الذكية مع{" "}
          <span className="font-sans text-primary font-bold">سيي ميديا !</span>
        </p>
        <TitleAndButton
          title="تواصل معنا الآن"
          scrollToContact={scrollToContact}
        />
      </div>

      <div className="px-2 md:px-20 py-10" ref={appTypeRef}>
        <p className="text-center font-header text-2xl text-primary font-semibold">
          نقوم بإنشاء تطبيقات بأي فكرة تخطر ببالك
        </p>
        <div className="p-4 bg-primary rounded-sm mt-3 mx-5 md:mx-auto md:w-fit">
          <p className="text-center font-header font-semibold text-base md:text-base text-white">
            من الفكرة إلى التطبيق نحن شركاءك في رحلة التطوير والنجاح
          </p>
        </div>
        <div className="mt-14 grid grid-flow-row grid-cols-1 md:grid-cols-2 space-x-4">
          <img src={image2} alt="mobile" />
          <div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
              {appType.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-3 my-2"
                  variants={itemVariants}
                  initial="hidden"
                  animate={appTypeInView ? "visible" : "hidden"}
                >
                  {item.icon}
                  <p className="text-sm md:text-lg text-gray-800 font-header">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center font-header text-base md:text-2xl text-secondary font-semibold mt-6">
          وجميع مجالات الأعمال الأخرى
        </p>
      </div>
    </div>
  );
};

export default ThirdSection;
