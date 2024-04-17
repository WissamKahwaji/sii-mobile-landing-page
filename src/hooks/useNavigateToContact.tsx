import { useNavigate } from "react-router-dom";
const useNavigateToContact = () => {
  const navigate = useNavigate();
  const handleNavigateToContactSection = () => {
    navigate("/", { state: { scrollToSection: "contactUs" } });
  };
  return handleNavigateToContactSection;
};

export default useNavigateToContact;
