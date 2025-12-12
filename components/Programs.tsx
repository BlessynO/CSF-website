import React from 'react';
import { PROGRAMS } from '../constants';
import { Calendar } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h4 className="text-burgundy font-bold uppercase tracking-wider mb-2">Impact Initiatives</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">Our Programs</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center font-semibold text-burgundy hover:text-burgundy-light mt-4 md:mt-0">
            View All Programs &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-burgundy flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {program.date}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-burgundy transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center font-semibold text-burgundy hover:text-burgundy-light">
            View All Programs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;