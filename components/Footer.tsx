import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">Conqueror SCF</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              Dedicated to eradicating Sickle Cell Disease and supporting warriors worldwide through education, medical support, and community building.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-burgundy transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-burgundy transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-burgundy transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-200">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">The Circuit</a></li>
            </ul>
          </div>

          {/* Legal/Resources */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-200">Resources</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">SCD Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Genotype Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-200">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
              <li className="flex gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy shrink-0 mt-0.5" />
                <span className="break-words">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.map(phone => (
                    <span key={phone}>{phone}</span>
                  ))}
                </div>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy shrink-0 mt-0.5" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
               <li className="flex gap-2 sm:gap-3">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Conqueror Sickle Cell Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;