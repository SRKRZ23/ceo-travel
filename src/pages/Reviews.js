import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Reviews() {
  const { t } = useTranslation();
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    const savedSelection = localStorage.getItem('userSelection');
    if (savedSelection) {
      setUserSelection(JSON.parse(savedSelection));
    }
  }, []);

  const reviews = userSelection
    ? userSelection.country === 'Uzbekistan'
      ? [
          { text: t('review1'), rating: 5, author: "Ali, Uzbekistan", category: "Travel Package", image: '/images/review-ali.jpg' },
          { text: t('review2'), rating: 4, author: "Zara, Uzbekistan", category: "Hotel", image: '/images/review-zara.jpg' },
          { text: "The food tour in Samarkand was incredible! The local cuisine is a must-try.", rating: 5, author: "Jamshid, Uzbekistan", category: "Food", image: '/images/review-jamshid.jpg' },
          { text: "The hotel in Bukhara was top-notch, very comfortable and great service.", rating: 4, author: "Nodira, Uzbekistan", category: "Hotel", image: '/images/review-nodira.jpg' },
          { text: "Our trip to Khiva was amazing, thanks to the well-planned package!", rating: 5, author: "Kamola, Uzbekistan", category: "Travel Package", image: '/images/review-kamola.jpg' }
        ]
      : [
          { text: `Amazing experience in Uzbekistan! The food was incredible, especially the plov in Tashkent.`, rating: 5, author: `Ahmed, ${userSelection.country}`, category: "Food", image: `/images/review-ahmed-${userSelection.country.toLowerCase()}.jpg` },
          { text: `The hotel in Samarkand was fantastic, great hospitality and clean rooms.`, rating: 4, author: `Lina, ${userSelection.country}`, category: "Hotel", image: `/images/review-lina-${userSelection.country.toLowerCase()}.jpg` },
          { text: `The travel package to Bukhara was well-organized, we loved every moment!`, rating: 5, author: `Sofia, ${userSelection.country}`, category: "Travel Package", image: `/images/review-sofia-${userSelection.country.toLowerCase()}.jpg` },
          { text: `The cultural tour in Khiva was a highlight of our trip, highly recommend!`, rating: 4, author: `Mark, ${userSelection.country}`, category: "Travel Package", image: `/images/review-mark-${userSelection.country.toLowerCase()}.jpg` },
          { text: `The food in Uzbekistan was a delightful surprise, so flavorful!`, rating: 5, author: `Aisha, ${userSelection.country}`, category: "Food", image: `/images/review-aisha-${userSelection.country.toLowerCase()}.jpg` }
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
        <i className="fas fa-star text-accent"></i> {t('reviews')}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 mb-4">
                <img src={review.image} alt={review.author} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-500"></i>
                ))}
              </div>
              <p className="text-text mb-4">{review.text}</p>
              <p className="text-primary font-semibold">{review.author} - {review.category}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Reviews;

