import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../index.css';
import HiveEd_Symbol from '../images/HomePage/hiveed_symbol.png';
import Student_1 from '../images/HomePage/student_1.png';
import Student_2 from '../images/HomePage/student_2.png';
import Background_Image from '../images/HomePage/background_aboutus.png';
import Mentorship from '../images/HomePage/mentorship.png';
import Materials from '../images/HomePage/materials.png';
import Self_Analysis_Test from '../images/HomePage/self_analysis_test.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Shape_A_Interview from '../images/HomePage/shapeA-interview.png';
import Shape_B_Interview from '../images/HomePage/shapeB-interview.png';
import Shape_C_Interview from '../images/HomePage/shapeC-interview.png';
import Shape_A_Paced from '../images/HomePage/shapeA_paced.png';
import Shape_B_Paced from '../images/HomePage/shapeB_paced.png';
import Shape_C_Paced from '../images/HomePage/shapeC_paced.png';
import Shape_A_Core from '../images/HomePage/shapeA_core.png';
import Shape_B_Core from '../images/HomePage/shapeB_core.png';
import Shape_C_Core from '../images/HomePage/shapeC_core.png';
import Shape_A_Individual from '../images/HomePage/shapeA_individual.png';
import Shape_B_Individual from '../images/HomePage/shapeB_individual.png';
import Shape_C_Individual from '../images/HomePage/shapeC_individual.png';
import Divider from '@mui/material/Divider';
import CircleIcon from '@mui/icons-material/Circle';

