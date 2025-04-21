"use client"

import locales from '@/locales';
import { useLanguage } from '@/locales/LanguageContext';

import React, { useState, useEffect } from 'react';
import './styles/Menubar.css';

const sections = ['inicio', 'sobre', 'tecnologias', 'projetos'];

const Menubar = () => {

  const { language, setLanguage } = useLanguage();
  const { menubar } = locales[language];

  const changeLanguage = (lang) => {
  setLanguage(lang);
  };


  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAudio(new Audio('/music.mp3'));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="menubar">
      <div className="menu-left">
        <button className="flag-button" onClick={() => changeLanguage('pt')}>
          <img src="/br.png" alt="BR" className="flag-icon" />
        </button>
        <button className="flag-button" onClick={() => changeLanguage('en')}>
          <img src="/us.png" alt="US" className="flag-icon" />
        </button>
        <button className="music-button" onClick={toggleMusic}>
          <img
            src={isPlaying ? '/pause.png' : '/play.png'}
            alt={isPlaying ? 'Pausar Música' : 'Tocar Música'}
            className="music-icon"
          />
        </button>
      </div>
      <div className="menu-right">
        <button
          className={activeSection === 'inicio' ? 'active' : ''}
          onClick={() => scrollToSection('inicio')}
        >
          {menubar.inicio}
        </button>
        <button
          className={activeSection === 'sobre' ? 'active' : ''}
          onClick={() => scrollToSection('sobre')}
        >
          {menubar.sobre}
        </button>
        <button
          className={activeSection === 'tecnologias' ? 'active' : ''}
          onClick={() => scrollToSection('tecnologias')}
        >
          {menubar.tecnologias}
        </button>
        <button
          className={activeSection === 'projetos' ? 'active' : ''}
          onClick={() => scrollToSection('projetos')}
        >
          {menubar.projetos}
        </button>
      </div>
    </nav>
  );
};

export default Menubar;