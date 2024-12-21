import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PetLife</h3>
          <p>Cuidando com amor do seu melhor amigo</p>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaWhatsapp />
          </div>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p>Telefone: (21) 1234-5678</p>
          <p>Email: contato@petlife.com</p>
          <p>Endereço: Rua dos Pets, 123</p>
        </div>
        <div className="footer-section">
          <h4>Horário de Funcionamento</h4>
          <p>Segunda a Sexta: 8h às 19h</p>
          <p>Sábados: 9h às 18h</p>
          <p>Domingos: 9h às 14h</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PetLife. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
