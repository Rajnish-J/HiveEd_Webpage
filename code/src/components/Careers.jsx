import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Divider, TextField, Button, FormControl} from '@mui/material';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Careers = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     if(!file.type.match('application/pdf')){
//         alert('Please upload a PDF file only');
//         return;
//     }

//     if(file.size > 50*1024){
//         alert('File size should be less than 50kb');
//         return;
//     }

//     setSelectedFile(file);
//   };

  const initialValues = {
    name: '',
    email: '',
    number: '',
    cv: '',
  };

  const onSubmit = (values, onSubmitProps) => {
    const serviceId = 'service_zmob26a';
    const templateId = 'template_pl7kcfc';
    const publicKey = 'gKg9Aj_i-99vIbIxY';

    const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'HiveEd',
        message:[values.number, values.cv]
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(() => {
        alert(' Email sent successfully ');
    })
    .catch(() => {
        alert('Email not sent. Try again later');
    });

    onSubmitProps.resetForm();
  };

  const validate = Yup.object({
    name: Yup.string().required('* Name is required'),
    email: Yup.string().email('Invalid Email').required('* Email is required'),
    number: Yup.number().required('* Contact Number is required')
            .test( 'len', '* Mobile number must be 10 digits', (value) => typeof value === 'number' && value.toString().length === 10),
    cv: Yup.string().required('* Cover Letter is required'),
  });

//   const [focused, setFocused] = useState(false);

  return (
    <div>

        <Navbar/>

        <div className='mx-[9vw] mt-40'>

            <section>
                <h1 className='text-[#bc43df] text-4xl my-12 font-bold'>Join Our Team, <br className='hidden lg:inline'/> Shape the Future.</h1>
                <p className='text-lg text-justify'>Welcome to our Careers page! Here, you'll discover more than just job opportunities – you'll find a community of passionate individuals dedicated to making a difference. At HiveED, we believe that innovation thrives in an inclusive and diverse environment. Whether you're an experienced professional or just starting your career journey, we invite you to explore our openings and embark on a rewarding path with us. Join us in shaping the future and unleashing your potential.</p>
            </section>


            <Divider sx={{backgroundColor: 'rgba(153, 153, 153, 0.2)', margin: '4vw 0'}}/>


            <section>

                <h1 className='text-[#bc43df] font-bold text-2xl'>Current Hirings</h1>

                <div className='bg-[#fbf4fd] flex justify-between items-center px-8 py-4 rounded-lg my-6 overflow-hidden'>
                    <h3>Trainer</h3>
                    <KeyboardArrowDownIcon/>
                </div>

                <div className='bg-[#fbf4fd] flex justify-between items-center px-8 py-4 rounded-lg my-6 overflow-hidden'>
                    <h3>Subject Admin</h3>
                    <KeyboardArrowDownIcon/>
                </div>

                <div className='bg-[#fbf4fd] flex justify-between items-center px-8 py-4 rounded-lg my-6 overflow-hidden'>
                    <h3>Open Position</h3>
                    <KeyboardArrowDownIcon/>
                </div>

            </section>

            <section className='my-20'>

                <div className='flex flex-col justify-start mt-8 bg-white rounded-lg drop-shadow-2xl p-8 lg:mx-40 overflow-hidden'>

                    <h1 className='text-[#bc43df] mb-4 font-bold text-2xl'>Become a HiveEd Instructor</h1>
                    <p className='mb-8'>Ignite your passion with a supportive community of instructors online.</p>

                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validate}>
                        {(formik) => (
                            <Form className='text-center'>

                                <FormControl fullWidth>
                                    <Field as={TextField} label={<span>Full Name<span className='text-red-700'>*</span></span>} name='name'/>
                                    <ErrorMessage name='name'>{ (errorMessage) => <div className='text-red-500'>{errorMessage}</div> }</ErrorMessage>
                                </FormControl>

                                <FormControl fullWidth sx={{margin: '2vw 0'}}>
                                    <Field as={TextField} label={<span>Email Id<span className='text-red-700'>*</span></span>} name='email'/>
                                    <ErrorMessage name='email'>{ (errorMessage) => <div className='text-red-500'>{errorMessage}</div> }</ErrorMessage>
                                </FormControl>

                                <FormControl fullWidth>
                                    <Field as={TextField} label={<span>Contact Number<span className='text-red-700'>*</span></span>} type='number' name='number'/>
                                    <ErrorMessage name='number'>{ (errorMessage) => <div className='text-red-500'>{errorMessage}</div> }</ErrorMessage>
                                </FormControl>

                                <FormControl fullWidth sx={{margin: '2vw 0'}}>
                                    <Field as={TextField} label={<span>Cover Letter<span className='text-red-700'>*</span></span>} name='cv'/>
                                    <ErrorMessage name='cv'>{ (errorMessage) => <div className='text-red-500'>{errorMessage}</div> }</ErrorMessage>
                                </FormControl>

                                {/* <FormControl fullWidth sx={{textAlign: 'left', margin: '0.5 0 1vw'}}>
                                    <div className='inline md:flex items-center' name='resume'>
                                        <label htmlFor="file-upload">
                                            <input type="file" id="file-upload" style={{ display: 'none' }} onChange={handleFileChange} name='resume'/>
                                            <Button variant="contained" component="label" htmlFor="file-upload">Upload Resume</Button>
                                        </label>
                                    </div>
                                    <div className='text-xl text-black ml-6'>{selectedFile && (<p>{selectedFile.name}</p>)}</div>
                                </FormControl> */}

                                <Button variant='contained' type='submit' sx={{backgroundColor: '#be34e5', borderRadius: '3rem', padding: '0.5rem 4rem'}}>Send</Button>

                            </Form>
                        )}
                    </Formik>

                </div>

            </section>


            {/*                                 
                                <FormControl fullWidth sx={{textAlign: 'left', margin: '0.5 0 1vw'}}>
                                    <div className='inline md:flex items-center' name='resume'>
                                        <label htmlFor="file-upload">
                                            <input type="file" id="file-upload" style={{ display: 'none' }} onChange={handleFileChange} name='resume'/>
                                            <Button variant="contained" component="label" htmlFor="file-upload">Upload Resume</Button>
                                        </label>
                                        <div className='text-xl text-black ml-6'>{selectedFile && ( <p>{selectedFile.name}</p>)}</div>
                                    </div>
                                </FormControl>
                                
                                <Button variant='contained' sx={{backgroundColor: '#be34e5', borderRadius: '3rem', padding: '0.5rem 4rem'}}>Send</Button>
                            </Form>
                     )}
                    </Formik>
                    
                </div>

            </section> */}

        </div>

        <Footer/>

    </div>
  )
}

export default Careers