import React from 'react';
import Logo from '../images/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='bg-[#f3dbf9] border-t-2 border-[#a93fc4] py-8'>
        <div className='grid grid-cols-5 px-36 pb-8'>
            
            <div>
                <img src={Logo} alt="HiveEd Logo" />
                <div className='mt-40 flex items-center'>
                    <h3 className='text-[#e836ffb4] text-lg mr-3'>Follow us</h3>
                    <InstagramIcon className='mr-3'/>
                    <FacebookIcon className='mr-3'/>
                    <YouTubeIcon className='mr-3'/>
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