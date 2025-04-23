"use client"

import './styles/Projetos.css';
import locales from '@/locales';
import { useLanguage } from '@/locales/LanguageContext';

import { useState, useEffect } from 'react';

const Projetos = () => {
  const { language } = useLanguage();
  const projetos = locales[language].projetos;
  const textoBotao = locales[language].projetosTextoBotao;

  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = (entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting); 
        };
    
        const observer = new IntersectionObserver(handleScroll, {
          threshold: 0.5, 
        });
    
        const section = document.querySelector('.projects-section');
        if (section) observer.observe(section);
    
        return () => {
          if (section) observer.unobserve(section);
        };
      }, []);
    

  return (
    <section className={`projects-section ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <h1>{locales[language].menubar.projetos}</h1>
      <div className="projects-container">
        {projetos.map((projeto, index) => (
          <div key={index} className="project-card">
            <a href={projeto.link} target="_blank"><img src={projeto.imagem} alt={projeto.nome} /></a>
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" className='button-link'>{textoBotao}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;