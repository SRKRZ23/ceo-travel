import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3">
        <i className="fas fa-info-circle text-accent"></i>{t('about')}
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-text text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        {t('about_text')}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mb-12"
      >
        <div className="w-full max-w-3xl h-48 flex items-center justify-center rounded-2xl shadow-deep bg-gray-100">
          <p className="text-gray-500 text-center">Soon here will be content</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-6 flex items-center justify-center gap-3">
          <i className="fas fa-users text-accent"></i>{t('our_mission')}
        </h2>
        <p className="text-text text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('our_mission_text')}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-map-marked-alt text-accent"></i>{t('our_destinations')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('samarkand_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('bukhara_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('khiva_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('tashkent_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('fergana_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('andijan_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('namangan_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('shakhrisabz_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('nukus_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('urgench_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('kokand_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('margilan_destination_text')}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="w-full h-48 flex items-center justify-center rounded-xl shadow-soft bg-gray-100 mb-4">
              <p className="text-gray-500 text-center">Soon here will be content</p>
            </div>
            <p className="text-text text-base md:text-lg">{t('termez_destination_text')}</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-6 flex items-center justify-center gap-3">
          <i className="fas fa-city text-accent"></i>{t('about_tashkent')}
        </h2>
        <p className="text-text text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about_tashkent_text') }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-2xl h-48 flex items-center justify-center rounded-2xl shadow-deep bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-6 flex items-center justify-center gap-3">
          <i className="fas fa-history text-accent"></i>{t('our_history')}
        </h2>
        <p className="text-text text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto leading-relaxed">{t('our_history_text')}</p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-2xl h-48 flex items-center justify-center rounded-2xl shadow-deep bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;

