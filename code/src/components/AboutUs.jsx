import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About_Us from '../images/Aboutus/aboutus.png';
import Rajnish from '../images/Aboutus/Rajnish.png';

const AboutUs = () => {
  return (
    <div>

        <Header/>

        <div className='mx-[9vw] mt-40'>

          <div className='flex'>
            <img src={About_Us} alt="About us" />
            <p className='mt-14 ml-12'>At HiveEd, our commitment to fostering knowledge and igniting curiosity drives our efforts. We offer a diverse range of courses including placements, and domain-based learning. Our platinum certifications stand as a testament to learners’ dedication, while limited course access ensures active engagement. The Self Analysis test guarantees an optimal learning experience, and for those seeking personalized mentorship, our subscription service connects learners with experts.In a world that demands continuous learning and adaptability, HiveEd, stands as a beacon of education, innovation, and empowerment. Join us in redefining the way knowledge is acquired and applied, unlocking limitless possibilities for every learner’s future.</p>
          </div>

          <div className='flex my-20 mx-12'>

            <div className='bg-[#fbf4fd] w-[80vw] p-4'>
              <h1 className='text-[#bc43df] font-bold text-xl'>Passionate <br /> Educators</h1>
              <p className='text-justify mt-4'>Our team of trainers, while relatively new to the field, bring abundant enthusiasm, empathy, and commitment to their roles. They recognize the individual requirements of each student and tailor their teaching methods accordingly.</p>
            </div>

            <div className='bg-[#fbf4fd] ml-6 w-[80vw] p-4'>
              <h1 className='text-[#bc43df] font-bold text-xl'>Practival Learning <br /> Approach</h1>
              <p className='text-justify mt-4'>We advocate for learning through hands-on experience. Our emphasis on projects, real-world applications, and interactive sessions ensures that students not only understand theoretical concepts but also acquire practical skills directly applicable in the industry.</p>
            </div>

            <div className='bg-[#fbf4fd] ml-6 w-[80vw] p-4'>
              <h1 className='text-[#bc43df] font-bold text-xl'>Student-Centered <br /> Approach</h1>
              <p className='text-justify mt-4'>Our priority lies in the journey of our students. From providing continuous support and mentorship to nurturing a collaborative learning environment, we are dedicated to assisting students in flourishing at every stage.</p>
            </div>

          </div>

          <div className='flex flex-col justify-center items-center'>

            <div className='flex flex-col justify-center items-center'>
              <div className=''>
              <img src={Rajnish} alt="Rajnish" className='object-fill rounded-full h-[13vh] w-[7vw]'/></div>
              <p>Mr.Rajnish J</p>
              <p>Chief Executive Officer, Founder</p>
            </div>

            <p className='text-center mx-[20vw] my-6'>" HiveEd aims for global recognition and brand certification. All courses are designed to meet international standards and provide learners with credentials that hold value worldwide. "</p>
            
            <div className='flex my-10'>
              <div className='flex flex-col justify-center items-center'>
                <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                <p>Mr.Murugesan</p>
                <p>Chief Research & Business Officer, Co-Founder</p>
              </div>
              <div className='flex mx-12 flex-col justify-center items-center'>
                <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                <p>Mr.Raghul</p>
                <p>Chief Technology Officer, Co-Founder</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                <p>Mr.Sanjay</p>
                <p>Chief Curriculum Officer, Co-Founder</p>
              </div>
            </div>
            
            <p className='text-center mx-[20vw] my-6'>" Hive.ed encourages a culture of continuous learning and adaptability. Learners are encouraged to explore a diverse range of courses to stay competitive in the ever-evolving world of education and work. "</p>

            <div className='text-center'>
              <h1 className='text-[#bc43df] text-3xl mb-8'>Our Team</h1>
              
              <div className='flex justify-center items-baseline'>

                <div className='flex flex-col mx-6 justify-center items-center'>
                  <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                  <p>Swetha</p>
                  <p>Java Admin</p>
                </div>
                
                <div className='flex flex-col mx-6 justify-center items-center'>
                  <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                  <p>Sushmitha</p>
                  <p>Java Admin</p>
                </div>
                
                <div className='flex flex-col mx-6 justify-center items-center'>
                  <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                  <p>Sabari</p>
                  <p>Java Trainer</p>
                </div>
                
                <div className='flex flex-col mx-6 justify-center items-center'>
                  <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                  <p>Raghul Raja</p>
                  <p>Python Admin</p>
                </div>
                
                <div className='flex flex-col mx-6 justify-center items-center'>
                  <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                  <p>Ponharieesh</p>
                  <p>Python Trainer</p>
                </div>

                <div className='flex flex-col mx-6 justify-center items-center'>
                    <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                    <p>Preethi</p>
                    <p>Aptitude Admin</p>
                </div>

              </div>

              <div className='flex justify-center items-baseline mt-8'>
                <div className='flex flex-col mx-4 justify-center items-center'>
                    <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                    <p>Rithika</p>
                    <p>C Admin & Trainer, Aptitude Trainer</p>
                  </div>

                  <div className='flex flex-col mx-4 justify-center items-center'>
                    <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                    <p>Ragavi</p>
                    <p>SQL Admin & Trainer, Aptitude Trainer</p>
                  </div>

                  <div className='flex flex-col mx-4 justify-center items-center'>
                    <div className='bg-gray-400 rounded-full w-[5.5vw] h-[10vh]'><img src="" alt="" /></div>
                    <p>Nandhakumar</p>
                    <p>SQL Admin & Trainer, Python Trainer, <br /> Website Developer</p>
                  </div>

              </div>
            </div>

          </div>

          <div className='mt-12'>
            <h1 className='text-[#bc43df] text-3xl mb-6'>Our Vision & Mission</h1>
            <p className='text-justify'>At HiveEd, our goal is to revolutionize the standard of education. We are firm believers that every student should have the opportunity to receive top-notch training that not only equips them with technical skills but also fosters their passion and creativity. Our mission is to empower the future tech workforce by offering inclusive, captivating, and hands-on education in programming, databases, and aptitude. We are dedicated to creating a learning atmosphere where students feel encouraged, stimulated, and motivated. Through tailored support and inventive teaching approaches, our aim is to unleash the inherent potential of each and every learner.</p>
          </div>

          <div className='mb-28'>
            <h1 className='text-[#bc43df] my-6 text-3xl'>Why we started ?</h1>
            <p className='text-justify'>At Hive.ed, our journey began with a shared vision – to revolutionize the way education is delivered and accessed. We recognized the evolving needs of learners in a rapidly changing world and set out to create a platform that not only imparts knowledge but also nurtures curiosity, fosters growth, and paves the way for future success.</p>
          </div>

        </div>

        <Footer/>

    </div>
  )
}

export default AboutUs