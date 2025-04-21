"use client"

import { useEffect, useState } from "react";
import './styles/SobreMim.css';

const SobreMim = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("sobre-mim-section");
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div
        id="sobre-mim-section"
        className="min-h-screen flex flex-col items-center justify-center begin-container"
      >
        {/* Título */}
        <h1 className={`text-3xl font-bold mb-8 ${isVisible ? "fade-in-left" : "hidden"}`}>
          Sobre mim
        </h1>
  
        <div className="flex flex-wrap items-center justify-center">
          {/* Imagem */}
          <div className={`w-48 h-48 bg-gray-300 rounded-full overflow-hidden shadow-lg mx-4 ${isVisible ? "fade-in-left" : "hidden"}`}>
            <img
              src="/tecnologi.png"
              alt="Minha imagem"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Informações */}
          <div className={`text-left mx-4 ${isVisible ? "fade-in-right" : "hidden"}`}>
            <p className="text-lg mb-2">
              <strong>Nome Completo:</strong> <span className="ml-2">Vitor Hugo De Oliveira Almeida Cunha</span>
            </p>
            <p className="text-lg mb-2">
              <strong>Idade:</strong><span className="ml-2">25 anos</span>
            </p>
            <p className="text-lg mb-2">
              <strong>Residência:</strong><span className="ml-2">Teresópolis, RJ</span>
            </p>
            <p className="text-lg mb-2">
              <strong>Cursando: </strong><span className="ml-2">Ciências da Computação - 6º Período.</span>
            </p>
          </div>
        </div>
      </div>
    );

};

export default SobreMim;