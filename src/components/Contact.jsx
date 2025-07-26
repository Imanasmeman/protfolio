import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
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

  // OPTIONAL: Add a little fade-in animation for the whole card
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-20 scroll-mt-24"
      aria-label="Contact Me Section"
    >
      <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-gray-100 relative inline-block">
        Contact Me
        <span className="block h-1 w-28 bg-indigo-800 dark:bg-indigo-400 rounded-full mx-auto mt-3" />
      </h2>

      {/* ONE single box card containing both contact info and form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10 space-y-10 font-serif">
        {/* Contact Info */}
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
          <p className="flex items-center space-x-4 text-lg md:text-xl">
            <MdEmail className="text-indigo-700 dark:text-indigo-400 w-7 h-7 flex-shrink-0" />
            <span>
              <strong className="mr-1">Email:</strong>
              <a
                href="mailto:anasbabu.meman@gmail.com"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                anasbabu.meman@gmail.com
              </a>
            </span>
          </p>
          <p className="flex items-center space-x-4 text-lg md:text-xl">
            <FiPhone className="text-indigo-700 dark:text-indigo-400 w-7 h-7 flex-shrink-0" />
            <span>
              <strong className="mr-1">Phone:</strong>
              <span className="select-text">+91 7434945893</span>
            </span>
          </p>
          <p className="flex items-center space-x-4 text-lg md:text-xl break-words">
            <FaLinkedin className="text-indigo-700 dark:text-indigo-400 w-7 h-7 flex-shrink-0" />
            <span>
              <strong className="mr-1">LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/anasbabu-meman-0004ba33a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                www.linkedin.com/in/anasbabu-meman-0004ba33a/
              </a>
            </span>
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-8"
          noValidate
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-4 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-4 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full px-5 py-4 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />

          <button
            type="submit"
            className="w-full py-4 bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-400 dark:focus:ring-indigo-700 shadow-lg transform transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
