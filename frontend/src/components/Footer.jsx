import React from 'react';
import './Footer.css';
import { Github, Mail, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github />, url: 'https://github.com/qwilton-god', label: 'GitHub' },
    { icon: <Send />, url: 'https://t.me/qwilton', label: 'Telegram' },
    { icon: <Mail />, url: 'mailto:qwilton59@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">
              <span className="gradient-text">Portfolio</span>
            </h3>
            <p className="footer-description">
              Создаю современные веб-приложения с фокусом на качество и производительность
            </p>
          </div>

            <div className="footer-column footer-contact">
              <h4 className="footer-column-title">Связь</h4>
              <ul className="footer-list">
                <li><a href="mailto:qwilton59@gmail.com" className="footer-link">Email</a></li>
                <li><a href="https://github.com/qwilton-god" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://t.me/qwilton" className="footer-link" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio. Все права защищены.
          </p>

          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
    </footer>
  );
};

export default Footer;