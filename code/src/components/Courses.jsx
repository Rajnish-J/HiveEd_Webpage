import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Divider from '@mui/material/Divider';

const Courses = () => {
  return (
    <div>

        <Header/>

        <div className='mx-[9vw] mt-40'>

            <div>
                <h1 className='font-bold text-[#bc43df] text-4xl mb-12'>Unlock Your Potential with <br /> Our Comprehensive Course Offerings</h1>
                <p>Welcome to HiveED! Here, we offer a diverse range of courses designed to empower individuals like you to unlock their full potential <br /> and thrive in today's dynamic world. Our courses cover a wide spectrum of skills, catering to various interests and career paths. <br /> Whether you're looking to enhance your technical proficiency, or acquire new creative skills, we have something for everyone. With <br /> expert-led instruction, hands-on projects, and interactive learning experiences, our platform is your gateway to personal and <br /> professional growth. Explore our courses and embark on a journey of continuous learning and skill mastery.</p>
            </div>

            <div>
                <h1 className='text-[#bc43df] text-3xl my-16'>Courses we offer</h1>

                <div className='mx-[9vw]'>

                    <div className='bg-white drop-shadow-2xl rounded-xl mb-12 p-6 flex'>
                        <div className='mr-[9vw] ml-[1vw]'>
                            <h1 className='text-[#bc43df] text-2xl mb-8'>Complete Interview <br /> Preparation</h1>
                            <button className='bg-transparent border mb-8 border-green-300 rounded-full px-5 py-1 text-green-300'>Online Live class</button>
                            <h4 className='mb-8 text-black'>3 Months <FiberManualRecordIcon className='p-2 text-gray-400'/> Weekdays <span className='text-gray-700'>(Evenings)</span> </h4>
                            <button className='bg-[#bc43df] text-white rounded-full px-4 py-1'>Enquire now</button>
                        </div>

                        <Divider orientation='vertical' sx={{width:'0.1vw', height:'30vh', border:'none', bgcolor:'gray'}}/>

                        <div className='flex flex-col justify-center items-center ml-[6vw]'>
                            <ul>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Java or Python or C Language</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>SQL</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Aptitude</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Resume Preparation</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Personal skill development</li>
                                <li><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Attire tips</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-white drop-shadow-2xl rounded-xl mb-12 p-6 flex'>
                        <div className='mr-[8.5vw] ml-[1vw]'>
                            <h1 className='text-[#bc43df] text-2xl mb-8'>Paced Interview <br /> Preparation</h1>
                            <button className='bg-transparent border mb-8 border-green-300 rounded-full px-5 py-1 text-green-300'>Online Live class</button>
                            <h4 className='mb-8 text-black'>2.5 Months <FiberManualRecordIcon className='p-2 text-gray-400'/> Weekdays <span className='text-gray-700'>(Evenings)</span> </h4>
                            <button className='bg-[#bc43df] text-white rounded-full px-4 py-1'>Enquire now</button>
                        </div>

                        <Divider orientation='vertical' sx={{width:'0.1vw', height:'30vh', border:'none', bgcolor:'gray'}}/>

                        <div className='flex flex-col justify-center items-center ml-[6vw]'>
                            <ul>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Java or Python</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>SQL</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Resume Preparation</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Personal skill development</li>
                                <li><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Attire tips</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-white drop-shadow-2xl rounded-xl mb-12 p-6 flex'>
                        <div className='ml-[1vw] mr-[8.5vw]'>
                            <h1 className='text-[#bc43df] text-2xl mb-8'>Core Crack <br /> Pack</h1>
                            <button className='bg-transparent border mb-8 border-green-300 rounded-full px-5 py-1 text-green-300'>Online Live class</button>
                            <h4 className='mb-8 text-black'>2.5 Months <FiberManualRecordIcon className='p-2 text-gray-400'/> Weekdays <span className='text-gray-700'>(Evenings)</span> </h4>
                            <button className='bg-[#bc43df] text-white rounded-full px-4 py-1'>Enquire now</button>
                        </div>

                        <Divider orientation='vertical' sx={{width:'0.1vw', height:'30vh', border:'none', bgcolor:'gray'}}/>

                        <div className='flex flex-col justify-center items-center ml-[6vw]'>
                            <ul>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Electronic devices</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Networks</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Analog and Digital circuits</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Signals and systems</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Communication and control system</li>
                                <li><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Electromagnetics</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-white drop-shadow-2xl rounded-xl mb-12 p-6 flex'>
                        <div className='ml-[1vw] mr-[8.5vw]'>
                            <h1 className='text-[#bc43df] text-2xl mb-8'>Individual Courses</h1>
                            <button className='bg-transparent border mb-8 border-green-300 rounded-full px-5 py-1 text-green-300'>Online Live class</button>
                            <h4 className='mb-8 text-black'>1.5 Months <FiberManualRecordIcon className='p-2 text-gray-400'/> Weekdays <span className='text-gray-700'>(Evenings)</span> </h4>
                            <button className='bg-[#bc43df] text-white rounded-full px-4 py-1'>Enquire now</button>
                        </div>

                        <Divider orientation='vertical' sx={{width:'0.1vw', height:'30vh', border:'none', bgcolor:'gray'}}/>

                        <div className='flex flex-col justify-center items-center ml-[6vw]'>
                            <ul>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Java</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Python</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>C Language</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>SQL</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Aptitude</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Electronics</li>
                                <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Communication systems</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className='mb-16 mt-48 bg-white drop-shadow-xl rounded-lg px-8 py-12 flex'>
                    <div>
                        <h1 className='text-[#bc43df] text-4xl'>Apply or enquire <br /> about courses</h1>
                        <p className='text-md mt-[2vw]'>Feel free to reach out, we'd love to hear from you</p>
                    </div>
                    <div className='ml-[24vw]'>
                        <form className='flex flex-col justify-center items-center'>
                            <div className='relative my-4'>
                                <input type="text" placeholder='Name' required className='border w-[20vw] border-gray-500 rounded-md p-1 shadow-xl shadow-white bg-[#fafafa]'/>
                                <span className='text-red-600 absolute top-[18%] left-[18%] focus:hidden'>*</span>
                            </div>
                            <div className='relative my-4'>
                                <input type="email" placeholder='Email' required className='border w-[20vw] border-gray-500 rounded-md p-1 shadow-xl shadow-white bg-[#fafafa]'/>
                                <span className='text-red-600 absolute top-[18%] left-[16%] focus:hidden'>*</span>
                            </div>
                            <textarea placeholder="Message" cols="37" rows="5" className='border my-4 border-gray-500 rounded-md p-1 shadow-xl shadow-white bg-[#fafafa]'/><p></p>
                            <button className='bg-[#bc43df] px-5 py-1 rounded-full text-white'>Send</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>

        <Footer/>

    </div>
  )
}

export default Courses;