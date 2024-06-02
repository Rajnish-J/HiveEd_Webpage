import {React} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Divider, Button, TextField, FormControl} from '@mui/material';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Courses = () => {
  
  const initialValues = {
        name: '',
        number: '',
        message: ''
  };
    
  const onSubmit = (values, onSubmitProps) => {
    const serviceId = 'service_zmob26a';
    const templateId = 'template_pl7kcfc';
    const publicKey = 'gKg9Aj_i-99vIbIxY';

    const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'HiveEd',
        message: [values.number, values.message]
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(() => {
        alert(' Email sent successfully ')
    })
    .catch(() => {
        alert('Email not sent. Try again later');
    })
    
    onSubmitProps.resetForm();
  }
    
  const validate = Yup.object({
        name: Yup.string().required('* Name is required'),
        number: Yup.number().required('* Mobile Number is required')
                .test( 'len', '* Mobile number must be 10 digits', (value) => typeof value === 'number' && value.toString().length === 10)
  });

  return (
    <div>

        <Navbar/>

        <div className='mx-[9vw] mt-40'>

            <section>
                <h1 className='font-bold text-[#bc43df] text-4xl mb-10'>Unlock Your Potential with <br /> Our Comprehensive Course Offerings</h1>
                <p className='text-justify'>Welcome to HiveED! Here, we offer a diverse range of courses designed to empower individuals like you to unlock their full potential and thrive in today's dynamic world. Our courses cover a wide spectrum of skills, catering to various interests and career paths. Whether you're looking to enhance your technical proficiency, or acquire new creative skills, we have something for everyone. With expert-led instruction, hands-on projects, and interactive learning experiences, our platform is your gateway to personal and professional growth. Explore our courses and embark on a journey of continuous learning and skill mastery.</p>
            </section>


            <section className='my-20'>

                <h1 className='text-[#bc43df] text-3xl'>Courses we offer</h1>
 
                <div className='md:mx-[9vw] mt-12 mb-20'>

                    <section>
                        <div className='bg-white drop-shadow-2xl rounded-xl py-6 px-16 flex flex-col md:flex-row justify-center md:justify-between items-center overflow-hidden'>
                            
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-[#bc43df] text-lg md:text-2xl'>Complete Interview Preparation</h1>
                                <button className='bg-transparent border border-green-300 rounded-full px-5 py-1 text-green-300 my-8'>Online Live class</button>
                                <h4 className='mb-8 text-black'>3 Months <FiberManualRecordIcon className='p-2 text-gray-400'/> Weekdays <span className='text-gray-700'>(Evenings)</span> </h4>
                                <button className='bg-[#bc43df] text-white rounded-full px-4 py-1'>Enquire now</button>
                            </div>

                            <Divider orientation='vertical' sx={{height:'27vh', border:'1px solid rgba(153,153,153,1)'}} className='hidden lg:inline'/>
                            <Divider orientation='vertical' sx={{height:'27vh', border:'1px solid rgba(153,153,153,1)', margin: '0 5vw'}} className='hidden md:inline lg:hidden'/>
                            <Divider sx={{width: '100%', border:'1px solid rgba(153,153,153,1)', margin: '4vw 0'}} className='inline md:hidden'/>

                            <div className='flex flex-col justify-start items-start'>
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
                    </section>


                    <section className='my-12'>
                        <div className='bg-white drop-shadow-2xl rounded-xl py-6 px-16 flex flex-col md:flex-row justify-center md:justify-between items-center overflow-hidden'>
                            
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-[#bc43df] text-lg md:text-2xl'>Paced Interview Preparation</h1>
                                <button className='bg-transparent border border-green-300 rounded-full px-5 py-1 text-green-300 my-8'>Online Live class</button>
                                <h4 className='mb-8 text-black'>3 Months <FiberManualRecordIcon className='p-2 text-gray-400'/> Weekdays <span className='text-gray-700'>(Evenings)</span> </h4>
                                <button className='bg-[#bc43df] text-white rounded-full px-4 py-1'>Enquire now</button>
                            </div>

                            <Divider orientation='vertical' sx={{height:'27vh', border:'1px solid rgba(153,153,153,1)'}} className='hidden lg:inline'/>
                            <Divider orientation='vertical' sx={{height:'27vh', border:'1px solid rgba(153,153,153,1)', margin: '0 2vw'}} className='hidden md:inline lg:hidden'/>
                            <Divider sx={{width: '100%', border:'1px solid rgba(153,153,153,1)', margin: '4vw 0'}} className='inline md:hidden'/>

                            <div className='flex flex-col justify-start items-start'>
                                <ul>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Java or Python</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>SQL</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Resume Preparation</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Personal skill development</li>
                                    <li><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Attire tips</li>
                                </ul>
                            </div>

                        </div>
                    </section>


                    <section>
                        <div className='bg-white drop-shadow-2xl rounded-xl py-6 px-16 flex flex-col md:flex-row justify-center md:justify-between items-center overflow-hidden'>
                            
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-[#bc43df] text-lg md:text-2xl'>Core Crack Pack</h1>
                                <button className='bg-transparent border border-green-300 rounded-full px-5 py-1 text-green-300 my-8'>Online Live class</button>
                                <h4 className='mb-8 text-black'>3 Months <FiberManualRecordIcon className='p-2 text-gray-400'/> Weekdays <span className='text-gray-700'>(Evenings)</span> </h4>
                                <button className='bg-[#bc43df] text-white rounded-full px-4 py-1'>Enquire now</button>
                            </div>

                            <Divider orientation='vertical' sx={{height:'27vh', border:'1px solid rgba(153,153,153,1)'}} className='hidden lg:inline'/>
                            <Divider orientation='vertical' sx={{height:'27vh', border:'1px solid rgba(153,153,153,1)', margin: '0 5vw'}} className='hidden md:inline lg:hidden'/>
                            <Divider sx={{width: '100%', border:'1px solid rgba(153,153,153,1)', margin: '4vw 0'}} className='inline md:hidden'/>

                            <div className='flex flex-col justify-center items-center'>
                                <ul>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Electronic Devices</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Networks</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Analog and Digital Circuits</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Signals and Systems</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Communication and <br /> Control System</li>
                                    <li><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Electromagnetics</li>
                                </ul>
                            </div>

                        </div>
                    </section>


                    <section className='my-12'>
                        <div className='bg-white drop-shadow-2xl rounded-xl py-6 px-16 flex flex-col md:flex-row justify-center md:justify-between items-center overflow-hidden'>
                            
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-[#bc43df] text-lg md:text-2xl'>Individual Courses</h1>
                                <button className='bg-transparent border border-green-300 rounded-full px-5 py-1 text-green-300 my-8'>Online Live class</button>
                                <h4 className='mb-8 text-black'>3 Months <FiberManualRecordIcon className='p-2 text-gray-400'/> Weekdays <span className='text-gray-700'>(Evenings)</span> </h4>
                                <button className='bg-[#bc43df] text-white rounded-full px-4 py-1'>Enquire now</button>
                            </div>

                            <Divider orientation='vertical' sx={{height:'27vh', border:'1px solid rgba(153,153,153,1)'}} className='hidden lg:inline'/>
                            <Divider orientation='vertical' sx={{height:'27vh', border:'1px solid rgba(153,153,153,1)', margin: '0 5vw'}} className='hidden md:inline lg:hidden'/>
                            <Divider sx={{width: '100%', border:'1px solid rgba(153,153,153,1)', margin: '4vw 0'}} className='inline md:hidden'/>

                            <div className='flex flex-col justify-start items-start'>
                                <ul>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Java</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Python</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>C Language</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>SQL</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Aptitude</li>
                                    <li className='mb-2'><CheckCircleOutlineIcon className='text-green-300 mr-2'/>Electronics</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                </div>
            </section>


            <section className='my-40 bg-white drop-shadow-2xl rounded-xl px-8 py-12 flex flex-col lg:flex-row overflow-hidden'>

                <div>
                    <h1 className='text-[#bc43df] text-4xl'>Apply or Enquire about Courses</h1>
                    <p className='text-md mt-[2vw]'>Feel free to reach out, we'd love to hear from you</p>
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
                                    <Field as={TextField} label={<span>Mobile Number<span className='text-red-700'>*</span></span>} type='number' name='number'/>
                                    <ErrorMessage name='number'>{ (errorMessage) => <div className='text-red-500'>{errorMessage}</div> }</ErrorMessage>
                                </FormControl>
                                
                                <FormControl fullWidth>
                                    <Field as={TextField} label='Message' name='message' multiline rows={4}/>
                                </FormControl>

                                <Button variant='contained' type='submit' sx={{borderRadius: '3rem', marginTop: '2vw',backgroundColor: '#be34e5'}}>Send</Button>
                                {/* <TextField>
                                <label htmlFor="file-upload"><input type="file" id="file-upload" style={{ display: 'none' }} onChange={handleFileChange}/>
                                <Button variant="contained" component="label" htmlFor="file-upload">Upload File </Button>
                                </label></TextField>
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

export default Courses;