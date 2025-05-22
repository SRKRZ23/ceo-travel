import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Blog() {
  const { t } = useTranslation();
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    const savedSelection = localStorage.getItem('userSelection');
    if (savedSelection) {
      setUserSelection(JSON.parse(savedSelection));
    }
  }, []);

  const blogPosts = userSelection
    ? userSelection.country === 'Uzbekistan'
      ? [
          { title: t('blog_post1'), text: t('blog_post1_text'), category: 'Uzbekistan', image: '/images/samarkand-blog.jpg' },
          { title: t('blog_post2'), text: t('blog_post2_text'), category: 'Uzbekistan', image: '/images/uzbek-cuisine.jpg' },
          { title: t('adventures_chimgan'), text: t('adventures_chimgan_text'), category: 'Uzbekistan', image: '/images/chimgan-blog.jpg' },
          { title: t('discovering_bukhara'), text: t('discovering_bukhara_text'), category: 'Uzbekistan', image: '/images/bukhara-blog.jpg' }
        ]
      : [
          { title: `Travel Tips for ${userSelection.country}`, text: `Discover the best travel tips for visiting Uzbekistan from ${userSelection.country}.`, category: userSelection.country, image: `/images/uzbekistan-tips-${userSelection.country.toLowerCase()}.jpg` },
          { title: `Cultural Highlights of Uzbekistan for ${userSelection.country} Visitors`, text: `Learn about the cultural highlights of Uzbekistan tailored for visitors from ${userSelection.country}.`, category: userSelection.country, image: `/images/uzbekistan-culture-${userSelection.country.toLowerCase()}.jpg` },
          { title: `Top Destinations in Uzbekistan for ${userSelection.country} Travelers`, text: `Explore the top destinations in Uzbekistan recommended for travelers from ${userSelection.country}.`, category: userSelection.country, image: `/images/uzbekistan-destinations-${userSelection.country.toLowerCase()}.jpg` }
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
        <i className="fas fa-blog text-accent"></i> {t('blog')}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <div className="w-full h-48 rounded-xl bg-gray-100 mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h3 className="text-primary text-xl font-heading font-semibold mb-3">{post.title}</h3>
              <p className="text-text">{post.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Blog;

