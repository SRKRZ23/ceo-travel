import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TourCard from '../components/TourCard';

function Home() {
  const { t } = useTranslation();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/tours')
      .then(response => response.json())
      .then(data => {
        setTours(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[500px] md:h-[600px] mb-12 rounded-2xl overflow-hidden shadow-deep"
      >
        <img
          src="https://uzbektourism.uz/storage/app/uploads/public/66e/5f7/4e6/66e5f74e6e8b7734126195.jpg"
          alt="Samarkand Hero (Source: uzbektourism.uz)"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            {t('welcome')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mb-8 max-w-2xl"
          >
            {t('description')}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-yellow-500 transition-colors shadow-soft"
          >
            <i className="fas fa-plane-departure"></i>{t('learn_more')}
          </motion.button>
        </div>
      </motion.div>

      {/* Tours Section */}
      <div className="mb-16">
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-suitcase-rolling text-accent"></i>{t('featured_tours')}
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <TourCard key={tour._id} tour={tour} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* Video Section 1: Explore Uzbekistan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-video text-accent"></i>{t('explore_uzbekistan')}
        </h2>
        <div className="relative w-full h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-deep">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7l5q-x2gNsI"
            title="Discover Samarkand, Uzbekistan | A Journey Through History"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </div>
      </motion.div>

      {/* Video Section 2: Culture and Traditions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-video text-accent"></i>{t('explore_uzbekistan')}
        </h2>
        <div className="relative w-full h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-deep">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4k6g5QokV0U"
            title="Uzbekistan: A Journey Through Culture and Tradition"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-camera text-accent"></i>{t('gallery')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://uzbektourism.uz/storage/app/uploads/public/66e/5f7/4e6/66e5f74e6e8b7734126195.jpg"
            alt="Samarkand (Source: uzbektourism.uz)"
            className="w-full h-48 object-cover rounded-xl shadow-soft"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1605544064386-95c9a78e48e6"
            alt="Chimgan Mountains"
            className="w-full h-48 object-cover rounded-xl shadow-soft"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1621510517732-4b58e79d39eb"
            alt="Uzbek Plov"
            className="w-full h-48 object-cover rounded-xl shadow-soft"
          />
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://uzbektourism.uz/storage/app/uploads/public/66e/5f7/4e6/66e5f74e6e8b7734126195.jpg"
            alt="Bukhara (Source: uzbektourism.uz)"
            className="w-full h-48 object-cover rounded-xl shadow-soft"
          />
        </div>
        <p className="text-text text-sm text-center mt-6">
          Images sourced from <a href="https://uzbektourism.uz/ru/committee/galereya" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">uzbektourism.uz</a>
        </p>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-check-circle text-accent"></i>{t('why_choose_us')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-soft text-center"
          >
            <i className="fas fa-map-marked-alt text-5xl text-secondary mb-4"></i>
            <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t('unique_destinations')}</h3>
            <p className="text-text">{t('unique_destinations_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-soft text-center"
          >
            <i className="fas fa-users text-5xl text-secondary mb-4"></i>
            <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t('expert_guides')}</h3>
            <p className="text-text">{t('expert_guides_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-soft text-center"
          >
            <i className="fas fa-heart text-5xl text-secondary mb-4"></i>
            <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t('memorable_experiences')}</h3>
            <p className="text-text">{t('memorable_experiences_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-soft text-center"
          >
            <i className="fas fa-dollar-sign text-5xl text-secondary mb-4"></i>
            <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t('affordable_prices')}</h3>
            <p className="text-text">{t('affordable_prices_text')}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* News Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-newspaper text-accent"></i>{t('latest_news')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-soft"
          >
            <h3 className="text-primary text-lg font-heading font-semibold mb-3">{t('visa_free_uae')}</h3>
            <p className="text-text text-base mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('visa_free_uae_text') }} />
            <img
              src="https://uzbektourism.uz/storage/app/uploads/public/66e/5f7/4e6/66e5f74e6e8b7734126195.jpg"
              alt="Uzbekistan and UAE (Source: uzbektourism.uz)"
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        </div>
        <p className="text-text text-sm text-center mt-6">
          Images sourced from <a href="https://uzbektourism.uz/ru/committee/galereya" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">uzbektourism.uz</a>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Home;

