import { useRef } from "react";
import FirstSection from "../../components/first-section/FirstSection";
import SecondSection from "../../components/second-section/SecondSection";
import ThirdSection from "../../components/third-section/ThirdSection";
import ContactSection from "../../components/contact-section/ContactSection";
import SamplesSection from "../../components/sample-section/SamplesSection";
import LinkSection from "../../components/link-section/LinkSection";
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
      <SamplesSection />
      <ThirdSection />
      <div ref={contactSectionRef}>
        <ContactSection />
      </div>
      <LinkSection />
    </div>
  );
};

export default LandingPage;
