import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Blog() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-primary text-4xl md:text-5xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
        <i className="fas fa-blog text-accent"></i>{t('blog')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Post 1: 10 Reasons to Visit Samarkand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('blog_post1')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('blog_post1_text')}</p>
            <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-soft">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7l5q-x2gNsI"
                title="Discover Samarkand, Uzbekistan | A Journey Through History"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </motion.div>
        {/* Post 2: Uzbekistan's Culinary Delights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('blog_post2')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('blog_post2_text')}</p>
          </div>
        </motion.div>
        {/* Post 3: Adventures in Chimgan Mountains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('adventures_chimgan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('adventures_chimgan_text')}</p>
            <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-soft">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4vW5Xq5Xq5X"
                title="Chimgan Mountains: A Scenic Adventure in Uzbekistan"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </motion.div>
        {/* Post 4: Discovering Bukhara */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('discovering_bukhara')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('discovering_bukhara_text')}</p>
          </div>
        </motion.div>
        {/* Post 5: A Journey Through Khiva */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('journey_khiva')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('journey_khiva_text')}</p>
          </div>
        </motion.div>
        {/* Post 6: Uzbekistan Introduces Visa-Free Travel with UAE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('visa_free_uae')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('visa_free_uae_text') }} />
          </div>
        </motion.div>
        {/* Post 7: Top 5 Must-Visit Historical Sites in Tashkent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('top_5_historical_sites_tashkent')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('top_5_historical_sites_tashkent_text')}</p>
          </div>
        </motion.div>
        {/* Post 8: Travel Hack - Packing Tips for a Trip to Uzbekistan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('packing_tips_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('packing_tips_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 9: Exploring the Silk Road - A Historical Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('silk_road_journey')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('silk_road_journey_text')}</p>
          </div>
        </motion.div>
        {/* Post 10: Best Time to Visit Uzbekistan - A Seasonal Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('best_time_to_visit')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('best_time_to_visit_text')}</p>
          </div>
        </motion.div>
        {/* Post 11: Cultural Etiquette in Uzbekistan - What to Know Before You Go */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.0 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('cultural_etiquette_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('cultural_etiquette_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 12: Top 10 Souvenirs to Buy in Uzbekistan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('top_10_souvenirs')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('top_10_souvenirs_text')}</p>
          </div>
        </motion.div>
        {/* Post 13: How to Get Around Uzbekistan - Transportation Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('transportation_tips_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('transportation_tips_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 14: Festivals and Events in Uzbekistan - A Traveler’s Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('festivals_events_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('festivals_events_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 15: Budget Travel Tips for Exploring Uzbekistan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('budget_travel_tips_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('budget_travel_tips_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 16: The Ultimate Guide to Uzbekistan’s Bazaars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.0 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('guide_to_bazaars')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('guide_to_bazaars_text')}</p>
          </div>
        </motion.div>
        {/* Post 17: Traditional Crafts of Uzbekistan - What to See and Buy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.2 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('traditional_crafts_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('traditional_crafts_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 18: A Day in Fergana Valley - Exploring the Heart of Uzbek Crafts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.4 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('day_in_fergana_valley')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('day_in_fergana_valley_text')}</p>
          </div>
        </motion.div>
        {/* Post 19: Safety Tips for Traveling in Uzbekistan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.6 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('safety_tips_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('safety_tips_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 20: Photography Tips for Capturing Uzbekistan’s Beauty */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.8 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('photography_tips_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('photography_tips_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 21: Discovering Uzbekistan’s UNESCO World Heritage Sites */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 4.0 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('unesco_world_heritage_uzbekistan')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed">{t('unesco_world_heritage_uzbekistan_text')}</p>
          </div>
        </motion.div>
        {/* Post 22: Exploring Samarkand - The Heart of the Silk Road */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 4.2 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-soft overflow-hidden"
        >
          <div className="w-full h-48 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">Soon here will be content</p>
          </div>
          <div className="p-6">
            <h2 className="text-primary text-xl font-heading font-semibold mb-3">{t('exploring_samarkand')}</h2>
            <p className="text-text text-base mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('exploring_samarkand_text') }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Blog;

