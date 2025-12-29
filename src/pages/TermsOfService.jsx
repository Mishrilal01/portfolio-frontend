import React, { useEffect } from 'react';
import AOS from 'aos';
import './LegalPages.css';

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content" data-aos="fade-up">
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">Last updated: December 2025</p>

          <p className="legal-intro">
            By accessing and using this website, you agree to comply with the following terms:
          </p>

          <section className="legal-section">
            <h2>Website Content</h2>
            <p>
              All content on this website, including text, images, projects, designs, and code samples, 
              is the intellectual property of <strong>Mishrilal Parihar</strong> unless otherwise stated.
            </p>
          </section>

          <section className="legal-section">
            <h2>Use of Content</h2>
            <p>
              You may view and use the content for personal and informational purposes only. Reproduction, 
              distribution, or commercial use without permission is prohibited.
            </p>
          </section>

          <section className="legal-section">
            <h2>Accuracy of Information</h2>
            <p>
              The information provided on this website is for general informational purposes only. No 
              guarantees are made regarding accuracy, completeness, or results.
            </p>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              The website owner is not responsible for any direct or indirect damages arising from the 
              use of this website.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to Terms</h2>
            <p>
              These terms may be updated or modified at any time without prior notice.
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

export default TermsOfService;
