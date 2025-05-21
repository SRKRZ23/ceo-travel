import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around gap-8 text-center md:text-left">
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-heading font-semibold mb-4">{t('contact_us')}</h3>
          <p className="mb-2"><i className="fas fa-phone-alt mr-2 text-secondary"></i>+998 90 123 45 67</p>
          <p className="mb-2"><i className="fas fa-envelope mr-2 text-secondary"></i>info@ceotravel.com</p>
          <p><i className="fas fa-map-pin mr-2 text-secondary"></i>Tashkent, Uzbekistan</p>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-heading font-semibold mb-4">{t('working_hours')}</h3>
          <p className="mb-2">{t('mon_fri')}</p>
          <p className="mb-2">{t('sat')}</p>
          <p>{t('sun')}</p>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-heading font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">© 2025 CEO Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

