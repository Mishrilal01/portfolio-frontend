import React, { useEffect } from 'react';
import AOS from 'aos';
import './LegalPages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content" data-aos="fade-up">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: December 2025</p>

          <p className="legal-intro">
            This website is a personal portfolio owned and maintained by <strong>Mishrilal Parihar</strong>.
          </p>

          <section className="legal-section">
            <h2>Information Collection</h2>
            <p>
              This website collects personal information such as name, email address, and message content 
              only when users voluntarily submit them through the contact form.
            </p>
          </section>

          <section className="legal-section">
            <h2>Use of Information</h2>
            <p>
              The collected information is used solely for responding to inquiries, communication purposes, 
              and improving user interaction. The data is not sold, rented, or shared with third parties 
              for marketing purposes.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Protection</h2>
            <p>
              Reasonable security measures are taken to protect user information. However, no method of 
              data transmission over the internet is completely secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>
              This website may use third-party services (such as email delivery or analytics tools) to 
              ensure proper functionality. These services may collect limited technical information as 
              required for their operation.
            </p>
          </section>

          <section className="legal-section">
            <h2>User Consent</h2>
            <p>
              By using this website, you consent to this Privacy Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy, you can contact:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> mishrilalparihar30221@gmail.com
            </p>
          </section>

          <div className="back-home">
            <a href="/" className="btn-primary">← Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
