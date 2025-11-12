import React from 'react';
import './Hero.css';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>
      
      <div className="hero-content">
        <div className="hero-label">
          <span className="label-text">Full-Stack Developer</span>
        </div>
        
        <h1 className="hero-title">
          Создаю современные
          <span className="gradient-text"> веб-приложения</span>
        </h1>
        
        <p className="hero-description">
          React • Python • FastAPI • MongoDB
        </p>

        <div className="hero-actions">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="hero-button"
          >
            Посмотреть проекты
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
