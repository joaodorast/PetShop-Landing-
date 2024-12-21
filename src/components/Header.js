import React, { useState } from 'react';
import { FaPaw } from 'react-icons/fa';
import '../styles/components.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <FaPaw />
          <h1>PetLife Do Potato</h1>
        </div>
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#services">Serviços</a>
          <a href="#products">Produtos</a>
          <a href="#contact">Contato</a>
        </nav>
        <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;