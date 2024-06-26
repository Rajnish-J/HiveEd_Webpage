import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Blog from './components/Blog';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='courses' element={<Courses/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='careers' element={<Careers/>}/>
    </Routes>
  );
}

export default App;
