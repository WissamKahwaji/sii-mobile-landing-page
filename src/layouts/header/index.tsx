import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";

import { useEffect, useState } from "react";
import logo_black from "../../assets/logo_black.png";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // Only prevScrollPos is needed as a dependency

  // const socialMediaIcons = [
  //   {
  //     icon: <MdWhatsapp className="h-6 w-6" />,
  //     link: "https://wa.me/+971542998757",
  //   },
  //   {
  //     icon: <FiFacebook className="h-6 w-6" />,
  //     link: "https://www.facebook.com/SiiMedia.ae",
  //   },
  //   {
  //     icon: <FiInstagram className="h-6 w-6" />,
  //     link: "https://www.instagram.com/siimedia/",
  //   },
  //   {
  //     icon: <FiLinkedin className="h-6 w-6" />,
  //     link: "https://www.linkedin.com/company/sii-media",
  //   },
  //   {
  //     icon: <FaSnapchat className="h-6 w-6" />,
  //     link: "https://t.snapchat.com/O0pjBC6s",
  //   },
  //   {
  //     icon: <BsTwitterX className="h-6 w-5" />,
  //     link: "https://twitter.com/siimedia",
  //   },
  // ];

  return (
    <header
      className={`fixed left-0 top-0 z-[1001] w-full bg-slate-50 border-b border-border shadow-sm transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex flex-row md:flex-row items-center justify-between px-3 md:py-2 py-2 lg:px-8 lg:py-4 md:px-16 lg:justify-between lg:items-end w-full">
        <div className="flex items-center justify-between w-full lg:w-auto md:w-auto lg:justify-start gap-x-8 md:space-x-0 md:justify-center">
          <div className="text-2xl md:text-4xl font-bold text-primary">
            <Link to="/">
              <img
                src={logo_black}
                alt=""
                className="h-auto w-24 sm:h-auto sm:w-24 md:h-auto md:w-24 lg:h-auto lg:w-36 object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start mt-1">
          <div className="flex flex-row space-x-2 mb-3">
            <p className="text-primary font-header font-semibold">
              info@siimedia.net
            </p>
            <Link
              to={"mailto:info@siimedia.net"}
              className="flex items-center mx-1 text-secondary hover:text-primary transition duration-300"
            >
              <FiMail className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex flex-row space-x-2 mb-2">
            <p className="text-primary font-header font-semibold">
              +971 54 561 5757
            </p>
            <Link
              to={"tel:+971545615757"}
              className="flex items-center mx-1 text-secondary hover:text-primary transition duration-300"
            >
              <FiPhone className="h-6 w-6" />
            </Link>
          </div>
          {/* <div className="flex flex-row space-x-2">
            {socialMediaIcons.map((socialMedia, index) => (
              <Link
                key={index}
                to={socialMedia.link ?? ""}
                className="flex items-center text-secondary hover:text-primary transition duration-300"
              >
                {socialMedia.icon}
              </Link>
            ))}
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
