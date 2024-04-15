import { useRef } from "react";
import FirstSection from "../../components/first-section/FirstSection";
import SecondSection from "../../components/second-section/SecondSection";
import ThirdSection from "../../components/third-section/ThirdSection";
import ContactSection from "../../components/contact-section/ContactSection";
const LandingPage = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <FirstSection scrollToContact={scrollToContact} />
      <SecondSection />
      <ThirdSection />
      <div ref={contactSectionRef}>
        <ContactSection />
      </div>
    </div>
  );
};

export default LandingPage;
