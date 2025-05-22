import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Destinations() {
  const { t } = useTranslation();

  const continents = [
    { name: 'asia', countries: ['china', 'thailand', 'vietnam', 'malaysia'], images: ['/images/asia-1.jpg', '/images/asia-2.jpg', '/images/asia-3.jpg', '/images/asia-4.jpg'] },
    { name: 'europe', countries: ['turkey', 'czechia', 'montenegro', 'azerbaijan', 'georgia'], images: ['/images/europe-1.jpg', '/images/europe-2.jpg', '/images/europe-3.jpg', '/images/europe-4.jpg', '/images/europe-5.jpg'] },
    { name: 'america', countries: [], images: ['/images/america-1.jpg'] },
    { name: 'africa', countries: ['egypt'], images: ['/images/africa-1.jpg'] }
  ];

  const popularDestinations = [
    { name: 'egypt', image: '/images/egypt-destination.jpg' },
    { name: 'maldives', image: '/images/maldives-destination.jpg' },
    { name: 'china', image: '/images/china-destination.jpg' },
    { name: 'thailand', image: '/images/thailand-destination.jpg' },
    { name: 'vietnam', image: '/images/vietnam-destination.jpg' },
    { name: 'turkey', image: '/images/turkey-destination.jpg' },
    { name: 'uae', image: '/images/uae-destination.jpg' },
    { name: 'czechia', image: '/images/czechia-destination.jpg' },
    { name: 'montenegro', image: '/images/montenegro-destination.jpg' },
    { name: 'malaysia', image: '/images/malaysia-destination.jpg' },
    { name: 'azerbaijan', image: '/images/azerbaijan-destination.jpg' },
    { name: 'georgia', image: '/images/georgia-destination.jpg' }
  ];

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
          {continents.map((continent, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-soft text-center"
            >
              <div className="w-full h-48 rounded-xl bg-gray-100 mb-4">
                <img src={continent.images[0]} alt={t(continent.name)} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t(continent.name)}</h3>
              <p className="text-text">{t(`${continent.name}_description`)}</p>
              <div className="mt-4">
                {continent.countries.map((country, idx) => (
                  <Link
                    key={idx}
                    to={`/destination/${country}`}
                    className="block text-primary hover:text-secondary transition-colors mb-2"
                  >
                    {t(country)}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
          {popularDestinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-soft text-center"
            >
              <div className="w-full h-48 rounded-xl bg-gray-100 mb-4">
                <img src={dest.image} alt={t(dest.name)} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h3 className="text-primary text-xl font-heading font-semibold mb-3">{t(dest.name)}</h3>
              <p className="text-text">{t(`${dest.name}_description`)}</p>
              <Link
                to={`/destination/${dest.name}`}
                className="block mt-4 text-primary hover:text-secondary transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Destinations;

