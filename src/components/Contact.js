
import React from 'react';
import '../styles/components.css';


const Contact = () => {
  return (
    <section className="contact">   
      <div className="contact-content">
        <h2>Fale Conosco</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Messagem</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="cta-button">Enviar Mensageem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
