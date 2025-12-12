import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full ${isScrolled ? 'bg-burgundy text-white' : 'bg-white text-burgundy'} transition-colors`}>
             <Heart className="w-6 h-6 fill-current" />
          </div>
          <span className={`text-lg sm:text-xl font-bold font-serif ${isScrolled ? 'text-burgundy' : 'text-white'} transition-colors`}>
            Conqueror SCF
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium hover:text-red-400 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-gray-100'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#volunteer"
            className={`px-4 lg:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 text-sm lg:text-base ${
              isScrolled 
                ? 'bg-burgundy text-white hover:bg-burgundy-light' 
                : 'bg-white text-burgundy hover:bg-gray-100'
            }`}
          >
            Join the Circuit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <div className="flex flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 font-medium text-lg hover:text-burgundy"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#volunteer"
              className="bg-burgundy text-white text-center py-3 rounded-lg font-semibold hover:bg-burgundy-light"
              onClick={() => setIsOpen(false)}
            >
              Join the Circuit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;