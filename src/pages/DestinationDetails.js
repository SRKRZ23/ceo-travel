import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

function DestinationDetails() {
  const { t } = useTranslation();
  const { country } = useParams();
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    const savedSelection = localStorage.getItem('userSelection');
    if (savedSelection) {
      setUserSelection(JSON.parse(savedSelection));
    }
  }, []);

  const packages = [
    { name: "Standard Package", price: "$1,500", includes: "Hotel, Flights, Local Tours", image: `/images/${country}-standard-package.jpg` },
    { name: "Luxury Package", price: "$3,000", includes: "5-Star Hotel, Flights, Private Tours, Entertainment", image: `/images/${country}-luxury-package.jpg` },
    { name: "Adventure Package", price: "$2,000", includes: "Hotel, Flights, Adventure Activities, Local Guide", image: `/images/${country}-adventure-package.jpg` }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
        <i className="fas fa-globe text-accent"></i> {t(country.toLowerCase())}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          {t(`${country.toLowerCase()}_description`)}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
          <i className="fas fa-suitcase text-accent"></i> Travel Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-soft text-center"
            >
              <div className="w-full h-48 rounded-xl bg-gray-100 mb-4">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h3 className="text-primary text-xl font-heading font-semibold mb-3">{pkg.name}</h3>
              <p className="text-text mb-2">{pkg.price}</p>
              <p className="text-text">{pkg.includes}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DestinationDetails;

