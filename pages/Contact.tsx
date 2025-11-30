import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to actually send email would go here
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.contact.title}</h1>
          <p className="text-xl text-gray-600">{content.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{content.contact.addressTitle}</h3>
                  <p className="text-gray-600">Rua da Esperança, 123<br/>1000-001 Lisboa, Portugal</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{content.contact.phoneTitle}</h3>
                  <p className="text-gray-600">+351 210 000 000</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{content.contact.emailTitle}</h3>
                  <p className="text-gray-600">contacto@idosoativo.pt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Obrigado!</h3>
                <p className="text-gray-600">{content.contact.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{content.contact.nameLabel}</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{content.contact.emailLabel}</label>
                  <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{content.contact.messageLabel}</label>
                  <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Send size={20} />
                  {content.contact.sendButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;