import { useRef } from "react";
import FirstSection from "../../components/first-section/FirstSection";
import SecondSection from "../../components/second-section/SecondSection";
import ThirdSection from "../../components/third-section/ThirdSection";
import ContactSection from "../../components/contact-section/ContactSection";
import SamplesSection from "../../components/sample-section/SamplesSection";
import LinkSection from "../../components/link-section/LinkSection";
import ReviewSection from "../../components/review-section/ReviewSection";
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
      <SamplesSection scrollToContact={scrollToContact} />
      <ThirdSection scrollToContact={scrollToContact} />
      <div ref={contactSectionRef}>
        <ContactSection />
      </div>
      <ReviewSection />
      <LinkSection />
    </div>
  );
};

export default LandingPage;
