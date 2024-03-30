import React from 'react';
import Logo from '../images/logo.png'
import '../index.css';
import {NavLink} from 'react-router-dom';
import {useLocation} from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  return (
    <div className='header'>
        <div className='mx-[8vw] bg-[#f6eff7] rounded-3xl p-3 mt-4'>
            <div className='flex justify-between'>
                <img src={Logo} alt="HiveEd Logo" />

                <div className='flex justify-center'>
                    <button className={`mx-4 nav ${location.pathname === '/aboutus/' ? 'active' : ''}`}><NavLink to='/aboutus/'>About Us</NavLink></button>
                    <button className={`mx-4 nav ${location.pathname === '/courses/' ? 'active' : ''}`}><NavLink to='/courses/'>Courses</NavLink></button>
                    <button className='mx-4'>Blog</button>
                    <button className={`mx-4 nav ${location.pathname === '/careers/' ? 'active' : ''}`}><NavLink to='/careers/'>Careers</NavLink></button>
                    <button className='mx-4'>Contact Us</button>
                </div>
                
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Header;