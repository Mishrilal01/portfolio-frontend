import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { API_BASE_URL } from '../../utils/config';
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
  const [verificationStep, setVerificationStep] = useState('form'); // 'form', 'verify', 'sending'
  const [verificationCode, setVerificationCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [timer, setTimer] = useState(120); // 2 minutes = 120 seconds
  const [isTimerActive, setIsTimerActive] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setStatus({
        type: 'error',
        message: 'Verification code expired. Please request a new code.'
      });
      setIsTimerActive(false);
      setVerificationStep('form');
      setVerificationCode('');
      setSentCode('');
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  // Format timer display (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (status.message) setStatus({ type: '', message: '' });
  };

  // Generate random 6-digit verification code
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send verification code to user's email
  const sendVerificationCode = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setVerifyLoading(true);
    setStatus({ type: 'info', message: 'Verifying email...' });

    try {
      // Step 1: Verify email exists using backend
      const verifyResponse = await fetch(`${API_BASE_URL}/api/contact/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email })
      });

      const verifyData = await verifyResponse.json();

      // If email is invalid, show error
      if (!verifyData.valid) {
        setStatus({
          type: 'error',
          message: verifyData.message || 'Email verification failed. Please check your email address.'
        });
        setVerifyLoading(false);
        return;
      }

      // Step 2: Email is valid, send verification code
      const code = generateVerificationCode();
      setSentCode(code);

      const serviceID = 'service_eiiyotf';
      const templateID = 'template_os30hof'; // VERIFICATION CODE TEMPLATE
      const publicKey = 'dGmfYvpDtaVqMpHww';

      // IMPORTANT: This sends the code TO THE USER'S EMAIL, not to you
      // template_os30hof "To Email" field should use {{to_email}} variable
      const verificationParams = {
        to_email: formData.email,  // User's email - where verification code will be sent
        name: formData.name || 'User',
        email: formData.email,
        subject: `Email Verification Code: ${code}`,
        message: `Hi ${formData.name || 'there'},

Your verification code is: ${code}

Please enter this code in the contact form to verify your email and send your message.

This code was requested from Mishrilal's Portfolio contact form.

If you didn't request this code, please ignore this email.

Thank you!`
      };

      await emailjs.send(
        serviceID,
        templateID,
        verificationParams,
        publicKey
      );

      setVerificationStep('verify');
      setTimer(120); // Reset to 2 minutes
      setIsTimerActive(true);
      setStatus({
        type: 'info',
        message: `✅ Verification code sent to ${formData.email}. Please check your inbox (and spam folder).`
      });

    } catch (error) {
      console.error('Verification error:', error);
      console.error('Error details:', error.text || error.message);
      
      let errorMessage = 'Failed to verify email. ';
      
      if (error.text) {
        // EmailJS error
        if (error.text.includes('limit') || error.text.includes('quota')) {
          errorMessage = 'EmailJS daily limit reached. Please try again tomorrow or contact me directly.';
        } else if (error.text.includes('Invalid')) {
          errorMessage = 'Invalid EmailJS configuration. Please contact the administrator.';
        } else {
          errorMessage += `Error: ${error.text}`;
        }
      } else if (error.message?.includes('fetch')) {
        errorMessage += 'Backend server connection failed. Please ensure the backend is running.';
      } else if (error.message?.includes('network')) {
        errorMessage += 'Network error. Please check your internet connection.';
      } else {
        errorMessage += 'Please check your email address and try again.';
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setVerifyLoading(false);
    }
  };

  // Verify the code entered by user
  const handleVerifyCode = (e) => {
    e.preventDefault();
    
    if (verificationCode === sentCode) {
      setStatus({
        type: 'success',
        message: 'Email verified! Sending your message...'
      });
      setVerificationStep('sending');
      // Automatically proceed to send the actual message
      setTimeout(() => {
        submitActualMessage();
      }, 500);
    } else {
      setStatus({
        type: 'error',
        message: 'Invalid verification code. Please try again.'
      });
    }
  };

  // Resend verification code
  const resendCode = async () => {
    setVerificationCode('');
    setVerifyLoading(true);
    setStatus({ type: '', message: '' });
    
    try {
      const newCode = generateVerificationCode();
      setSentCode(newCode);
      
      const serviceID = 'service_eiiyotf';
      const templateID = 'template_os30hof'; // VERIFICATION CODE TEMPLATE
      const publicKey = 'dGmfYvpDtaVqMpHww';

      const verificationParams = {
        to_email: formData.email,  // User's email - where verification code will be sent
        name: formData.name || 'User',
        email: formData.email,
        subject: `Email Verification Code: ${newCode}`,
        message: `Hi ${formData.name || 'there'},

Your new verification code is: ${newCode}

Please enter this code in the contact form to verify your email and send your message.

This code was requested from Mishrilal's Portfolio contact form.

If you didn't request this code, please ignore this email.

Thank you!`
      };

      await emailjs.send(
        serviceID,
        templateID,
        verificationParams,
        publicKey
      );

      setTimer(120); // Reset to 2 minutes
      setIsTimerActive(true);
      setStatus({
        type: 'success',
        message: '✅ New verification code sent! Please check your email.'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to resend code. Please try again.'
      });
    } finally {
      setVerifyLoading(false);
    }
  };

  // Submit the actual message after verification
  const submitActualMessage = async () => {
    setLoading(true);

    try {
      const serviceID = 'service_eiiyotf';
      const templateID = 'template_yudddcq'; // CONTACT MESSAGE TEMPLATE
      const publicKey = 'dGmfYvpDtaVqMpHww';

      // For contact message, we send TO YOU (portfolio owner)
      // template_yudddcq "To Email" should be YOUR hardcoded email: mishrilalparihar30221@gmail.com
      const templateParams = {
        name: formData.name,
        email: formData.email, // User's email for reply-to
        subject: formData.subject || 'No Subject',
        message: formData.message
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setVerificationStep('form');
        setVerificationCode('');
        setSentCode('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
      setVerificationStep('form');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // This now just sends verification code
    sendVerificationCode(e);
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
            
            {verificationStep === 'form' && (
              <>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading || verifyLoading}
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
                    disabled={loading || verifyLoading}
                  />
                  <small className="verification-hint">
                    ✅ You'll receive a verification code to confirm your email
                  </small>
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={loading || verifyLoading}
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
                    disabled={loading || verifyLoading}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading || verifyLoading}>
                  {verifyLoading ? (
                    <>
                      <span className="spinner"></span> Sending Verification Code...
                    </>
                  ) : (
                    'Verify Email & Send Message'
                  )}
                </button>
              </>
            )}

            {verificationStep === 'verify' && (
              <div className="verification-section">
                <h3 className="verification-title">
                  📧 Verify Your Email
                </h3>
                <p className="verification-subtitle">
                  Enter the 6-digit code sent to <strong>{formData.email}</strong>
                </p>
                <div className="timer-display">
                  ⏱️ Code expires in: {formatTime(timer)}
                </div>
                {timer < 60 && (
                  <p className="timer-warning">
                    ⚠️ Code expiring soon!
                  </p>
                )}
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Enter 6-digit code" 
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    maxLength="6"
                    pattern="[0-9]{6}"
                    required
                    className="verification-input"
                  />
                </div>
                <button 
                  type="button" 
                  className="btn btn-primary verify-button" 
                  onClick={handleVerifyCode}
                  disabled={verificationCode.length !== 6 || timer === 0}
                >
                  Verify & Send Message
                </button>
                <div className="verification-actions">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={resendCode}
                    disabled={verifyLoading}
                  >
                    Resend Code
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => {
                      setVerificationStep('form');
                      setVerificationCode('');
                      setSentCode('');
                      setTimer(120);
                      setIsTimerActive(false);
                      setStatus({ type: '', message: '' });
                    }}
                  >
                    Change Email
                  </button>
                </div>
              </div>
            )}

            {verificationStep === 'sending' && (
              <div className="sending-state">
                <span className="spinner"></span>
                <p className="sending-text">Sending your message...</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
