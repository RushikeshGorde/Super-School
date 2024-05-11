import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Footer from './components/footer/Footer'
// import WhySuperSchool from './components/pages/whySuperSchool/WhySuperSchool'

import OurMissionVision from './components/pages/Our Vision & Mission/OurMissionVision'
import Achievement from './components/pages/Achievements/Achievement'
// import Principal from './components/pages/Principal Desk/Principal'
import Contact from './components/pages/contact/Contact'
// import WhyChooseUs from './components/pages/whySuperSchool/WhyChooseUs'
import WhySuperSchool from './components/pages/whySuperSchool/WhySuperSchool'
import PrincipalMessage from './components/pages/Principal Desk/PrincipleMessage'
import Circular from './components/pages/Cocurriculum Activity/circular'
import Aminities from './components/pages/school-animities/Aminities'
import CombinedComponent from './components/pages/Calander/Calender'
import FacultyStaff from './components/pages/teacher-staff/FacultyStaff'
// import Courses from './components/pages/Cources/Courses'
import News from './components/pages/News/News'
import BlogPage from './components/pages/blog/Blog'
import Admissions from './components/pages/Admition/admission'
import Our_courses from './components/pages/Cources/Our_courses'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/WhySuperSchool' element={<WhySuperSchool />} />
        <Route path='/PrincipalDesk' element={<PrincipalMessage />} />
        <Route path='/OurVisionMission' element={<OurMissionVision />} />
        <Route path='/Achievements' element={<Achievement />} />
        <Route path='/circular' element={<Circular />} />
        <Route path='/news' element={<News/>} />
        <Route path='/blogPage' element={<BlogPage/>} />
        <Route path='/teaching-team' element={<FacultyStaff />} />
        <Route path='/calender' element={<CombinedComponent />} />
        <Route path='/school' element={<Aminities />} />
        <Route path='/admission' element={<Admissions />} />
        <Route path='/courses' element={<Our_courses />} />
       
        

        {/* No Pages Available Route */}
        <Route path='*' element={<div className='container d-flex justify-content-center align-items-center' style={{ height: '78vh' }}><img src="./errorpage.avif" alt="404" height={220} /></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
