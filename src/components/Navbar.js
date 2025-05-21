import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-3xl font-heading font-bold mb-3 md:mb-0">
          CEO Travel
        </div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
          <li>
            <Link
              to="/"
              className="text-white text-lg font-medium hover:text-secondary transition-colors duration-300 relative group"
            >
              {t('home')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg font-medium hover:text-secondary transition-colors duration-300 relative group"
            >
              {t('about')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white text-lg font-medium hover:text-secondary transition-colors duration-300 relative group"
            >
              {t('blog')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="text-white text-lg font-medium hover:text-secondary transition-colors duration-300 relative group"
            >
              {t('reviews')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg font-medium hover:text-secondary transition-colors duration-300 relative group"
            >
              {t('contact_us')}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
        <div className="mt-3 md:mt-0 flex gap-3">
          <button
            onClick={() => changeLanguage('ru')}
            className="text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            RU
          </button>
          <button
            onClick={() => changeLanguage('uz')}
            className="text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            UZ
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

