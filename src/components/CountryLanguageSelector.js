import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function CountryLanguageSelector({ onSelect }) {
  const { t, i18n } = useTranslation();
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState(i18n.language);

  const countries = [
    'Uzbekistan', 'Egypt', 'Maldives', 'China', 'Thailand', 'Vietnam',
    'Turkey', 'UAE', 'Czechia', 'Montenegro', 'Malaysia', 'Azerbaijan', 'Georgia'
  ];

  const handleSubmit = () => {
    if (country) {
      i18n.changeLanguage(language);
      onSelect({ country, language });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-primary text-2xl font-heading font-semibold mb-4">{t('select_country_language')}</h2>
        <div className="mb-4">
          <label className="block text-text mb-2">{t('country')}</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">{t('select_country')}</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-text mb-2">{t('language')}</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O‘zbek</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary text-white w-full py-2 rounded-full font-heading font-semibold hover:bg-blue-700 transition-colors"
        >
          {t('submit')}
        </button>
      </div>
    </div>
  );
}

export default CountryLanguageSelector;

