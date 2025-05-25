import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Информация о компании */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <p>{t('footer.description')}</p>
          </div>

          {/* Контактная информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <p>{t('footer.address')}: г. Ташкент, Шайхантахурский район, Чорсу МФЙ, улица Лайлитогон, 1</p>
            <p>{t('footer.phone')}: <a href="tel:+998946291113" className="underline">+998946291113</a></p>
            <p>{t('footer.email')}: <a href="mailto:razikovsardor1@gmail.com" className="underline">razikovsardor1@gmail.com</a></p>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; 2025 CEO Travel. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

