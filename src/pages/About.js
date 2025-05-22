import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    const savedSelection = localStorage.getItem('userSelection');
    if (savedSelection) {
      setUserSelection(JSON.parse(savedSelection));
    }
  }, []);

  const destinations = userSelection
    ? userSelection.country === 'Uzbekistan'
      ? [
          { name: t('egypt'), text: t('egypt_description'), image: '/images/egypt-about.jpg' },
          { name: t('maldives'), text: t('maldives_description'), image: '/images/maldives-about.jpg' },
          { name: t('china'), text: t('china_description'), image: '/images/china-about.jpg' },
          { name: t('thailand'), text: t('thailand_description'), image: '/images/thailand-about.jpg' },
          { name: t('vietnam'), text: t('vietnam_description'), image: '/images/vietnam-about.jpg' },
          { name: t('turkey'), text: t('turkey_description'), image: '/images/turkey-about.jpg' },
          { name: t('uae'), text: t('uae_description'), image: '/images/uae-about.jpg' },
          { name: t('czechia'), text: t('czechia_description'), image: '/images/czechia-about.jpg' },
          { name: t('montenegro'), text: t('montenegro_description'), image: '/images/montenegro-about.jpg' },
          { name: t('malaysia'), text: t('malaysia_description'), image: '/images/malaysia-about.jpg' },
          { name: t('azerbaijan'), text: t('azerbaijan_description'), image: '/images/azerbaijan-about.jpg' },
          { name: t('georgia'), text: t('georgia_description'), image: '/images/georgia-about.jpg' }
        ]
      : [
          { name: t('samarkand'), text: t('samarkand_destination_text'), image: '/images/samarkand-about.jpg' },
          { name: t('bukhara'), text: t('bukhara_destination_text'), image: '/images/bukhara-about.jpg' },
          { name: t('khiva'), text: t('khiva_destination_text'), image: '/images/khiva-about.jpg' },
          { name: t('tashkent'), text: t('tashkent_destination_text'), image: '/images/tashkent-about.jpg' }
        ]
    : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
        <i className="fas fa-info-circle text-accent"></i> {t('about')}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          {t('about_text')}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-map-marked-alt text-accent"></i> {t('our_destinations')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-soft text-center"
            >
              <div className="w-full h-48 rounded-xl bg-gray-100 mb-4">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h3 className="text-primary text-xl font-heading font-semibold mb-3">{dest.name}</h3>
              <p className="text-text">{dest.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;

