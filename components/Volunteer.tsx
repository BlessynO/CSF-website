import React from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Volunteer: React.FC = () => {
  return (
    <section id="volunteer" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Content Side */}
          <div className="md:w-1/2">
            <h4 className="text-burgundy font-bold uppercase tracking-wider mb-2">Join the Movement</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Become a <span className="text-burgundy">Volunteer</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Join our network of dedicated individuals working to eradicate Sickle Cell Disease. Whether you are a medical professional, a student, or simply passionate about the cause, your contribution can save lives.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Medical Outreach</h3>
                  <p className="text-sm text-gray-600">Assist in our quarterly medical camps and screenings.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Advocacy & Awareness</h3>
                  <p className="text-sm text-gray-600">Help spread knowledge in schools and communities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2">
            <form className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Registration Form</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors" placeholder="John Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input type="email" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input type="tel" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors" placeholder="+234..." />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">I want to volunteer as...</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors bg-white">
                    <option>Medical Professional</option>
                    <option>Community Advocate</option>
                    <option>Event Organizer</option>
                    <option>Fundraiser</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none transition-colors h-32 resize-none" placeholder="Tell us about your skills..."></textarea>
                </div>

                <button type="button" className="w-full bg-burgundy text-white font-bold py-4 rounded-xl hover:bg-burgundy-light transition-colors shadow-lg flex items-center justify-center gap-2">
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