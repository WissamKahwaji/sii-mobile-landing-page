import image2 from "../../assets/image3.png";
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

const ThirdSection = () => {
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
  return (
    <div className="bg-slate-50 " style={{ direction: "rtl" }}>
      <div className="bg-seconBackground py-10 px-2 md:px-20">
        <p className="text-2xl font-header font-bold text-primary text-center mt-8 mb-12">
          ضمن عقود موثقة تضمن لك انجاز مشروعك على اكمل وجه نحن نقدم لك
        </p>
        <div className="grid grid-flow-row grid-cols-3 md:grid-cols-6 gap-8 md:gap-8 mt-8 ">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center space-y-2"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 md:w-10 md:h-10 text-primary"
              />

              <div className="border-t pt-2 border-secondary">
                <p className="text-xs md:text-base font-header text-primary font-bold">
                  {item.title}
                </p>
              </div>
            </div>
            // <div className="flex flex-row items-center justify-center p-2 rounded shadow-md shadow-secondary/15">
            //   {/* <svg
            //     viewBox="0 0 665.8 1000"
            //     fill="currentColor"
            //     height="1em"
            //     width="1em"
            //     className="shrink-0 h-5 w-5 fill-current text-green-500"
            //   >
            //     <path d="M248 850c-22.667 0-41.333-9.333-56-28L12 586C1.333 570-2.667 552.667 0 534s11.333-34 26-46 31.667-16.667 51-14c19.333 2.667 35 12 47 28l118 154 296-474c10.667-16 25-26 43-30s35.667-1.333 53 8c16 10.667 26 25 30 43s1.333 35.667-8 53L306 816c-13.333 21.333-32 32-56 32l-2 2" />
            //   </svg>{" "} */}
            //   <p className="font-body text-2xl text-gray-700">{item}</p>
            // </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-100 py-8 text-center space-y-6">
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
      </div>
      <div className="px-2 md:px-20 py-10">
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
                  className="flex items-center p-3 my-2 border-b-2 border-gray-200"
                >
                  {item.icon}
                  <p className="text-2xl text-gray-800 font-body ">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
