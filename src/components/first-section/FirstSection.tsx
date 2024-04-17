import { motion } from "framer-motion";
import React from "react";
import Lottie from "lottie-react";
import animyIcon from "../../assets/animated-icons/request-icon3.json";

interface FirstSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const FirstSection: React.FC<FirstSectionProps> = ({ scrollToContact }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div className="flex flex-col items-center text-center bg-secondary/10 py-8 space-y-4 md:space-y-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="font-bold font-header text-2xl md:text-3xl text-primary px-2">
          حقق أفضل تواجد فعال مع جمهورك من خلال تطبيقك الالكتروني
        </p>
        <p className="text-gray-700 font-semibold font-header text-base md:text-lg mt-3">
          حول أفكارك إلى تطبيق مع فريق سيي ميديا
        </p>
        <motion.div
          className="flex flex-col items-center justify-center"
          onClick={e => {
            e.preventDefault();
            scrollToContact(e);
          }}
          variants={buttonVariants}
          whileHover="hover"
        >
          <Lottie animationData={animyIcon} className="h-52 w-60" />
          <div className="p-4 bg-primary rounded-md animate-shake ">
            <p className="text-white font-header font-bold text-lg md:text-2xl ">
              بدك تختصر الطريق؟ بدك أفضل تطبيق؟
            </p>
            <p className="text-white font-header font-bold text-lg md:text-2xl ">
              تواصل معنا الآن
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FirstSection;
