import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Eye, Star } from 'lucide-react';

const Mission: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.mission.title}</h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="space-y-16">
          {/* Mission */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
              <Target size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{content.mission.missionTitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.mission.missionDesc}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="bg-teal-100 p-4 rounded-full text-teal-600 shrink-0">
              <Eye size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{content.mission.visionTitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.mission.visionDesc}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="bg-orange-100 p-4 rounded-full text-orange-600 shrink-0">
              <Star size={40} />
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{content.mission.valuesTitle}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {content.mission.valuesList.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="font-medium text-gray-700">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;