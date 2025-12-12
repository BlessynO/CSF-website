import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We transform the landscape of sickle cell disease through interconnected programs designed for maximum global and community impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-burgundy group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-burgundy mb-6 group-hover:bg-burgundy group-hover:text-white transition-colors duration-300 shrink-0">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
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