import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4">
            We transform the landscape of sickle cell disease through interconnected programs designed for maximum global and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-burgundy group flex flex-col h-full"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-50 rounded-xl flex items-center justify-center text-burgundy mb-4 sm:mb-6 group-hover:bg-burgundy group-hover:text-white transition-colors duration-300 shrink-0">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;