import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Services />
          <Resume />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
