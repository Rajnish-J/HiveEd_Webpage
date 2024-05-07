import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import HiveEd from '../images/Blog/hive-ed.png';

const Blog = () => {
  return (
    <div>

        <Navbar/>

        <section>

            <div className='mt-40 mx-[9vw]'>
            
                <h1 className='text-[#be34e5] font-bold text-4xl'>It's Our Blog</h1>

                <p className='mt-8 text-justify text-lg'>Platinum Certification Standard: Hive.ed maintains high-quality standards for course content and assessment to ensure that learners receive platinum-level certifications. All courses must meet these rigorous quality criteria.</p>
                <p className='my-8 text-justify text-lg'>Adaptation to Industry Trends: Hive.ed stays current with industry trends and emerging domains. Regularly update course offerings to reflect the evolving needs of learners and the job market.</p>
                <p className='mb-8 text-justify text-lg'>Global Recognition: Hive.ed aims for global recognition and brand certification. All courses are designed to meet international standards and provide learners with credentials that hold value worldwide.</p>

            </div>

            <img src={HiveEd} alt="HiveEd" className='mb-8 w-[100%]'/>

        </section>
        
        <Footer/>

    </div>
  )
}

export default Blog;