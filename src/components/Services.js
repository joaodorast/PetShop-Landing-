import React from 'react';
import { FaCut, FaHospital, FaBath, FaHotel } from 'react-icons/fa';
import '../styles/components.css';

const Services = () => {
  const services = [
    {
      icon: <FaCut />,
      title: 'Banho e Tosa',
      description: 'Serviços profissionais de higiene e estética'
    },
    {
      icon: <FaHospital />,
      title: 'Veterinário',
      description: 'Atendimento médico especializado'
    },
    {
      icon: <FaBath />,
      title: 'Pet Shop',
      description: 'Produtos de qualidade para seu pet'
    },
    {
      icon: <FaHotel />,
      title: 'Hospedagem',
      description: 'Hotel 5 estrelas para seu amigo'
    }
  ];

  return (
    <section className="services" id="services">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
