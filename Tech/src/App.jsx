import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Services from './pages/Services/Services'
import Ai from './pages/Ai'
import ToolsTechnology from './pages/Tools&Technology'
import Projects from './pages/Projects';
import Achievement from './pages/Achievement'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Accordion from './ReactbitzComponent/Accordion'
import Loop from './pages/Loop'
import WhyChooseUs from './pages/ChooesUs'



function App() {

  return (
    <>
          <Navbar />
          <Home />
          <Services />
          <Ai />
          <Projects />
          <Achievement />
          <Testimonials />
          <Accordion />          
          <Loop />
          <ToolsTechnology />
          <WhyChooseUs />
          <Contact />
    </>
  )
}

export default App
