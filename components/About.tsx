import React, { useState } from 'react';
import { Target, ShieldCheck, Heart, Globe, TrendingUp, Users, ChevronDown, ChevronUp, Briefcase, UserCheck, Network } from 'lucide-react';

const About: React.FC = () => {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img 
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80" 
                alt="African doctor consulting patient" 
                className="rounded-xl sm:rounded-2xl shadow-xl w-full h-48 sm:h-56 md:h-64 object-cover transform translate-y-4 sm:translate-y-6 md:translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?auto=format&fit=crop&q=80" 
                alt="African community gathering" 
                className="rounded-xl sm:rounded-2xl shadow-xl w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-50 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-burgundy font-bold uppercase tracking-wider mb-2 text-xs sm:text-sm">About Us</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Champions for a <span className="text-burgundy">Pain-Free Future</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              The Conquerors Sickle Cell Foundation is a dedicated non-profit organization primarily committed to supporting and advocating for persons living with sickle cell disease (SCD) globally.
            </p>
            
            <div className="bg-red-50 p-4 sm:p-6 rounded-xl border border-red-100 mb-6 sm:mb-8">
              <h3 className="text-burgundy font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> The Global Challenge
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-700">
                <li className="flex gap-2 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 bg-brandRed rounded-full mt-2 flex-shrink-0" />
                  <span><strong>5%</strong> of the world's population carries the trait genes.</span>
                </li>
                <li className="flex gap-2 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 bg-brandRed rounded-full mt-2 flex-shrink-0" />
                  <span>Over <strong>300,000</strong> babies with severe haemoglobin disorders born annually.</span>
                </li>
                <li className="flex gap-2 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 bg-brandRed rounded-full mt-2 flex-shrink-0" />
                  <span>Severe predominance in Africa, requiring targeted intervention.</span>
                </li>
              </ul>
            </div>

            <button 
                onClick={() => setShowTeam(!showTeam)}
                className="flex items-center gap-2 text-burgundy font-bold border-2 border-burgundy px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-burgundy hover:text-white transition-all text-sm sm:text-base"
            >
                {showTeam ? 'Hide Leadership' : 'Meet Our Leadership'}
                {showTeam ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Conditional Leadership Section */}
        {showTeam && (
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-fade-in bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
                <div className="text-center mb-8 sm:mb-12">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">Our Executive Team</h3>
                  <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                    The executive structure for CSF is led by four key individuals who form the highest level of management and governance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {/* Founder */}
                    <div className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 text-burgundy">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Founder</h3>
                        <p className="text-xs text-gray-500 mb-3">Visionary & Board Member</p>
                        <p className="text-xs text-gray-600">Original visionary providing long-term strategic guidance and upholding the core mission.</p>
                    </div>

                    {/* CEO */}
                    <div className="bg-burgundy text-white p-6 rounded-2xl text-center shadow-xl transform md:-translate-y-2">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                            <UserCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-1">CEO</h3>
                        <p className="text-xs text-red-200 mb-3">Chief Executive Officer</p>
                        <p className="text-xs text-red-50">Responsible for overall success, strategic direction, and linking the executive team with the Board.</p>
                    </div>

                    {/* COO Admin */}
                    <div className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 text-burgundy">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">COO (Admin)</h3>
                        <p className="text-xs text-gray-500 mb-3">Operations & Processes</p>
                        <p className="text-xs text-gray-600">Focused on internal efficiency, resource allocation, and managing the Operations teams.</p>
                    </div>

                    {/* COO Partnerships */}
                    <div className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 text-burgundy">
                            <Network className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">COO (Partnerships)</h3>
                        <p className="text-xs text-gray-500 mb-3">Growth & Alliances</p>
                        <p className="text-xs text-gray-600">Focused on external growth, strategic alliances, and managing Medical Consulting teams.</p>
                    </div>
                </div>
            </div>
        )}

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border-t-4 border-burgundy">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center text-burgundy mb-4 sm:mb-6">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-600">
                <strong>Vision 01:</strong> To eradicate the burden of SCD by drastically reducing new births and guaranteeing a high quality of life for all affected persons. Aiming for an 80% decrease in global incidence by 2030.
              </p>
              <div className="h-px bg-gray-100" />
              <p className="text-sm sm:text-base text-gray-600">
                <strong>Vision 02:</strong> A future where SCD is no longer a public health crisis, where genetic testing is comprehensive, and every individual born with the trait lives without stigma.
              </p>
            </div>
          </div>

          <div className="bg-burgundy text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10" />
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white mb-4 sm:mb-6 backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-red-100 leading-relaxed mb-4 sm:mb-6">
              To serve as the catalyst for change in sickle cell management by mobilizing resources, providing technical expertise for prevention and care, and championing targeted research to ensure persons living with the disease can not only survive, but thrive.
            </p>
          </div>
        </div>

        {/* Strategy Pillars */}
        <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">Our Strategy for Impact</h3>
            <p className="text-sm sm:text-base text-gray-500 mt-2">Built on three pillars to secure a healthier future.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-brandRed font-bold text-lg sm:text-xl mb-2 sm:mb-3">01</div>
                <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Promoting Equitable Access</h4>
                <p className="text-xs sm:text-sm text-gray-600">Championing access to comprehensive health services and life-saving treatments for all, regardless of economic status.</p>
            </div>
            <div className="p-5 sm:p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-brandRed font-bold text-lg sm:text-xl mb-2 sm:mb-3">02</div>
                <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Supporting Global Management</h4>
                <p className="text-xs sm:text-sm text-gray-600">Providing technical support to countries to develop robust national programs for prevention, screening, and management.</p>
            </div>
            <div className="p-5 sm:p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="text-brandRed font-bold text-lg sm:text-xl mb-2 sm:mb-3">03</div>
                <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Driving Research & Innovation</h4>
                <p className="text-xs sm:text-sm text-gray-600">Actively promoting research aimed at discovering new therapies and improving quality of life for those affected.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;