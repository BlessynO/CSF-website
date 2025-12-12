import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" 
          alt="Happy African children smiling" 
          className="w-full h-full object-cover"
        />
        {/* Updated overlay for better vibrancy with new burgundy */}
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy/80 to-burgundy/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full bg-brandRed/20 border border-brandRed/40 text-white font-bold tracking-wide text-xs sm:text-sm backdrop-blur-sm shadow-sm">
            FIGHTING SICKLE CELL DISEASE TOGETHER
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-white mb-4 sm:mb-6 leading-tight drop-shadow-md">
            Breaking the Cycle, <br className="hidden sm:block" />
            <span className="text-brandRed-200">Building Hope.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0 drop-shadow-sm font-medium">
             Our goal is to eradicate the burden of sickle cell disease by drastically reducing new births and guaranteeing a high quality of life for all affected persons.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a 
              href="#volunteer" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-burgundy font-bold rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Join Us Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#about" 
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;