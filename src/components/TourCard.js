import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function TourCard({ tour, index }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-soft overflow-hidden"
    >
      <div className="w-full h-48 flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-center">Soon here will be content</p>
      </div>
      <div className="p-6">
        <h3 className="text-primary text-lg font-heading font-semibold mb-3">{tour.title}</h3>
        <p className="text-text text-base mb-4 leading-relaxed">{tour.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold">{tour.price} UZS</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-colors"
          >
            {t('book_now')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default TourCard;

