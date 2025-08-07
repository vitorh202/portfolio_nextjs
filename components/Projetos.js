"use client";

import './styles/Projetos.css';
import locales from '@/locales';
import { useLanguage } from '@/locales/LanguageContext';
import { useState, useEffect } from 'react';

const Projetos = () => {
  const { language } = useLanguage();
  const projetos = locales[language].projetos;
  const textoBotao = locales[language].projetosTextoBotao;

  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // agora é dinâmico

  const [touchStartX, setTouchStartX] = useState(null);

  // Animação com IntersectionObserver
  useEffect(() => {
    const handleScroll = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
    const section = document.querySelector('.projects-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Ajusta quantos projetos mostrar por vez
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage(); // roda na primeira vez
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Navegação
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projetos.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= projetos.length ? 0 : prev + itemsPerPage
    );
  };

  // Swipe no mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50 && projetos.length > itemsPerPage) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStartX(null);
  };

  const visibleProjects = projetos.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className={`projects-section ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <h1>{locales[language].menubar.projetos}</h1>

      <div className="carousel-container">
        {projetos.length > itemsPerPage && (
          <button className="arrow-btn desktop-only" onClick={prevSlide}>
            &#10094;
          </button>
        )}

        <div
          className="projects-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleProjects.map((projeto, index) => (
            <div key={index} className="project-card">
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                <img src={projeto.imagem} alt={projeto.nome} />
              </a>
              <h2>{projeto.nome}</h2>
              <p>{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                {textoBotao}
              </a>
            </div>
          ))}
        </div>

        {projetos.length > itemsPerPage && (
          <button className="arrow-btn desktop-only" onClick={nextSlide}>
            &#10095;
          </button>
        )}
      </div>
    </section>
  );
};

export default Projetos;