import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Community from './components/Community';
import Services from './components/Services';
import Blog from './components/Blog';
import Volunteer from './components/Volunteer';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Programs />
        <Blog />
        <Volunteer />
        <Community />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}

export default App;