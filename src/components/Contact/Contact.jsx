import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! Check your email for confirmation.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        type: 'error',
        message: 'Network error. Please check if the backend server is running.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>mishrilalparihar30221@gmail.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <p>+91 73571 30221</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Rajasthan, India</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/Mishrilal01" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/mis-p/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://leetcode.com/u/mishrilalparihar30221/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
            
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
