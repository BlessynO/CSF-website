import React from 'react';
import { Users, Briefcase, UserCheck, Network } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Leadership</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our executive structure ensures effective governance and strategic direction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Founder */}
            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 text-burgundy">
                    <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Founder</h3>
                <p className="text-sm text-gray-500 mb-4">Visionary & Board Member</p>
                <p className="text-sm text-gray-600">Original visionary providing long-term strategic guidance and upholding the core mission.</p>
            </div>

            {/* CEO */}
            <div className="bg-burgundy text-white p-6 rounded-2xl text-center shadow-xl transform scale-105">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-1">CEO</h3>
                <p className="text-sm text-red-200 mb-4">Chief Executive Officer</p>
                <p className="text-sm text-red-50">Responsible for overall success, strategic direction, and linking the executive team with the Board.</p>
            </div>

            {/* COO Admin */}
            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 text-burgundy">
                    <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">COO (Admin)</h3>
                <p className="text-sm text-gray-500 mb-4">Operations & Processes</p>
                <p className="text-sm text-gray-600">Focused on internal efficiency, resource allocation, and managing the Operations and Social Media teams.</p>
            </div>

            {/* COO Partnerships */}
            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 text-burgundy">
                    <Network className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">COO (Partnerships)</h3>
                <p className="text-sm text-gray-500 mb-4">Growth & Alliances</p>
                <p className="text-sm text-gray-600">Focused on external growth, strategic alliances, and managing Medical Consulting and Writing teams.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;