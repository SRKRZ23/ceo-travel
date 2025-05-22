import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const continents = [
  { id: 1, name: 'Asia', image: '/images/asia-1.jpg' },
  { id: 2, name: 'Europe', image: '/images/europe-1.jpg' },
  { id: 3, name: 'America', image: '/images/america-1.jpg' },
  { id: 4, name: 'Africa', image: '/images/africa-1.jpg' },
];

const destinations = [
  { id: 1, name: 'Egypt', image: '/images/egypt-destination.jpg' },
  { id: 2, name: 'Maldives', image: '/images/maldives-destination.jpg' },
  { id: 3, name: 'China', image: '/images/china-destination.jpg' },
  { id: 4, name: 'Thailand', image: '/images/thailand-destination.jpg' },
  { id: 5, name: 'Vietnam', image: '/images/vietnam-destination.jpg' },
  { id: 6, name: 'Turkey', image: '/images/turkey-destination.jpg' },
  { id: 7, name: 'UAE', image: '/images/uae-destination.jpg' },
  { id: 8, name: 'Czechia', image: '/images/czechia-destination.jpg' },
  { id: 9, name: 'Montenegro', image: '/images/montenegro-destination.jpg' },
  { id: 10, name: 'Malaysia', image: '/images/malaysia-destination.jpg' },
  { id: 11, name: 'Azerbaijan', image: '/images/azerbaijan-destination.jpg' },
  { id: 12, name: 'Georgia', image: '/images/georgia-destination.jpg' },
];

const Destinations = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Заголовок страницы */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('destinations.title')}
      </motion.h1>

      {/* Континенты */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6">{t('destinations.continents')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {continents.map((continent) => (
            <motion.div
              key={continent.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={continent.image}
                alt={continent.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{continent.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Популярные направления */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6">{t('destinations.popularDestinations')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              to={`/destinations/${destination.name.toLowerCase()}`}
              key={destination.id}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{destination.name}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Destinations;

