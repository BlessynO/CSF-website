import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Users, MessageCircle, Shield, BookOpen } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-br from-burgundy via-burgundy to-burgundy-dark relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brandRed opacity-20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            The Conqueror's Circuit
          </h2>
          <p className="text-brandRed-100 text-lg max-w-3xl mx-auto font-medium">
            A dedicated, peer-led support network ensuring no Sickle Cell Warrior manages their condition alone. We focus on psychosocial, emotional, and educational needs.
          </p>
        </div>

        {/* Community Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-colors text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full text-white flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Peer Resilience</h3>
                <p className="text-red-100 text-sm">A supportive ecosystem where "Conquerors" connect, share coping strategies, and mentor one another in a judgment-free space.</p>
             </div>
             
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-colors text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full text-white flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Psychosocial Aid</h3>
                <p className="text-red-100 text-sm">Access to mental health resources, stress management workshops, and counseling to navigate emotional burdens.</p>
             </div>

             <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-colors text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full text-white flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Virtual Education Hub</h3>
                <p className="text-red-100 text-sm">Regular webinars and Q&A sessions with expert hematologists and dietitians to empower members with knowledge.</p>
             </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-2xl relative transform hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-4 border-white shadow-md" 
                />
              </div>
              <div className="mt-4">
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-sm text-burgundy font-bold">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="bg-white text-burgundy px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg text-lg">
                Join Our Community
            </button>
        </div>
      </div>
    </section>
  );
};

export default Community;