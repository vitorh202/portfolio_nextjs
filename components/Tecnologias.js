"use client"

import './styles/Tecnologias.css'
import { useState, useEffect } from 'react';

import locales from '@/locales';
import { useLanguage } from '@/locales/LanguageContext';


const Tecnologias = () => {

    const { language } = useLanguage();
    const { tecs } = locales[language];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = (entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting); 
        };
    
        const observer = new IntersectionObserver(handleScroll, {
          threshold: 0.5, 
        });
    
        const section = document.querySelector('.techSection');
        if (section) observer.observe(section);
    
        return () => {
          if (section) observer.unobserve(section);
        };
      }, []);
    
      return (
        <div className={`techSection ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <h1>{tecs.titulo}</h1>
        <div className="box frontEnd">
          <h2>{tecs.front}</h2>
          <div className="icons">
            <img src="/html5.png" alt="HTML" />
            <img src="/css3.png" alt="CSS" />
            <img src="/js.png" alt="JS" />
            <img src="/angular.png" alt="ANGULAR" />
            <img src="/react.png" alt="REACT" />
            <img src="/nextjs.png" alt="NEXTJS" />
          </div>
        </div>
  
        <div className="box backEnd">
          <h2>{tecs.back}</h2>
          <div className="icons">
            <img src="/SQL.png" alt="SQL" />
            <img src="/firebase.png" alt="FIREBASE" />
            <img src="/ethereum.png" alt="ETHEREUM" />
          </div>
        </div>
  
        <div className="box oop">
          <h2>{tecs.ooo}</h2>
          <div className="icons">
            <img src="/java.png" alt="JAVA" />
            <img src="/python.png" alt="PYTHON" />
            <img src="/csharp.png" alt="C#" />
          </div>
        </div>
      </div>
    );

};

export default Tecnologias;