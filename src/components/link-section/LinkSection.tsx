import linkIcon from "../../assets/icons/external-link.png";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const LinkSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-10 md:px-8 md:py-12 space-y-5 md:space-y-10">
      <div className="flex justify-center ">
        <a
          href="https://www.packages.siimedia.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-transparent border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark hover:border-primary transform transition duration-300 hover:scale-105 delay-100 animate-pulse"
        >
          <span className="mr-2">اكتشف خدماتنا الأخرى</span>
          <img src={linkIcon} alt="link" className="w-5 h-6" />
        </a>
      </div>
      <p className="text-sm md:text-2xl font-header font-bold">
        اكتشف المزيد من خدماتنا اللا محدودة بأفضل العروض وأعلى جوده مع شركة سي
        ميديا
      </p>
    </div>
  );
};

export default LinkSection;
