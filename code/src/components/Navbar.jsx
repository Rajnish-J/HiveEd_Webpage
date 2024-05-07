import {React, useState, useEffect, useRef} from 'react';
import Logo from '../images/logo.png'
import '../index.css';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const location = useLocation();
  const prevLocationRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if(prevLocationRef.current !== location.pathname){
      window.scrollTo(0, 0);
      prevLocationRef.current = location.pathname;
    }
  }, [location]);

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact-us');
  };

  useEffect(() => {
    const contactUsButton = document.querySelector('.contactUs');

    if (contactUsButton) {
      contactUsButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor tag behavior

        const contactUsSection = document.getElementById('contact-us'); // Assuming your section has this ID

        if (contactUsSection) {
          contactUsSection.scrollIntoView({top: '[50vw]', behavior: 'smooth' }); // Smooth scroll to the section
        }
      });
    }
  },[])


  return (
    <div className='header'>
        <div className='mx-[8vw] bg-[#f6eff7] rounded-3xl p-3 mt-4'>
            <div className='flex justify-between items-center'>
                <NavLink to='/'><img src={Logo} alt="HiveEd Logo" /></NavLink>

                <div className='flex justify-center'>
                    <button className={`mx-4 hidden md:inline lg:inline xl:inline 2xl:inline nav ${location.pathname === '/aboutus' ? 'active' : ''}`}><NavLink to='/aboutus/'>About Us</NavLink></button>
                    <button className={`mx-4 hidden md:inline lg:inline xl:inline 2xl:inline nav ${location.pathname === '/courses' ? 'active' : ''}`}><NavLink to='/courses/'>Courses</NavLink></button>
                    <button className={`mx-4 hidden md:inline lg:inline xl:inline 2xl:inline nav ${location.pathname === '/blog' ? 'active' : ''}`}><NavLink to='/blog/'>Blog</NavLink></button>
                    <button className={`mx-4 hidden md:inline lg:inline xl:inline 2xl:inline nav ${location.pathname === '/careers' ? 'active' : ''}`}><NavLink to='/careers/'>Careers</NavLink></button>
                    <button className={`mx-4 hidden md:inline lg:inline xl:inline 2xl:inline nav contactUs ${location.pathname === '/careers' ? 'active' : ''} `} onClick={handleContactClick}>Contact Us</button>
                </div>
                
                <p className='hidden md:inline lg:inline xl:inline 2xl:inline'></p>

                <div className='inline md:invisible'>
                  <button onClick={handleMenuClick}><MenuIcon/></button>
                  <div className={`${isMenuOpen ? 'flex flex-col' : 'hidden'} px-4 py-2 rounded-lg absolute right-[10vw] justify-center bg-white text-black`}>
                      <button className={`mx-4 my-1 nav ${location.pathname === '/aboutus/' ? 'active' : ''}`}><NavLink to='/aboutus/'>About Us</NavLink></button> 
                      <button className={`mx-4 my-1 nav ${location.pathname === '/courses/' ? 'active' : ''}`}><NavLink to='/courses/'>Courses</NavLink></button>
                      <button className={`mx-4 hidden md:inline lg:inline xl:inline 2xl:inline nav ${location.pathname === '/blog/' ? 'active' : ''}`}><NavLink to='/blog/'>Blog</NavLink></button>
                      <button className={`mx-4 my-1 nav ${location.pathname === '/careers/' ? 'active' : ''}`}><NavLink to='/careers/'>Careers</NavLink></button>
                      <button className='mx-4 my-1'>Contact Us</button>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar;