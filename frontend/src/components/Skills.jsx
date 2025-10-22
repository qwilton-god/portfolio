import React from 'react';
import './Skills.css';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      color: '#88a2ff',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'shadcn/ui']
    },
    {
      category: 'Backend',
      color: '#d987ff',
      skills: ['Python', 'FastAPI', 'Node.js', 'REST API', 'WebSockets']
    },
    {
      category: 'Databases',
      color: '#ff84e4',
      skills: ['MongoDB', 'PostgreSQL', 'SQL']
    },
    {
      category: 'DevOps & Tools',
      color: '#ffe03d',
      skills: ['Git', 'CI/CD', 'Linux']
    },
    {
      category: 'Other',
      color: '#78d692',
      skills: ['Async Programming', 'API Design', 'Testing', 'Agile', 'Problem Solving', 'Soft Skills']
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-label">Технологии</span>
          <h2 className="section-title">
            Стек <span className="highlight-text">технологий</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 
                className="category-title"
                style={{ color: category.color }}
              >
                {category.category}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="skill-badge"
                    style={{
                      '--badge-color': category.color,
                      animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;