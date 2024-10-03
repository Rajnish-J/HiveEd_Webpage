import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { useContactUs } from "./useContactUs";

const NavListStyle =
  "text-base lg:text-lg font-normal relative cursor-pointer inline-block items-center  after:w-0 after:h-[3px] after:content-[''] after:bg-red-500 after:absolute after:left-0 after:bottom-[-4px] after:rounded after:opacity-0 after:transition-all after:duration-300  md:hover:after:w-full hover:after:opacity-100 whitespace-nowrap ";

const routes = [
  { to: "/about-us", label: "About us", mobile_border_w: "4" },
  { to: "/courses", label: "Courses", mobile_border_w: "3.5" },
  { to: "/blog", label: "Blog", mobile_border_w: "2" },
  { to: "/careers", label: "Careers", mobile_border_w: "3.5" },
  { to: "/", label: "Contact us", mobile_border_w: "4.5" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); //Create a reference for the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen((menu) => !menu);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false); //Close menu when clicking outside
      }
    };

    // Add event listener for outside click
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when component unmount or isMenuOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      {isMenuOpen && (
        <div
          className={`menu fixed top-0 z-20 w-1/2 md:hidden ${isMenuOpen ? "menu-enter" : "menu-exit"}`}
          ref={menuRef}
        >
          <div className="h-screen overflow-hidden bg-gradient-to-br from-[#cf73e7] to-[#ffffff] px-6 py-10 xs:px-20 xs:py-12">
            {/* <div className="ml-[-8.5rem] mt-[-4.5rem] h-[130px] w-[130px] origin-top-left rotate-[-35.39deg] rounded-[117px] border-b-2 border-[#cc00ff]" /> */}
            <div className="flex flex-col gap-4 xs:gap-10">
              {/* Logo */}
              <Link to="/" onClick={toggleMenu}>
                <img
                  src="/assets/logo.png"
                  alt="HiveEd Logo"
                  className="h-8 w-auto xs:h-10"
                />
              </Link>
              <NavbarLinks
                className="flex flex-col gap-4 xs:gap-6"
                toggleMenu={toggleMenu}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop navbar */}
      <div className="w[83vw] fixed z-10 mx-[8vw] mt-[3vh] hidden overflow-hidden rounded-full bg-gradient-to-br from-[#fce9ff] to-[#ede7ed] md:inline">
        <nav className="grid grid-cols-3 items-center gap-x-4 gap-y-0 px-6 py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="HiveEd Logo"
              className="h-6 w-auto lg:h-9"
            />
          </Link>

          {/* Navbar links for medium and large screens */}
          <NavbarLinks className="flex items-center justify-center gap-8" />
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between px-4 py-6 md:hidden">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="HiveEd Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Hamburger Menu icon */}
        <button
          aria-label="Toggle menu"
          className="z-50 ml-auto flex h-9 w-9 items-center justify-center rounded border border-[#cc00ff] bg-[#e6d0e9] text-2xl text-[#b51fda] backdrop-blur-lg"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

const NavbarLinks = ({ className, toggleMenu }) => {
  const [isContactUsActive, setIsContactUsActive] = useState(false);

  // Use custom hook for the contact us functionality
  const { handleContactUsClick } = useContactUs(toggleMenu);

  const handleNavLinkClick = () => {
    toggleMenu();
    setIsContactUsActive(false);
  };

  return (
    <div className={className}>
      {routes.map((route) =>
        route.label === "Contact us" ? (
          <NavLink
            key={route.to}
            onClick={(e) => {
              handleContactUsClick(e);
              setIsContactUsActive(true);
            }}
            className={`${NavListStyle} hover:after:w-[${route.mobile_border_w}em] ${isContactUsActive ? "after:w-[4em] after:opacity-100 md:after:w-full" : ""}`}
          >
            {route.label}
          </NavLink>
        ) : (
          <NavLink
            key={route.to}
            to={route.to}
            className={({ isActive }) =>
              `${NavListStyle} hover:after:w-[${route.mobile_border_w}em] ${isActive ? "after:w-[4em] after:opacity-100 md:after:w-full" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            {route.label}
          </NavLink>
        ),
      )}
    </div>
  );
};

export default Navbar;
