import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Bem-vindo ao PetLife</h1>
        <p>Cuidando do seu melhor amigo com amor e dedicação</p>
        <button className="cta-button">Agendar Consulta</button>
      </motion.div>
      <div className="hero-image">
        <img src="/images/hero-dog.png" alt="Cachorro feliz" />
      </div>
    </section>
  );
};

export default Hero;
