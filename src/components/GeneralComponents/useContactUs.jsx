import { useLocation, useNavigate } from "react-router-dom";

export const useContactUs = (toggleMenu) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactUsClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // If already on the homepage,trigger scroll manually
      const headerHeight = window.innerHeight * 0.03 + 80;
      window.scrollTo({
        top: document.getElementById("form-section").offsetTop - headerHeight,
        behavior: "smooth",
      });
    } else {
      navigate("/", { state: { scrollToForm: true } }); // Navigate to homepage with scrollToForm set to true
    }

    // Optionally toggle the menu if passed
    if (toggleMenu) {
      toggleMenu();
    }
  };

  return {handleContactUsClick}
};
