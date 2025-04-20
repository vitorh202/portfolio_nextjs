"use client"

import './styles/inicio.css'

import React, { useEffect, useState } from 'react';

const Begin = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting); // Atualiza visibilidade com base no scroll
      };
  
      const observer = new IntersectionObserver(handleScroll, {
        threshold: 0.5, // O componente fica visível quando 50% dele estiver na tela
      });
  
      const section = document.querySelector('.centered-container');
      if (section) observer.observe(section);
  
      return () => {
        if (section) observer.unobserve(section);
      };
    }, []);
  
    return (
      <div className={`centered-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <p>
          <img
            src="/warning.png"
            alt="Aviso"
            style={{ width: '2em', verticalAlign: 'middle' }}
          />
          Em desenvolvimento
        </p>
        <h1>Bem-vindo ao meu portfólio</h1>
        <div className="social-buttons">
        <a href="https://www.linkedin.com/in/vitor-hugo-6aaa52245/" target="_blank" rel="noopener noreferrer">
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            className="socialicon"
          />
        </a>
        <a href="https://github.com/vitorh202" target="_blank" rel="noopener noreferrer">
          <img
            src="/github.png"
            alt="GitHub"
            className="socialicon"
          />
        </a>
      </div>
    </div>
  );
};

export default Begin;