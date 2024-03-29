import React from 'react';
import Logo from '../images/logo.png'
import '../index.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='mx-[8vw] bg-[#f6eff7] rounded-3xl p-3 mt-4'>
            <div className='flex justify-between'>
                <img src={Logo} alt="HiveEd Logo" />

                <div className='flex justify-center'>
                    <button className='mx-4'>About Us</button>
                    <button className='mx-4'>Courses</button>
                    <button className='mx-4'>Blog</button>
                    <button className='mx-4'>Careers</button>
                    <button className='mx-4'>Contact Us</button>
                </div>
                
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Header;