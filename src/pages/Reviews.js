import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Reviews() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
        <i className="fas fa-star text-accent"></i>{t('reviews')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-soft text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
            <p className="text-gray-500 text-center text-sm">Soon here will be content</p>
          </div>
          <p className="text-text text-base mb-4 leading-relaxed">{t('review1')}</p>
          <div className="flex justify-center gap-1 text-yellow-500">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-soft text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
            <p className="text-gray-500 text-center text-sm">Soon here will be content</p>
          </div>
          <p className="text-text text-base mb-4 leading-relaxed">{t('review2')}</p>
          <div className="flex justify-center gap-1 text-yellow-500">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-soft text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
            <p className="text-gray-500 text-center text-sm">Soon here will be content</p>
          </div>
          <p className="text-text text-base mb-4 leading-relaxed">{t('review3')}</p>
          <div className="flex justify-center gap-1 text-yellow-500">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-soft text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
            <p className="text-gray-500 text-center text-sm">Soon here will be content</p>
          </div>
          <p className="text-text text-base mb-4 leading-relaxed">{t('review4')}</p>
          <div className="flex justify-center gap-1 text-yellow-500">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-soft text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
            <p className="text-gray-500 text-center text-sm">Soon here will be content</p>
          </div>
          <p className="text-text text-base mb-4 leading-relaxed">{t('review5')}</p>
          <div className="flex justify-center gap-1 text-yellow-500">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Reviews;

