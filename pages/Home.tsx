import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Activity, Heart, Users } from 'lucide-react';

const Home: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-primary/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              {content.home.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              {content.home.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
              >
                {content.home.cta}
              </Link>
              <Link
                to="/about"
                className="bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold py-3 px-8 rounded-full transition-colors"
              >
                {content.nav.about}
              </Link>
            </div>
          </div>
        </div>
        {/* Abstract shapes/image decorative */}
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block overflow-hidden opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-primary fill-current">
              <path transform="translate(100 100)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.6,34.1C59,45.1,47.1,53.4,34.6,59.3C22.1,65.2,9,68.7,-3.6,74.9C-16.2,81.1,-28.4,90.1,-39.8,87.6C-51.2,85.1,-61.8,71.1,-69.4,56.8C-77,42.5,-81.6,27.9,-82.9,13.1C-84.2,-1.7,-82.2,-16.7,-74.7,-29.4C-67.2,-42.1,-54.2,-52.5,-40.9,-60C-27.6,-67.5,-13.8,-72.1,1,-73.9C15.8,-75.6,30.5,-74.6,44.7,-76.4Z" />
            </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{content.home.featuresTitle}</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-neutral rounded-xl p-8 text-center transition hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{content.home.feature1Title}</h3>
              <p className="text-gray-600">{content.home.feature1Desc}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral rounded-xl p-8 text-center transition hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{content.home.feature2Title}</h3>
              <p className="text-gray-600">{content.home.feature2Desc}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-neutral rounded-xl p-8 text-center transition hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{content.home.feature3Title}</h3>
              <p className="text-gray-600">{content.home.feature3Desc}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Banner */}
      <div className="h-64 md:h-96 overflow-hidden relative">
          <img src="https://picsum.photos/id/128/1920/600" alt="Seniors happy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Link to="/contact" className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform hover:scale-105">
                  {content.home.cta}
              </Link>
          </div>
      </div>
    </div>
  );
};

export default Home;