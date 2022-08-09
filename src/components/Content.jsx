import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConfigContext from "../context/ConfigContext"
import About from './About/About'
import Contact from './Contact'
import Experience from './Experience/Experience'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'

const Content = () => {
    const context = useContext(ConfigContext)
    return (
        <div style={{ height: 700 }} className="bg-white rounded-md border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<About  value={context.about} />} />
                    <Route exact path='/about' element={<About value={context.about}/>} />
                    <Route exact path="/experiences" element={<Experience value={context.experiences} />} />
                    <Route exact path="/services" element={<Services value={context.services} />} />
                    <Route exact path="/testimonials" element={<Testimonials value={context.testimonials}/>} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Content
