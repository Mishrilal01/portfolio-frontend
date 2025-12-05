import React from 'react';
import { testimonialsData } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-position">{testimonial.position}</p>
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
