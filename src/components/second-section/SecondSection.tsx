import { motion } from "framer-motion";
import TitleAndBody from "../ui/TitleAndBody";
import vedio from "../../assets/vedio.mp4";
import TitleAndButton from "../ui/TitleAndButton";

interface SecondSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const SecondSection: React.FC<SecondSectionProps> = ({ scrollToContact }) => {
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
        damping: 15,
        stiffness: 100,
        delay: 0.3, // Add a slight delay for stagger effect
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      className="mx-5 md:mx-10 py-10"
      style={{ direction: "rtl" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        <motion.p
          className="text-secondary font-semibold font-header text-base md:text-2xl leading-relaxed"
          variants={itemVariants}
        >
          دعنا نساعدك في تحقيق أقصى امكانيات نجاح لعلامتك التجارية.. اختر تطبيقك
          الآن من انواع التطبيقات التالية
        </motion.p>
      </div>
      <div className="my-8 ">
        <video
          controls
          className="max-w-full md:h-[450px] mx-auto"
          src={vedio}
          typeof="video/mp4"
          muted
          autoPlay
        ></video>
      </div>
      <TitleAndButton
        title="اطلب تطبيقك الآن"
        scrollToContact={scrollToContact}
      />
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 mt-12 gap-y-8 md:gap-y-0">
        <motion.div variants={itemVariants}>
          <TitleAndBody
            title="تطبيقات المتاجر الإلكترونية مثل Amazon و AliBaba"
            body="هي منصات رقمية تسمح للشركات ببيع منتجاتها أو خدماتها عبر الإنترنت. توفر هذه التطبيقات واجهة افتراضية تمكن العملاء من تصفح واختيار المنتجات بسهولة وإجراء عمليات الشراء بكل يسر وسلاسة من أي مكان وعبر أي جهاز متصل بالإنترنت"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TitleAndBody
            title="تطبيق المتجر الإلكتروني متعدد التجار مثل تطبيق Noon"
            body="هو منصة رقمية تسمح للشركات ببيع منتجاتها أو خدماتها عبر الإنترنت. يوفر واجهة متجر افتراضية للعملاء لتصفح واختيار المنتجات بسهولة وشرائها من أي مكان عبر الإنترنت.
            يعمل فريقنا المتخصص من المطورين والمصممين على تقديم حلول تجارة إلكترونية قوية تزيد من المبيعات وتعزز تجارب المستخدم."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TitleAndBody
            title="تطبيقات الوساطة التجارية مثل Talabat"
            body="هو عبارة عن منصة متخصصة عبر الإنترنت تسهل المعاملات والتفاعلات بين الشركات (مقدمي الخدمات أو البائعين) والعملاء (المستهلكين أو العملاء) في مختلف الصناعات. يعمل هذا النوع من التطبيقات كوسيط، حيث يربط الشركات التي تقدم خدمات أو منتجات مع العملاء المحتملين الذين يتطلعون إلى الاستفادة من تلك الخدمات أو شراء تلك المنتجات. يعمل فريق الخبراء لدينا من المطورين والمصممين بشكل وثيق مع العملاء لإنشاء حلول قابلة للتخصيص تعمل على تبسيط العمليات وتعزيز تجارب المستخدم ودفع نمو الأعمال."
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SecondSection;
