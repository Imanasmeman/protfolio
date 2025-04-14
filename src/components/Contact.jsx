import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cgs6fng',
      'template_rqzig2e',
      formRef.current,
      '2n5aGGO_-sSvmqCPc'
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="contact-info">
        <p><MdEmail /> <strong>Email:</strong> anasbabu.meman@gmail.com</p>
        <p><FiPhone /> <strong>Phone:</strong> +91 7434945893</p>
        <p>
          <FaLinkedin /> <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/anasbabu-meman-0004ba33a/" target="_blank" rel="noopener noreferrer">
          www.linkedin.com/in/anasbabu-meman-0004ba33a/
          </a>
        </p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
