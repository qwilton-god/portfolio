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
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NjExMzc3NDR8MA&ixlib=rb-4.1.0&q=85"
          alt="Hero Background"
          className="hero-image"
        />
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
