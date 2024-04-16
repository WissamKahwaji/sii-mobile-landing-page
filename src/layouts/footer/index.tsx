import { BsTwitterX } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaIcons = [
    {
      icon: <MdWhatsapp className="h-6 w-6" />,
      link: "https://wa.me/+971542998757",
    },
    {
      icon: <FiFacebook className="h-6 w-6" />,
      link: "https://www.facebook.com/SiiMedia.ae",
    },
    {
      icon: <FiInstagram className="h-6 w-6" />,
      link: "https://www.instagram.com/siimedia/",
    },
    {
      icon: <FiLinkedin className="h-6 w-6" />,
      link: "https://www.linkedin.com/company/sii-media",
    },
    {
      icon: <FaSnapchat className="h-6 w-6" />,
      link: "https://t.snapchat.com/O0pjBC6s",
    },
    {
      icon: <BsTwitterX className="h-6 w-5" />,
      link: "https://twitter.com/siimedia",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-secondary/80 to-secondary/20 text-center pt-3 pb-3 px-2 space-y-3">
      <div className="flex flex-row space-x-4 items-center justify-center">
        {socialMediaIcons.map((socialMedia, index) => (
          <Link
            key={index}
            to={socialMedia.link ?? ""}
            className="flex items-center text-primary hover:text-primary transition duration-300"
          >
            {socialMedia.icon}
          </Link>
        ))}
      </div>
      <p className="text-sm md:text-2xl font-header font-bold">
        اكتشف المزيد من خدماتنا اللا محدودة بافضل العروض واعلى جوده مع شركة سي
        ميديا
      </p>
    </div>
  );
};

export default Footer;