const HomePage = () => {
  return (
    <div className='bg-[#FAFAFA]'>

        <Header/>

        <div className='mx-[9vw] mt-40'>

            <div className='relative'>
                <h1 className='font-bold text-6xl'>Acquire, Learn, <br /> Expertise</h1>
                <p className='text-md my-8'>Stay Informed, Inspired, And Empowered As You Expand Your <br /> knowledge, Acquire New Skills, And Master Expertise Through Our <br /> Dynamic Skill Development Platform.</p>
                <button className='rounded-3xl bg-[#be34e5] p-2 px-4 mb-44 text-white'>Explore More</button>
                <img src={HiveEd_Symbol} alt="HiveEd Symbol" className='absolute right-[42%] bottom-[50%]'/>
                <img src={Student_1} alt="Student 1" className='absolute right-[10%] top-0'/>
                <img src={Student_2} alt="Student 2" className='absolute right-0 top-[11rem]'/>
            </div>

            <div className='relative mt-4 flex justify-center mb-5'>
                <img src={Background_Image} alt="Background" />
                <h1 className='absolute top-[15%] text-[#bc43df] font-bold text-3xl'>About us</h1>
                <p className='absolute text-lg top-[45%] text-center'>Welcome to HiveED, wher education meets innovation in texh. With out passionate trainers <br /> and practical approach, we've committed to nurturing your skills and igniting you creativity. <br />Join us as we redefine IT and electronics education, one student at a time. Together, let's pave <br /> the way for a brighter future in the texh industry.</p>
            </div>

            <div className='mt-16 mb-8'>

                <h1 className='text-[#bc43df] font-bold text-3xl text-center'>Why HiveED</h1>
                
                <div className='mt-20 flex justify-center'>
                    <div className='bg-white w-[20vw] drop-shadow-2xl rounded-2xl p-5 mr-5'>
                        <button className='border border-black rounded-3xl px-2 py-1'>Mentorship</button>
                        <p className='text-gray-600 text-sm mt-3'>Empowering tech talent through <br /> personalized mentorship.</p>
                        <img src={Mentorship} alt="Mentorship" className=' mt-2 float-right'/>
                    </div>

                    <div className='bg-white w-[20vw] drop-shadow-2xl rounded-2xl p-5 mr-5'>
                        <button className='border border-black rounded-3xl px-2 py-1'>Materials</button>
                        <p className='text-gray-600 text-sm mt-3'>Unlock your potential with engaging, <br /> industry-relevant materials.</p>
                        <img src={Materials} alt="Materials" className=' mt-2 float-right'/>
                    </div>

                    <div className='bg-white w-[20vw] drop-shadow-2xl rounded-2xl p-5'>
                        <button className='border border-black rounded-3xl px-2 py-1'>Self analysis Test</button>
                        <p className='text-gray-600 text-sm mt-3'>Discover your strengths and chart your <br /> path with our free self-analysis test.</p>
                        <img src={Self_Analysis_Test} alt="Self Analysis" className=' mt-2 float-right'/>
                    </div>

                </div>

                <div className='mt-3 bg-white drop-shadow-2xl rounded-2xl mx-[9vw] h-[24vh] flex flex-col items-center justify-center'>
                    <h1 className='font-bold text-5xl text-center'>100%</h1>
                    <div className='flex justify-center mt-8'>
                        <button className='border border-black rounded-3xl px-2 py-1 mr-5'>Active Interaction</button>
                        <button className='border border-black rounded-3xl px-2 py-1 mr-5'>Placement Guidance</button>
                        <button className='border border-black rounded-3xl px-2 py-1'>Career Guiddance</button>
                    </div>
                </div>

            </div>

            <div className='my-16 flex flex-col'>
                <h1 className='text-[#bc43df] font-bold text-2xl text-center'>Courses we offer</h1>

                <div className='flex flex-row justify-start'>
                    <div className='flex flex-col'>

                        <div className='bg-white ml-[13vw] rounded-xl drop-shadow-2xl h-[34vh] mt-16 w-[24vw] cursor-pointer hover:bg-[#f9eefc] hover:shape-move'>
                            <img src={Shape_A_Interview} alt="Shape A Interview" className='absolute left-[7%]'/>
                            <img src={Shape_B_Interview} alt="Shape B Interview" className='absolute bottom-0'/>
                            <img src={Shape_C_Interview} alt="Shape C Interview"  className='absolute bottom-0 right-0'/>
                            <h2 className='font-bold text-xl absolute top-[20%] left-[12%]'>Complete interview <br /> prep pack</h2>
                            <p className='text-md absolute bottom-[15%] left-[10%]'>Explore</p>
                            <ArrowForwardIcon className='absolute bottom-[15%] right-[15%]'/>
                        </div>

                        <div className='bg-white ml-[13vw] rounded-xl drop-shadow-2xl h-[34vh] w-[24vw] mt-[10vw] cursor-pointer hover:bg-[#f9eefc] hover:shape-move'>
                            <img src={Shape_A_Core} alt="Shape A Core" className='absolute bottom-0 right-0'/>
                            <img src={Shape_B_Core} alt="Shape B Core" className='absolute top-0 right-0'/>
                            <img src={Shape_C_Core} alt="Shape C Core"  className='absolute top-0 left-0'/>
                            <h2 className='font-bold text-xl absolute top-[20%] left-[12%]'>Core crack <br /> pack</h2>
                            <p className='text-md absolute bottom-[15%] left-[10%]'>Explore</p>
                            <ArrowForwardIcon className='absolute bottom-[15%] right-[15%]'/>
                        </div>

                    </div>

                    <div className='flex flex-col mt-[18vw]'>

                        <div className='bg-white ml-[13vw] rounded-xl drop-shadow-2xl h-[34vh] w-[24vw] cursor-pointer hover:bg-[#f9eefc] hover:shape-move'>
                            <img src={Shape_A_Paced} alt="Shape A Paced" className='absolute left-0'/>
                            <img src={Shape_B_Paced} alt="Shape B Paced" className='absolute bottom-0'/>
                            <img src={Shape_C_Paced} alt="Shape C Paced"  className='absolute bottom-[20%] right-0'/>
                            <h2 className='font-bold text-xl absolute top-[20%] left-[12%]'>Paced interview <br /> prep pack</h2>
                            <p className='text-md absolute bottom-[15%] left-[10%]'>Explore</p>
                            <ArrowForwardIcon className='absolute bottom-[15%] right-[15%]'/>
                        </div>

                        <div className='bg-white ml-[13vw] rounded-xl drop-shadow-2xl h-[34vh] mt-[10vw] w-[24vw] cursor-pointer hover:bg-[#f9eefc] hover:shape-move'>
                            <img src={Shape_A_Individual} alt="Shape A Individual" className='absolute right-[10%]'/>
                            <img src={Shape_B_Individual} alt="Shape B Individual" className='absolute bottom-[17%]'/>
                            <img src={Shape_C_Individual} alt="Shape C Individual"  className='absolute bottom-0 right-0'/>
                            <h2 className='font-bold text-xl absolute top-[20%] left-[12%]'>Individual <br /> Courses</h2>
                            <p className='text-md absolute bottom-[15%] left-[10%]'>Explore</p>
                            <ArrowForwardIcon className='absolute bottom-[15%] right-[15%]'/>
                        </div>

                    </div>
                </div>

            </div>

            <div className='my-16 mb-[70vw]'>
                <h1 className='text-[#bc43df] font-bold text-3xl text-center'>Our teaching</h1>
                <div className='my-20'>

                    <div className='relative flex justify-center'>
                        <CircleIcon className='text-[#eac0f5] absolute top-0'/>
                        <Divider orientation='vertical' sx={{width:'2px', height:'100vh', border:'none', bgcolor:'#eac0f5', position:'absolute', top:'5px'}}/>
                        <div className='text-right absolute left-[13%] top-0'>
                            <h1 className='font-bold text-xl mb-4'>Interactive class</h1>
                            <p>Engaging sessions that encourage active participation, <br /> discussions, and collaborative learning.</p>
                        </div>
                    </div>

                    <div className='relative flex justify-center'>
                        <CircleIcon className='text-[#eac0f5] absolute top-[25vh]'/>
                        <div className='text-left absolute left-[60%] top-[25vh]'>
                            <h1 className='font-bold text-xl mb-4'>Enriched content & <br /> Notes provided</h1>
                            <p>Access to meticulously curated materials, including notes, <br /> resources, and references to enhance learning.</p>
                        </div>
                    </div>

                    <div className='relative flex justify-center'>
                        <CircleIcon className='text-[#eac0f5] absolute top-[50vh]'/>
                        <div className='text-right absolute left-[13%] top-[50vh]'>
                            <h1 className='font-bold text-xl mb-4'>Real time examples</h1>
                            <p>Application-oriented learning through relevant and timely <br /> instances from various industries or contexts.</p>
                        </div>
                    </div>

                    <div className='relative flex justify-center'>
                        <CircleIcon className='text-[#eac0f5] absolute top-[75vh]'/>
                        <div className='text-left absolute left-[60%] top-[75vh]'>
                            <h1 className='font-bold text-xl mb-4'>Mentor guidance</h1>
                            <p>Dedicated mentors providing personalized support, <br /> guidance, and assistance throughout the learning journey.</p>
                        </div>
                    </div>

                    <div className='relative flex justify-center'>
                        <CircleIcon className='text-[#eac0f5] absolute top-[100vh]'/>
                        <div className='text-right absolute left-[13%] top-[100vh]'>
                            <h1 className='font-bold text-xl mb-4'>Assessment & Feedback</h1>
                            <p>Ongoing evaluation of progress and performance, coupled <br /> with constructive feedback for improvement.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='mb-16 mt-48 bg-white drop-shadow-xl rounded-lg px-8 py-12 flex'>
                <div>
                    <h1 className='text-[#bc43df] text-4xl'>Let's <br /> connect</h1>
                    <p className='text-md mt-[2vw]'>Questions, comments or requests? <br /> Feel free to reach out, we'd love to hear from you</p>
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

        <Footer/>

    </div>
  )
}

export default HomePage