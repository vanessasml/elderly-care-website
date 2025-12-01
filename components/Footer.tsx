import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Idoso Ativo</h3>
            <p className="text-gray-400 mb-4">
              {content.home.heroSubtitle}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><Instagram size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{content.nav.contact}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><MapPin size={18} /> Espaco a anunciar - Castelo Branco </li>
              <li className="flex items-center gap-2"><Phone size={18} /> +351 210 000 000</li>
              <li className="flex items-center gap-2"><Mail size={18} /> contacto@idosoativo.pt</li>
            </ul>
          </div>

          <div>
             <h3 className="text-xl font-bold mb-4">Links</h3>
             <ul className="space-y-2 text-gray-400">
                <li><a href="#/mission" className="hover:text-primary transition">{content.nav.mission}</a></li>
                <li><a href="#/activities" className="hover:text-primary transition">{content.nav.activities}</a></li>
                <li><a href="#/about" className="hover:text-primary transition">{content.nav.about}</a></li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Idoso Ativo. {content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;