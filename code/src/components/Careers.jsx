import React from 'react';
import Header from './Header';
import Footer from './Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Careers = () => {
  return (
    <div>

        <Header/>

        <div className='mx-[9vw] mt-40'>

            <div className='mb-24'>
                <h1 className='text-[#bc43df] text-4xl my-12 font-bold'>Join Our Team, <br /> Shape the Future.</h1>
                <p className='text-lg'>Welcome to our Careers page! Here, you'll discover more than just job opportunities – you'll find a community of passionate individuals dedicated to making a difference. At HiveED, we believe that innovation thrives in an inclusive and diverse environment. Whether you're an experienced professional or just starting your career journey, we invite you to explore our openings and embark on a rewarding path with us. Join us in shaping the future and unleashing your potential.</p>
            </div>

            <hr className='border border-gray-300'/>

            <div className='mt-20'>
                <h1 className='text-[#bc43df] font-bold text-2xl'>Current hirings</h1>
                <div className='bg-[#fbf4fd] flex justify-between px-8 my-8 py-3 rounded-md'>
                    <h3>Trainer</h3>
                    <KeyboardArrowDownIcon/>
                </div>

                <div className='bg-[#fbf4fd] flex justify-between px-8 mb-8 py-3 rounded-md'>
                    <h3>Subject admin</h3>
                    <KeyboardArrowDownIcon/>
                </div>

                <div className='bg-[#fbf4fd] flex justify-between px-8 py-3 rounded-md'>
                    <h3>Open position</h3>
                    <KeyboardArrowDownIcon/>
                </div>

            </div>


            <div className='mt-24'>
                <h1 className='text-[#bc43df] font-bold text-xl mb-12'>Join us here</h1>
                <p>Join Our Team of Inspiring Educators: <br /> Empower Minds, Shape Futures!</p>
            </div>

            <div className='bg-white my-20 drop-shadow-2xl flex flex-col mx-40 justify-start p-8'>
                <h1 className='text-[#bc43df] mb-4 font-bold text-2xl'>Become a HiveEd Instructor</h1>
                <p className='mb-8'>Ignite your passion with a supportive community of instructors online.</p>
                <div className='flex flex-col text-center'>

                    <form>
                        <div className='relative'>
                            <input type="text" placeholder='Full name' required className='border border-gray-400 bg-[#fafafa] p-2 w-[100%] mb-4'/>
                            <span className='text-red-600 absolute left-[9.5%] pt-2'>*</span>
                        </div>
                        
                        <div className='relative'>
                            <input type="email" placeholder='Email Id' required className='border border-gray-400 bg-[#fafafa] p-2 w-[100%] mb-4'/>
                            <span className='text-red-600 absolute left-[8%] pt-2'>*</span>
                        </div>

                        <div className='relative'>
                            <input type="number" placeholder='Contact number' required className='border border-gray-400 bg-[#fafafa] p-2 w-[100%] mb-4'/>
                            <span className='text-red-600 absolute left-[15%] pt-2'>*</span>
                        </div>

                        <div className='relative'>
                            <input type="file" placeholder='Resume' required className='border border-gray-400 bg-[#fafafa] p-2 w-[100%] mb-4'/>
                            <span className='text-red-600 absolute left-[26%] pt-3'><span className='text-black'> - Resume</span>*</span>
                        </div>

                        <div className='relative'>
                            <textarea name="" placeholder='Cover letter' rows="6" required className='border border-gray-400 bg-[#fafafa] p-2 w-[100%] mb-4'/>
                            <span className='text-red-600 absolute left-[11%] pt-2'>*</span>
                        </div>
                        <button className='bg-[#bc43df] text-white px-16 py-1 rounded-full'>Register</button>
                    </form>

                </div>
            </div>

        </div>

        <Footer/>

    </div>
  )
}

export default Careers