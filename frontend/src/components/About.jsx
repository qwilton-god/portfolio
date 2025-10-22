import React from 'react';
import './About.css';
import { Code2, Database, Rocket, Zap } from 'lucide-react';

const FEATURES = [
  {
    id: 'frontend',
    icon: Code2,
    title: 'Frontend Development',
    description: 'Современные интерфейсы с React, анимации и адаптивный дизайн'
  },
  {
    id: 'backend',
    icon: Database,
    title: 'Backend Development',
    description: 'Масштабируемые API на Python с FastAPI и работа с базами данных'
  },
  {
    id: 'fullstack',
    icon: Rocket,
    title: 'Full-Stack Projects',
    description: 'Комплексные решения от идеи до развертывания в production'
  },
  {
    id: 'devops',
    icon: Zap,
    title: 'Git & DevOps',
    description: 'Работа с Git, CI/CD и современными инструментами разработки'
  }
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-label">О себе</span>
          <h2 className="section-title">
            Превращаю идеи в <span className="highlight-text">рабочие продукты</span>
          </h2>
          <p className="section-description">
            Разрабатываю современные веб-приложения с фокусом на производительность, 
            масштабируемость и качественный пользовательский опыт.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className="feature-card"
                style={{ '--animation-order': index }}
              >
                <div className="feature-icon-wrapper">
                  <Icon className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
