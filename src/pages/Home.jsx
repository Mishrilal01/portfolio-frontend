import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
