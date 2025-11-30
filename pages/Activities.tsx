import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACTIVITIES_DATA } from '../constants';
import { Calendar } from 'lucide-react';

const Activities: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.activities.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.activities.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ACTIVITIES_DATA.map((activity) => (
            <div key={activity.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
                  <Calendar size={16} />
                  <span>{activity.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;