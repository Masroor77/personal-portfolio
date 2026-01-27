import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
        <p>&copy; {new Date().getFullYear()} Masroor RM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
