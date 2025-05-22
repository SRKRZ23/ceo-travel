import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CountryLanguageSelector from '../components/CountryLanguageSelector';

function Home() {
  const { t } = useTranslation();
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    const savedSelection = localStorage.getItem('userSelection');
    if (savedSelection) {
      setUserSelection(JSON.parse(savedSelection));
    }
  }, []);

  const handleSelection = (selection) => {
    setUserSelection(selection);
    localStorage.setItem('userSelection', JSON.stringify(selection));
  };

  const newsItems = userSelection
    ? userSelection.country === 'Uzbekistan'
      ? [
          { title: t('visa_free_egypt'), text: t('visa_free_egypt_text'), image: '/images/egypt-news.jpg' },
          { title: t('luggage_limits_maldives'), text: t('luggage_limits_maldives_text'), image: '/images/maldives-news.jpg' },
          { title: t('required_docs_china'), text: t('required_docs_china_text'), image: '/images/china-news.jpg' },
          { title: t('visa_free_thailand'), text: t('visa_free_thailand_text'), image: '/images/thailand-news.jpg' },
          { title: t('luggage_limits_vietnam'), text: t('luggage_limits_vietnam_text'), image: '/images/vietnam-news.jpg' },
          { title: t('required_docs_turkey'), text: t('required_docs_turkey_text'), image: '/images/turkey-news.jpg' },
          { title: t('visa_free_uae'), text: t('visa_free_uae_text'), image: '/images/uae-news.jpg' },
          { title: t('luggage_limits_czechia'), text: t('luggage_limits_czechia_text'), image: '/images/czechia-news.jpg' },
          { title: t('required_docs_montenegro'), text: t('required_docs_montenegro_text'), image: '/images/montenegro-news.jpg' },
          { title: t('visa_free_malaysia'), text: t('visa_free_malaysia_text'), image: '/images/malaysia-news.jpg' },
          { title: t('luggage_limits_azerbaijan'), text: t('luggage_limits_azerbaijan_text'), image: '/images/azerbaijan-news.jpg' },
          { title: t('required_docs_georgia'), text: t('required_docs_georgia_text'), image: '/images/georgia-news.jpg' }
        ]
      : [
          { title: t(`visa_requirements_uzbekistan_${userSelection.country.toLowerCase()}`), text: t(`visa_requirements_uzbekistan_${userSelection.country.toLowerCase()}_text`), image: `/images/uzbekistan-${userSelection.country.toLowerCase()}-visa.jpg` },
          { title: t(`luggage_limits_uzbekistan_${userSelection.country.toLowerCase()}`), text: t(`luggage_limits_uzbekistan_${userSelection.country.toLowerCase()}_text`), image: `/images/uzbekistan-${userSelection.country.toLowerCase()}-luggage.jpg` },
          { title: t(`required_docs_uzbekistan_${userSelection.country.toLowerCase()}`), text: t(`required_docs_uzbekistan_${userSelection.country.toLowerCase()}_text`), image: `/images/uzbekistan-${userSelection.country.toLowerCase()}-docs.jpg` }
        ]
    : [];

  return (
    <div>
      {!userSelection && (
        <CountryLanguageSelector onSelect={handleSelection} />
      )}

      {userSelection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 py-8"
        >
          <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
            <i className="fas fa-globe text-accent"></i> {t('welcome')}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
              <i className="fas fa-star text-accent"></i> {t('description')}
            </h2>
            <div className="text-center">
              <Link to="/destinations" className="bg-primary text-white px-6 py-3 rounded-full font-heading font-semibold hover:bg-blue-700 transition-colors">
                {t('travel_the_world')}
              </Link>
            </div>
          </motion.div>

          {/* Раздел "Latest News" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
              <i className="fas fa-newspaper text-accent"></i> {t('latest_news')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-soft"
                >
                  <div className="w-full h-48 rounded-xl bg-gray-100 mb-4">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <h3 className="text-primary text-xl font-heading font-semibold mb-3">{news.title}</h3>
                  <p className="text-text">{news.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Home;

