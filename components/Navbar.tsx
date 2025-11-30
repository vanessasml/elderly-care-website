import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { content, language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: content.nav.home },
    { path: '/mission', label: content.nav.mission },
    { path: '/activities', label: content.nav.activities },
    { path: '/about', label: content.nav.about },
    { path: '/contact', label: content.nav.contact },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="bg-primary p-2 rounded-full text-white">
                <Heart size={24} fill="currentColor" />
              </div>
              <span className="font-bold text-2xl text-gray-800">Idoso<span className="text-primary">Ativo</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-50 text-sm font-medium text-gray-700 transition"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-gray-300 hover:bg-gray-50 text-xs font-medium text-gray-700 transition"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;