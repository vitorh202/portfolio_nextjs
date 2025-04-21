"use client";

import locales from '@/locales';
import { useLanguage } from '@/locales/LanguageContext';
import React, { useState, useEffect } from 'react';
import './styles/Menubar.css';
import { Menu, X } from 'lucide-react'; // ícones bonitos e leves

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
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

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
      setMenuOpen(false); // fecha o menu mobile quando clica
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

      {/* MENU HORIZONTAL - DESKTOP */}
      <div className="menu-right desktop-menu">
        {sections.map((id) => (
          <button
            key={id}
            className={activeSection === id ? 'active' : ''}
            onClick={() => scrollToSection(id)}
          >
            {menubar[id]}
          </button>
        ))}
      </div>

      {/* MENU HAMBURGUER - MOBILE */}
      <div className="mobile-menu-button">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-dropdown">
          {sections.map((id) => (
            <button
              key={id}
              className={activeSection === id ? 'active' : ''}
              onClick={() => scrollToSection(id)}
            >
              {menubar[id]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Menubar;