import React from 'react';
import { ShoppingCart, Calendar, Wrench, Headphones } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Complete medical equipment solutions tailored to your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Equipment Sales</h3>
                <p className="text-gray-600 leading-relaxed">
                  Purchase brand new or certified pre-owned medical equipment from top manufacturers. 
                  All our products come with warranty and quality assurance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Equipment Rental</h3>
                <p className="text-gray-600 leading-relaxed">
                  Flexible rental options for short-term or long-term needs. Perfect for temporary 
                  requirements, budget constraints, or equipment trials.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Wrench className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance & Repair</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive maintenance services and emergency repairs by certified technicians. 
                  Keep your equipment running at peak performance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Headphones className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Training & Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Equipment training for your staff and ongoing technical support. 
                  We ensure your team can operate equipment safely and efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Holkar Healthcare?</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>10+ years of industry experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Partnerships with leading manufacturers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Competitive pricing and flexible terms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Pan-India delivery and installation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>24/7 technical support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>ISO certified and compliant</span>
              </div>
            </div>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold mt-8">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;