import React from 'react';
import { servicesData } from '../../data/services';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
