import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-primary selection:bg-white/20 relative overflow-x-hidden">
      <div className="fixed inset-0 bg-grid-pattern bg-[center_top] pointer-events-none z-0"></div>
      <div className="relative z-10 block">
        <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
