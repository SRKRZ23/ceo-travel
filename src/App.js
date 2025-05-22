import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="App">
        {/* Навигационное меню */}
        <nav className="bg-primary text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-heading font-bold flex items-center gap-2">
              <i className="fas fa-plane"></i> CEO Travel
            </Link>
            <div className="space-x-4">
              <Link to="/" className="hover:text-secondary transition-colors">{t('home')}</Link>
              <Link to="/blog" className="hover:text-secondary transition-colors">{t('blog')}</Link>
              <Link to="/about" className="hover:text-secondary transition-colors">{t('about')}</Link>
              <Link to="/reviews" className="hover:text-secondary transition-colors">{t('reviews')}</Link>
              <Link to="/contact" className="hover:text-secondary transition-colors">{t('contact_us')}</Link>
              <Link to="/destinations" className="hover:text-secondary transition-colors">{t('travel_the_world')}</Link>
            </div>
          </div>
        </nav>

        {/* Маршруты */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>

        {/* Футер */}
        <footer className="bg-primary text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2025 CEO Travel. All rights reserved.</p>
            <div className="mt-2">
              <a href="https://facebook.com" className="text-secondary mx-2"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" className="text-secondary mx-2"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" className="text-secondary mx-2"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

