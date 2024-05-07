import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About_Us from '../images/Aboutus/aboutus.png';
import Background_Image from '../images/HomePage/background_aboutus.png';
import Avatar from '@mui/material/Avatar';
import Rajnish from '../images/Aboutus/Rajnish.png';

const AboutUs = () => {
  return (
    <div>

        <Navbar/>

        <div className='mx-[9vw] mt-40'>

          <section className='flex'>
            <img src={About_Us} alt="About us" className='hidden md:inline'/>
            <p className='mt-14 md:ml-12'>At HiveEd, our commitment to fostering knowledge and igniting curiosity drives our efforts. We offer a diverse range of courses including placements, and domain-based learning. Our platinum certifications stand as a testament to learners’ dedication, while limited course access ensures active engagement. The Self Analysis test guarantees an optimal learning experience, and for those seeking personalized mentorship, our subscription service connects learners with experts.In a world that demands continuous learning and adaptability, HiveEd, stands as a beacon of education, innovation, and empowerment. Join us in redefining the way knowledge is acquired and applied, unlocking limitless possibilities for every learner’s future.</p>
          </section>

          <img src={Background_Image} alt="Background" />

          <section className='grid md:grid-cols-3 md:gap-x-12 gap-y-6 md:gap-y-0 mb-12'>

            <div className='bg-[#fbf4fd] rounded-lg py-4 px-6'>
              <h1 className='text-[#bc43df] font-bold text-xl'>Passionate Educators</h1>
              <p className='text-justify mt-4'>Our team of trainers, while relatively new to the field, bring abundant enthusiasm, empathy, and commitment to their roles. They recognize the individual requirements of each student and tailor their teaching methods accordingly.</p>
            </div>

            <div className='bg-[#fbf4fd] rounded-lg py-4 px-6'>
              <h1 className='text-[#bc43df] font-bold text-xl'>Practival Learning Approach</h1>
              <p className='text-justify mt-4'>We advocate for learning through hands-on experience. Our emphasis on projects, real-world applications, and interactive sessions ensures that students not only understand theoretical concepts but also acquire practical skills directly applicable in the industry.</p>
            </div>

            <div className='bg-[#fbf4fd] rounded-lg py-4 px-6'>
              <h1 className='text-[#bc43df] font-bold text-xl'>Student-Centered Approach</h1>
              <p className='text-justify mt-4'>Our priority lies in the journey of our students. From providing continuous support and mentorship to nurturing a collaborative learning environment, we are dedicated to assisting students in flourishing at every stage.</p>
            </div>
            
          </section>

          <section className='flex flex-col justify-center items-center'>

            <div className='flex flex-col justify-center items-center'>
              <Avatar src={Rajnish} alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
              <p>Mr. Rajnish J</p>
              <p className='text-center'>Chief Executive Officer, Founder</p>
            </div>

            <p className='md:mx-[20vw] mx-[4vw] my-6 text-lg text-center'><span className='text-3xl'>"</span> HiveEd aims for global recognition and brand certification. All courses are designed to meet international standards and provide learners with credentials that hold value worldwide. <span className='text-3xl'>"</span></p>

            <div className='grid grid-cols-1 md:grid-cols-3 my-12 gap-y-6 md:gap-y-0'>

              <div className='flex flex-col justify-center items-center'>
                <Avatar src='' alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
                <p>Mr. Murugesan</p>
                <p className='text-center'>Chief Research & Business Officer, Co-Founder</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <Avatar src='' alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
                <p>Mr. Raghul</p>
                <p className='text-center'>Chief Texhnology Officer, Co-Founder</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <Avatar src='' alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
                <p>Mr. Sanjay</p>
                <p className='text-center'>Chief Curriculum Officer, Co-Founder</p>
              </div>

            </div>

            <p className='md:mx-[20vw] mx-[4vw] mb-6 text-lg text-center'><span className='text-3xl'>"</span> Hive.ed encourages a culture of continuous learning and adaptability. Learners are encouraged to explore a diverse range of courses to stay competitive in the ever-evolving world of education and work. <span className='text-3xl'>"</span></p>

          </section>


          <section className='mt-8 mb-24'>
            <h1 className='text-[#bc43df] font-bold text-3xl mb-8'>Our Team</h1>
           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0'>

              <div className='flex flex-col justify-center items-center'>
                <Avatar src='' alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
                <p>Rithika</p>
                <p className='text-center'>C Admin & Trainer, Aptitude Trainer</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <Avatar src='' alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
                <p>Ragavi</p>
                <p className='text-center'>SQL Admin & Trainer, Aptitude Trainer</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <Avatar src='' alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
                <p>Nandhakumar</p>
                <p className='text-center'>SQL Admin & Trainer, Python Trainer, Website Developer</p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 my-12 gap-y-6 md:gap-y-0'>

             <div className='flex flex-col justify-center items-center'>
                <Avatar src='' alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
                <p>Sabari</p>
                <p>Java Trainer</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <Avatar src='' alt='Rajnish' sx={{width: '100px', height: '100px'}}/>
                <p>Ponharieesh</p>
                <p>Python Trainer</p>
              </div>

            </div>

          </section>


          <section className='my-12'>
            <h1 className='text-[#bc43df] text-3xl mb-6'>Our Vision & Mission</h1>
            <p className='text-justify'>At HiveEd, our goal is to revolutionize the standard of education. We are firm believers that every student should have the opportunity to receive top-notch training that not only equips them with technical skills but also fosters their passion and creativity. Our mission is to empower the future tech workforce by offering inclusive, captivating, and hands-on education in programming, databases, and aptitude. We are dedicated to creating a learning atmosphere where students feel encouraged, stimulated, and motivated. Through tailored support and inventive teaching approaches, our aim is to unleash the inherent potential of each and every learner.</p>
          </section>


          <section className='mb-28'>
            <h1 className='text-[#bc43df] my-6 text-3xl'>Why we started ?</h1>
            <p className='text-justify'>At Hive.ed, our journey began with a shared vision – to revolutionize the way education is delivered and accessed. We recognized the evolving needs of learners in a rapidly changing world and set out to create a platform that not only imparts knowledge but also nurtures curiosity, fosters growth, and paves the way for future success.</p>
          </section>

        </div>

        <Footer/>

    </div>
  )
}

export default AboutUs