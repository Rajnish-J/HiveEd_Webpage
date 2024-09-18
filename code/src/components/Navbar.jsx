import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((menu) => !menu);
    if (!isMenuOpen) setIsAnimationComplete(false);
  };

  return (
    <div className="z-10 mx-[3vw] mt-8 overflow-hidden rounded-full bg-[#f6eff7] md:fixed md:mx-[8vw] md:mt-[3vh] md:w-[83vw]">
      <nav className="flex items-center justify-between px-6 py-2 md:py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="HiveEd Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navbar links for medium and large screens */}
        <div className="hidden md:flex">
          <NavbarLinks className="flex items-center gap-8 lg:text-lg" />
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:invisible">
          <button
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen && isAnimationComplete ? <CloseIcon /> : <MenuIcon />}
          </button>

          {isMenuOpen && (
            <div
              className={`nav-menu absolute right-[8vw] flex h-[100vh] w-[75vw] xs:w-[60vw] transform justify-center rounded-lg bg-[#f6eff7] transition-transform ${isMenuOpen ? `translate-x-0` : "translate-x-full"}`}
              onAnimationEnd={() => setIsAnimationComplete(true)}
            >
              <NavbarLinks className="mt-8 flex flex-col gap-8 text-xl" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

const NavbarLinks = ({ className }) => {
  return (
    <div className={className}>
      <NavLink to="/about-us">About us</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/careers">Careers</NavLink>
      <NavLink to="/">Contact us</NavLink>
    </div>
  );
};

export default Navbar;
