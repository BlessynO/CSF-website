import React from 'react';
import { Heart } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <section id="donate" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gray-200 relative min-h-[300px] sm:min-h-[400px]">
             <img 
                src="https://images.unsplash.com/photo-1509059852496-f3822ae048eb?auto=format&fit=crop&q=80" 
                alt="African child holding hands" 
                className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-burgundy/70" />
          </div>
          
          <div className="md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-burgundy mb-3 sm:mb-4">
                <Heart className="fill-current w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-bold uppercase tracking-wider text-xs sm:text-sm">Help Us Save Lives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
              Your Contribution Matters
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
              Every donation goes directly towards funding genotype tests for low-income families, providing medication for warriors, and running our awareness campaigns.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-2 sm:mb-4">
                    <button className="py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg font-bold text-gray-600 hover:border-burgundy hover:text-burgundy hover:bg-red-50 transition-colors text-sm sm:text-base">$25</button>
                    <button className="py-2.5 sm:py-3 border-2 border-burgundy bg-burgundy/5 rounded-lg font-bold text-burgundy transition-colors text-sm sm:text-base">$50</button>
                    <button className="py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg font-bold text-gray-600 hover:border-burgundy hover:text-burgundy hover:bg-red-50 transition-colors text-sm sm:text-base">$100</button>
                </div>
                <button className="w-full bg-burgundy text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-burgundy-light transition-colors shadow-lg text-sm sm:text-base lg:text-lg">
                    Donate Securely
                </button>
                <p className="text-center text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                    All donations are tax-deductible.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;