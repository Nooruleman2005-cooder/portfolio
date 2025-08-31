import React , {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Experiance from './Pages/Experiance'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
  AOS.init({ duration: 1200, once: false });
}, []);
  
  return (
    <>
      <Header />

      <section id="home" >
        <Home />
      </section>

      <section id="about" >
        <About />
      </section>

      <section id="projects" >
        <Project />
      </section>

      <section id="experience" >
        <Experiance />
      </section>

      <section id="contact" >
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
