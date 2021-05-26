import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css";
import europa1 from "../../assets/Europa1.png";
import alemanha1 from "../../assets/Alemanha1.png";
import austria1 from "../../assets/Austria1.png";
import belgica1 from "../../assets/Belgica1.png";
import espanha1 from "../../assets/Espanha1.png";
import franca1 from "../../assets/Franca1.png";
import italia1 from "../../assets/Italia1.png";
import paisesbaixos1 from "../../assets/PaisesBaixos1.png";
import portugal1 from "../../assets/Portugal1.png";
import reicounido1 from "../../assets/ReinoUnido1.png";
import suica1 from "../../assets/Suica1.png";
export default function Header() {
  return (
    <header className="header">
      <img className="logo-icon" src={alemanha1} alt="Rocketshoes" />
      <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ale
        </a>
        <img className="logo-icon" src={austria1} alt="Rocketshoes" />

      <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aus
        </a>
        <img className="logo-icon" src={belgica1} alt="Rocketshoes" />
      <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bel
        </a>
        <img className="logo-icon" src={espanha1} alt="Rocketshoes" />
      <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esp
        </a>
        <img className="logo-icon" src={franca1} alt="Rocketshoes" />
      <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fra
        </a>
        <img className="logo-icon" src={reicounido1} alt="Rocketshoes" />
      <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          UK
        </a>
        <img className="logo-icon" src={italia1} alt="Rocketshoes" />
      <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ita
        </a>
        <img className="logo-icon" src={paisesbaixos1} alt="Rocketshoes" />
      <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NL
        </a>
        <img className="logo-icon" src={portugal1} alt="Rocketshoes" />
        <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Por
        </a>
        <img className="logo-icon" src={suica1} alt="Rocketshoes" />
        <a
          className="logo-text"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sui
        </a>
      {/* 
        
        
        
        
        
        
        <span className="logo-text">S</span>
      </Link> */}

    </header>
  );
}