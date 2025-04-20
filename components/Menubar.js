"use client"

import React, { useState, useEffect } from 'react';
import './styles/Menubar.css';

const Menubar = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setAudio(new Audio('/music.mp3'));
      }
    }, []);

    const toggleMusic = () => {
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
      };

    return (
        <nav className="menubar">
        <div className="menu-left">
          <button className="flag-button">
          <img src="/br.png" alt="BR" className="flag-icon" />
          </button>
          <button className="flag-button">
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
          <button>Início</button>
          <button>Sobre</button>
          <button>Projetos</button>
        </div>
      </nav>
    )

}

export default Menubar;