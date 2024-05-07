import React from 'react';
import Logo from '../images/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='bg-[#f3dbf9] border-t-2 border-[#a93fc4] py-8 overflow-hidden'>
        <div className='grid grid-cols-3 gap-16 md:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 2xl:grid-cols-5 px-10 xl:px-36 lg:px-36 2xl:px-36 pb-8 place-content-center'>
            
            <div>
                <img src={Logo} alt="HiveEd Logo" />
                <div className='mt-40 flex items-center'>
                    <h3 className='text-[#e836ffb4] text-lg mr-3'>Follow us</h3>
                    <a href="https://www.instagram.com/social.hiveed/" target='blank' className='cursor-pointer hover:text-pink-400'><InstagramIcon className='xl:mr-3'/></a>
                    <a href="http://www.linkedin.com/in/hiveed-social" target='blank' className='cursor-pointer hover:text-blue-600'><LinkedInIcon className='xl:mr-3'/></a>
                    <a href="https://youtube.com/@HiveEd-yz2ol?si=gAmQ5x5QzkIm6GMk" target='blank' className='cursor-pointer hover:text-red-600'><YouTubeIcon className='xl:mr-3'/></a>
                </div>
            </div>

            <div className='text-end'>
                <h3 className='font-bold'>Courses</h3>
                <ul className='mt-4'>
                    <li className='pb-2'>Explore HiveEd</li>
                    <li className='pb-2'>Pricing</li>
                    <li>Career Guidance</li>
                </ul>
            </div>

            <div className='text-end'>
                <h3 className='font-bold'>Features</h3>
                <ul className='mt-4'>
                    <li className='pb-2'>Course Analytics</li>
                    <li className='pb-2'>Platinum Certification <br /> Standard</li>
                    <li className='pb-2'>Self Analysis Test</li>
                    <li className='pb-2'>Community Engagement</li>
                    <li>Subscriptions</li>
                </ul>
            </div>

            <div className='text-end'>
                <h3 className='font-bold'>Resources</h3>
                <ul className='mt-4'>
                    <li className='pb-2'>Blog</li>
                    <li className='pb-2'>Case Studies</li>
                    <li>Help</li>
                </ul>
            </div>

            <div className='text-end'>
                <h3 className='font-bold'>Company</h3>
                <ul className='mt-4'>
                    <li className='pb-2'>About</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>

        <hr className='border-white mx-20'/>
        <p className='text-center text-gray-500 pt-3'>@2024 All rights reserved</p>
    </div>
  )
}

export default Footer