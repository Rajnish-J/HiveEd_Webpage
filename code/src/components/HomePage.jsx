import {React, useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../index.css';
import HiveEd_Symbol from '../images/HomePage/hiveed_symbol.png';
import Student from '../images/HomePage/Student.png';
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
import {Divider, TextField, Button, FormControl} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const HomePage = () => {
  const [formDataArray, setFormDataArray] = useState([]);

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const onSubmit = (values, onSubmitProps) => {
    const formData ={
        name: values.name,
        email: values.email,
        message: values.message
    }
    const serviceId = 'service_zmob26a';
    const templateId = 'template_pl7kcfc';
    const publicKey = 'gKg9Aj_i-99vIbIxY';

    const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'HiveEd',
        message: values.message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfully', response);
    })
    .catch((error) => {
        console.error('Error sending email', error);
    })

    setFormDataArray([...formDataArray,formData]);
    onSubmitProps.resetForm();
  }

  const validate = Yup.object({
    name: Yup.string().required('* Name is required'),
    email: Yup.string().email('Invalid email').required('* Email is required'),
    message: Yup.string().required('* Message is required')
  });


  return (
    <div className='bg-[#FAFAFA]'>

        <Navbar/>

        <div className='mx-[9vw] mt-40'>

            <section className='grid grid-cols-2 gap-x-8 md:grid-cols-3 overflow-hidden'>
                <div>
                    <h1 className='font-bold text-3xl md:text-3xl lg:text-5xl'>Acquire, Learn, <br /> Expertise</h1>
                    <p className='text-sm md:text-md my-8 lg:my-16 text-justify'>Stay Informed, Inspired, And Empowered As You Expand Your knowledge, Acquire New Skills, And Master Expertise Through Our Dynamic Skill Development Platform.</p>
                    <button className='rounded-3xl bg-[#be34e5] text-sm md:text-lg p-3 px-5 text-white'>Explore More</button>
                </div>
                <div className='flex justify-center items-center'><img src={HiveEd_Symbol} alt="HiveEd symbol"/></div>
                <div className='hidden md:inline'><img src={Student} alt="student" /></div>
            </section>


            <section className='my-12 relative w-[100%] h-[100%] flex flex-col justify-center items-center overflow-hidden'>
                <img src={Background_Image} alt="Background" className='absolute top-0 w-[100%] h-[100%]'/>
                <h1 className=' text-[#bc43df] font-bold text-3xl mb-8'>About us</h1>
                <p className='text-lg text-center mx-[2vw] md:mx-[10vw]'>Welcome to HiveED, where education meets innovation in tech. With out passionate trainers and practical approach, we've committed to nurturing your skills and igniting you creativity. Join us as we redefine IT and electronics education, one student at a time. Together, let's pave the way for a brighter future in the tech industry.</p>
            </section>


            <section className='mt-6 md:mt-12 lg:mt-12 mb-8'>

                <h1 className='text-[#bc43df] font-bold text-3xl text-center'>Why HiveED</h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 my-8 gap-4'>

                    <div className='overflow-hidden bg-white rounded-lg drop-shadow-2xl p-4'>
                        <button className='border border-gray-400 rounded-full px-2 py-1'>Mentorship</button>
                        <p className='text-gray-600 text-sm my-3 mr-4'>Empowering tech talent through personalized mentorship.</p>
                        <img src={Mentorship} alt="Mentorship" className='float-right'/>
                    </div>

                    <div className='overflow-hidden bg-white rounded-lg drop-shadow-2xl p-4'>
                        <button className='border border-gray-400 rounded-full px-2 py-1'>Materials</button>
                        <p className='text-gray-600 text-sm my-3 mr-4'>Unlock your potential with engaging, industry-relevant materials.</p>
                        <img src={Materials} alt="Materials" className='float-right'/>
                    </div>

                    <div className='overflow-hidden bg-white rounded-lg drop-shadow-2xl p-4'>
                        <button className='border border-gray-400 rounded-full px-2 py-1'>Self analysis Test</button>
                        <p className='text-gray-600 text-sm my-3 mr-4'>Discover your strengths and chart your path with our free self-analysis test.</p>
                        <img src={Self_Analysis_Test} alt="Self Analysis" className='float-right'/>
                    </div>

                </div>

                <div className='flex flex-col justify-center items-center bg-white drop-shadow-2xl rounded-lg py-12 px-4 overflow-hidden'>
                    <h1 className='text-6xl font-bold mb-8'>100%</h1>
                    <div className='grid grid-cols-3 gap-x-6'>
                        <button className='cursor-pointer border border-gray-400 rounded-full px-2 py-1'>Active Interaction</button>
                        <button className='cursor-pointer border border-gray-400 rounded-full px-2 py-1'>Placement Guidance</button>
                        <button className='cursor-pointer border border-gray-400 rounded-full px-2 py-1'>Career Guidance</button>
                    </div>
                </div>

            </section>


            <section className='my-12'>

                <h1 className='text-[#bc43df] font-bold text-2xl text-center'>Courses we offer</h1>

                <div className='grid grid-cols-1 gap-y-4 lg:flex justify-center mt-8 lg:mx-12'>

                    <div className='flex flex-col'>

                        <div className='bg-white h-[20vh] w-[80vw] sm:h-[25vh] md:h-[30vh] lg:h-[22vh] lg:w-[40vw] xl:h-[34vh] xl:w-[24vw] 2xl:h-[34vh] 2xl:[30vw] rounded-lg drop-shadow-2xl overflow-hidden relative cursor-pointer hover:bg-[#f9eefc] hover:shape-move'>
                            <img src={Shape_A_Interview} alt="Shape A Interview" className='absolute left-[7%]'/>
                            <img src={Shape_B_Interview} alt="Shape B Interview" className='absolute bottom-0'/>
                            <img src={Shape_C_Interview} alt="Shape C Interview" className='absolute bottom-0 right-0'/>
                            <h2 className='font-bold text-xl 2xl:text-3xl absolute top-[20%] left-[12%]'>Complete interview <br /> prep pack</h2>
                            <p className='text-md 2xl:text-lg absolute bottom-[15%] left-[10%]'>Explore</p>
                            <ArrowForwardIcon className='absolute 2xl:text-2xl bottom-[15%] right-[15%]'/>
                        </div>

                        <div className='bg-white mt-8 lg:mt-[20vh] h-[20vh] w-[80vw] sm:h-[25vh] md:h-[30vh] lg:h-[22vh] lg:w-[40vw] xl:h-[34vh] xl:w-[24vw] 2xl:h-[34vh] 2xl:[30vw] rounded-lg drop-shadow-2xl overflow-hidden relative cursor-pointer hover:bg-[#f9eefc] hover:shape-move'>
                            <img src={Shape_A_Core} alt="Shape A Core" className='absolute bottom-0 right-0'/>
                            <img src={Shape_B_Core} alt="Shape B Core" className='absolute top-0 right-0'/>
                            <img src={Shape_C_Core} alt="Shape C Core" className='absolute top-0 left-0'/>
                            <h2 className='font-bold text-xl absolute top-[20%] left-[12%]'>Core crack <br /> pack</h2>
                            <p className='text-md absolute bottom-[15%] left-[10%]'>Explore</p>
                            <ArrowForwardIcon className='absolute bottom-[15%] right-[15%]'/>
                        </div>

                    </div>

                    <div className='flex flex-col lg:ml-24'>

                        <div className='bg-white lg:mt-[25vh] h-[20vh] w-[80vw] sm:h-[25vh] md:h-[30vh] lg:h-[22vh] lg:w-[40vw] xl:h-[34vh] xl:w-[24vw] 2xl:h-[34vh] 2xl:[30vw] rounded-lg drop-shadow-2xl overflow-hidden relative cursor-pointer hover:bg-[#f9eefc] hover:shape-move'>
                            <img src={Shape_A_Paced} alt="Shape A Paced" className='absolute left-0 top-0'/>
                            <img src={Shape_B_Paced} alt="Shape B Paced" className='absolute bottom-0'/>
                            <img src={Shape_C_Paced} alt="Shape C Paced" className='absolute bottom-[20%] right-0'/>
                            <h2 className='font-bold text-xl absolute top-[20%] left-[12%]'>Paced interview <br /> prep pack</h2>
                            <p className='text-md absolute bottom-[15%] left-[10%]'>Explore</p>
                            <ArrowForwardIcon className='absolute bottom-[15%] right-[15%]'/>
                        </div>

                        <div className='bg-white mt-8 lg:mt-[20vh] h-[20vh] w-[80vw] sm:h-[25vh] md:h-[30vh] lg:h-[22vh] lg:w-[40vw] xl:h-[34vh] xl:w-[24vw] 2xl:h-[34vh] 2xl:[30vw] rounded-lg drop-shadow-2xl overflow-hidden relative cursor-pointer hover:bg-[#f9eefc] hover:shape-move'>
                            <img src={Shape_A_Individual} alt="Shape A Individual" className='absolute right-[10%]'/>
                            <img src={Shape_B_Individual} alt="Shape B Individual" className='absolute bottom-[17%]'/>
                            <img src={Shape_C_Individual} alt="Shape C Individual" className='absolute bottom-0 right-0'/>
                            <h2 className='font-bold text-xl absolute top-[20%] left-[12%]'>Individual <br /> Courses</h2>
                            <p className='text-md absolute bottom-[15%] left-[10%]'>Explore</p>
                            <ArrowForwardIcon className='absolute bottom-[15%] right-[15%]'/>
                        </div>

                    </div>

                </div>
 
            </section>


            <section className='my-40'>

                <h1 className='text-[#bc43df] font-bold text-3xl text-center'>Our teaching</h1>

                <div className='mt-20 mb-32'>

                    <div className='relative flex lg:justify-center justify-start'>
                        <CircleIcon className='text-[#eac0f5] lg:absolute top-0'/>
                        <Divider className='hidden lg:inline' orientation='vertical' variant='middle' flexItem sx={{width:'2px',height: '20vh', bgcolor:'#eac0f5', border:'none', marginBottom: 0}}/>
                        <div className='lg:text-right lg:absolute right-[54%] top-0 ml-5 lg:ml-0'>
                            <h1 className='font-bold text-xl mb-4'>Interactive class</h1>
                            <p>Engaging sessions that encourage active participation, <br className='hidden lg:inline' /> discussions, and collaborative learning.</p>
                        </div>
                    </div>

                    <div className='relative flex lg:justify-center justify-start my-12 lg:my-0'>
                        <CircleIcon className='text-[#eac0f5] lg:absolute top-0'/>
                        <Divider className='hidden lg:inline' orientation='vertical' variant='middle' flexItem sx={{width:'2px', height:'20vh', border:'none', bgcolor:'#eac0f5', margin: 0}}/>
                        <div className='lg:text-left lg:absolute left-[53%] top-0 ml-5 lg:ml-0'>
                            <h1 className='font-bold text-xl mb-4'>Enriched content & <br className='hidden lg:inline'/> Notes provided</h1>
                            <p>Access to meticulously curated materials, including notes, <br className='hidden lg:inline'/> resources, and references to enhance learning.</p>
                        </div>
                    </div>

                    <div className='relative flex lg:justify-center justify-start'>
                        <CircleIcon className='text-[#eac0f5] lg:absolute top-0'/>
                        <Divider className='hidden lg:inline' orientation='vertical' variant='middle' flexItem sx={{width:'2px', height:'20vh', border:'none', bgcolor:'#eac0f5', margin: 0}}/>
                        <div className='lg:text-right lg:absolute right-[54%] top-0 ml-5 lg:ml-0'>
                            <h1 className='font-bold text-xl mb-4'>Real time examples</h1>
                            <p>Application-oriented learning through relevant and timely <br className='hidden lg:inline'/> instances from various industries or contexts.</p>
                        </div>
                    </div>

                    <div className='relative flex lg:justify-center justify-start my-12 lg:my-0'>
                        <CircleIcon className='text-[#eac0f5] lg:absolute top-0'/>
                        <Divider className='hidden lg:inline' orientation='vertical' variant='middle' flexItem sx={{width:'2px', height:'20vh', border:'none', bgcolor:'#eac0f5', margin: 0}}/>
                        <div className='lg:text-left lg:absolute left-[53%] top-0 ml-5 lg:ml-0'>
                            <h1 className='font-bold text-xl mb-4'>Mentor guidance</h1>
                            <p>Dedicated mentors providing personalized support, <br className='hidden lg:inline'/> guidance, and assistance throughout the learning journey.</p>
                        </div>
                    </div>

                    <div className='relative flex lg:justify-center justify-start'>
                        <CircleIcon className='text-[#eac0f5] lg:absolute top-0'/>
                        <div className='lg:text-right lg:absolute right-[54%] top-0 ml-5 lg:ml-0'>
                            <h1 className='font-bold text-xl mb-4'>Assessment & Feedback</h1>
                            <p>Ongoing evaluation of progress and performance, coupled <br className='hidden lg:inline'/> with constructive feedback for improvement.</p>
                        </div>
                    </div>

                </div>

            </section>


            <section id='contact-us' className='my-40 bg-white drop-shadow-2xl rounded-xl px-8 py-12 flex flex-col lg:flex-row overflow-hidden'>

                <div>
                    <h1 className='text-[#bc43df] text-4xl'>Let's <br className='hidden lg:inline'/> Connect</h1>
                    <p className='text-md mt-[2vw]'>Questions, comments or requests? <br className='hidden lg:inline'/> Feel free to reach out, we'd love to hear from you</p>
                </div>

                <div className='text-center lg:ml-[25vw] mt-[10vw] lg:mt-0'>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validate}>
                        {(formik) => (
                            <Form>
                                <FormControl fullWidth>
                                    <Field as={TextField} label={<span>Name<span className='text-red-700'>*</span></span>} name='name'/>
                                    <ErrorMessage name='name'>{ (errorMessage) => <div className='text-red-500'>{errorMessage}</div> }</ErrorMessage>
                                </FormControl>
                                
                                <FormControl fullWidth sx={{margin: '2vw 0'}}>
                                    <Field as={TextField} label={<span>Email<span className='text-red-700'>*</span></span>} name='email'/>
                                    <ErrorMessage name='email'>{ (errorMessage) => <div className='text-red-500'>{errorMessage}</div> }</ErrorMessage>
                                </FormControl>
                                
                                <FormControl fullWidth>
                                    <Field as={TextField} label={<span>Message<span className='text-red-700'>*</span></span>} name='message' multiline rows={4}/>
                                    <ErrorMessage name='message'>{ (errorMessage) => <div className='text-red-500'>{errorMessage}</div> }</ErrorMessage>
                                </FormControl>

                                <Button variant='contained' type='submit' sx={{borderRadius: '3rem', marginTop: '2vw',backgroundColor: '#be34e5'}}>Send</Button>
                                {/* <TextField>
                                <</TextField>
                                <TextField><ArrowForwardIcon/></TextField>*/}
                            </Form>
                        )}
                    </Formik>
                    
                </div>

            </section>

        </div>

        <Footer/>

    </div>
  )
}

export default HomePage