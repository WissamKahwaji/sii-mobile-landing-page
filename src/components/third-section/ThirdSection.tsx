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
const ThirdSection = () => {
  const appType = [
    {
      title: "المراكز طبية",
      icon: <MedicalServicesIcon className="w-6 h-6 mx-3 text-primary" />,
    },
    {
      title: "تجارة إلكترونية",
      icon: <AddShoppingCartIcon className="w-6 h-6 mx-3 text-primary" />,
    },
    {
      title: "المراكز التعليمية",
      icon: <SchoolIcon className="w-6 h-6 mx-3 text-primary" />,
    },
    {
      title: "الشحن والتوصيل",
      icon: <LocalShippingIcon className="w-6 h-6 mx-3 text-primary" />,
    },
    {
      title: "الشركات العقارية",
      icon: <ApartmentIcon className="w-6 h-6 mx-3 text-primary" />,
    },
    {
      title: "تأجير السيارات",
      icon: <CarRentalRoundedIcon className="w-6 h-6 mx-3 text-primary" />,
    },
    {
      title: "المراكز التجارية",
      icon: <LocalMallRoundedIcon className="w-6 h-6 mx-3 text-primary" />,
    },
    {
      title: "المطاعم",
      icon: <RestaurantMenuRoundedIcon className="w-6 h-6 mx-3 text-primary" />,
    },
    {
      title: "خدمات منزلية",
      icon: <HomeWorkRoundedIcon className="w-6 h-6 mx-3 text-primary" />,
    },

    {
      title: "شركات التأمين",
      icon: <LocationCityRoundedIcon className="w-6 h-6 mx-3 text-primary" />,
    },
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
    <div className="bg-slate-50 " style={{ direction: "rtl" }}>
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
      <div className="bg-seconBackground py-10 px-2 md:px-20">
        <p className="text-2xl font-header font-semibold text-primary text-center mt-8 mb-12">
          عقود موثقة تضمن لك إنجاز المشروع على أكمل وجه
        </p>
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-6 gap-8 md:gap-8 mt-8 ">
          {features.map(item => (
            <div className="flex flex-row items-center justify-start p-2 rounded shadow-md">
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
    </div>
  );
};

export default ThirdSection;
