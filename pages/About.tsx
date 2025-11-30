import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TEAM_DATA, PARTNERS_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{content.about.title}</h1>
              <div className="w-20 h-1 bg-secondary mb-8 rounded"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.about.description}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/1025/800/600" alt="Team meeting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{content.about.teamTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_DATA.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg" 
                />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">{content.about.partnersTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PARTNERS_DATA.map((partner, index) => (
              <a 
                key={index} 
                href={partner.website} 
                className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition group"
              >
                <span className="font-semibold text-gray-700 group-hover:text-primary mb-2 text-lg">{partner.name}</span>
                <ExternalLink size={16} className="text-gray-400 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;