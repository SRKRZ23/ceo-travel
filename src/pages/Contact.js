import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [userSelection, setUserSelection] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedSelection = localStorage.getItem('userSelection');
    if (savedSelection) {
      setUserSelection(JSON.parse(savedSelection));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
        <i className="fas fa-envelope text-accent"></i> {t('contact_us')}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-soft">
          {submitted ? (
            <p className="text-green-500 text-center mb-4">{t('form_submitted')}</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-text mb-2">{t('name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-text mb-2">{t('phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-text mb-2">{t('message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white w-full py-2 rounded-full font-heading font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('send')}
              </button>
            </form>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 text-center"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold mb-4 flex items-center justify-center gap-3">
          <i className="fas fa-info-circle text-accent"></i> {t('find_us')}
        </h2>
        <p className="text-text">
          {userSelection && userSelection.country !== 'Uzbekistan'
            ? `We are your trusted partner for travel to Uzbekistan from ${userSelection.country}. All services are provided exclusively through CEO Travel.`
            : "We are your trusted partner for international travel from Uzbekistan. All services are provided exclusively through CEO Travel."}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Contact;

