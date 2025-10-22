import React, { useEffect, useState, useCallback } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import LightRays from '../components/LightRays';
import { throttle } from '../lib/throttle';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 50),
    []
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="portfolio-container">
      <LightRays mousePosition={mousePosition} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
