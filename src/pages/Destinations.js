import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Destinations() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
        <i className="fas fa-globe text-accent"></i>{t('travel_the_world')}
      </h1>

      {/* Разделы континентов */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-map-marked-alt text-accent"></i>{t('continents')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Азия */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-soft text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t('asia')}</h3>
            <p className="text-text">{t('asia_description')}</p>
          </motion.div>
          {/* Европа */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-soft text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t('europe')}</h3>
            <p className="text-text">{t('europe_description')}</p>
          </motion.div>
          {/* Америка */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-soft text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t('america')}</h3>
            <p className="text-text">{t('america_description')}</p>
          </motion.div>
          {/* Африка */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-soft text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t('africa')}</h3>
            <p className="text-text">{t('africa_description')}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Популярные направления */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-star text-accent"></i>{t('popular_destinations')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {['egypt', 'maldives', 'china', 'thailand', 'vietnam', 'turkey', 'uae', 'czechia', 'montenegro', 'malaysia', 'azerbaijan', 'georgia'].map((dest, index) => (
            <motion.div
              key={dest}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-soft text-center"
            >
              <div className="w-full h-48 flex items-center justify-center rounded-xl bg-gray-100 mb-4">
                <p className="text-gray-500 text-center">Soon here will be content</p>
              </div>
              <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t(dest)}</h3>
              <p className="text-text">{t(`${dest}_description`)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Destinations;

