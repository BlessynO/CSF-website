import React from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Volunteer: React.FC = () => {
  return (
    <section id="volunteer" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16">
          
          {/* Content Side */}
          <div className="md:w-1/2">
            <h4 className="text-burgundy font-bold uppercase tracking-wider mb-2 text-xs sm:text-sm">Join the Movement</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Become a <span className="text-burgundy">Volunteer</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Join our network of dedicated individuals working to eradicate Sickle Cell Disease. Whether you are a medical professional, a student, or simply passionate about the cause, your contribution can save lives.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Medical Outreach</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Assist in our quarterly medical camps and screenings.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Advocacy & Awareness</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Help spread knowledge in schools and communities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2">
            <form className="bg-gray-50 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Registration Form</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input type="text" className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors text-sm sm:text-base" placeholder="John Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input type="email" className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors text-sm sm:text-base" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input type="tel" className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors text-sm sm:text-base" placeholder="+234..." />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">I want to volunteer as...</label>
                  <select className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors bg-white text-sm sm:text-base">
                    <option>Medical Professional</option>
                    <option>Community Advocate</option>
                    <option>Event Organizer</option>
                    <option>Fundraiser</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors h-24 sm:h-32 resize-none text-sm sm:text-base" placeholder="Tell us about your skills..."></textarea>
                </div>

                <button type="button" className="w-full bg-burgundy text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-burgundy-light transition-colors shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                  Submit Application
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Volunteer;