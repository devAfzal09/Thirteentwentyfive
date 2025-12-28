import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import Services from '../../components/OurServices'
import Ai from '../../components/Ai'
import ToolsTechnology from '../../components/Tools&Technology'
import Projects from '../../components/Projects'
import Achievement from '../../components/Achievement'
import Testimonials from '../../components/Testimonials'
// import Contact from './components/Contact'
import Accordion from '../../ReactbitzComponent/Accordion'
import Loop from '../../components/Loop'
import WhyChooseUs from '../../components/ChooesUs/index.jsx'
import React from 'react'
import AboutUs from '../../components/AboutUs'
import ContactUs from '../../components/ContactUs'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Ai />
      <Services />
      <Projects />
      <Achievement />
      <Testimonials />
      <Accordion />
      <Loop />
      <ToolsTechnology />
      <WhyChooseUs />
      {/*  */}
      <div className="px-15">
        <AboutUs />
      </div>
       <div className="">
        <ContactUs />
      </div>
    </>
  )
}
