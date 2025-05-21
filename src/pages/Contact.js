import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/contact', form);
      setSubmitted(true);
      setForm({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8 relative"
    >
      <div className="absolute inset-0 bg-gray-100 opacity-10 flex items-center justify-center">
        <p className="text-gray-500 text-center">Soon here will be content</p>
      </div>
      <div className="relative z-10">
        <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i className="fas fa-envelope text-accent"></i>{t('contact_us')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary text-center text-lg font-heading font-semibold"
              >
                {t('form_submitted')}
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-primary"></i>
                  <motion.input
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('name')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="relative">
                  <i className="fas fa-phone absolute left-4 top-1/2 transform -translate-y-1/2 text-primary"></i>
                  <motion.input
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t('phone')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="relative">
                  <i className="fas fa-comment absolute left-4 top-4 text-primary"></i>
                  <motion.textarea
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('message')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  ></motion.textarea>
                </div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-primary text-white w-full py-3 rounded-full font-heading font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-soft"
                >
                  <i className="fas fa-paper-plane"></i>{t('send')}
                </motion.button>
              </form>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary text-2xl md:text-3xl font-heading font-semibold mb-6 flex items-center gap-3">
              <i className="fas fa-map-marker-alt text-accent"></i>{t('find_us')}
            </h2>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-soft mb-6">
              <iframe
                title="Google Map of Tashkent, Uzbekistan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.243974463632!2d69.27972031541746!3d41.31115117927063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0x9b8f5f5f5f5f5f5f!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                className="border-0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="text-text text-base space-y-3">
              <p><i className="fas fa-phone-alt mr-2 text-primary"></i>+998 90 123 45 67</p>
              <p><i className="fas fa-envelope mr-2 text-primary"></i>info@ceotravel.com</p>
              <p><i className="fas fa-map-pin mr-2 text-primary"></i>Tashkent, Uzbekistan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;

