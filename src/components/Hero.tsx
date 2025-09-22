import React from 'react';
import { ArrowRight, Shield, Truck, HeadphonesIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premier Medical
              <span className="text-blue-600 block">Equipment Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trusted supplier of high-quality medical equipment for hospitals, clinics, and healthcare facilities. 
              We offer both sales and rental options with comprehensive support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group">
                Browse Equipment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
                Request Quote
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-900">Certified</p>
                <p className="text-sm text-gray-600">ISO Compliant</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <p className="font-semibold text-gray-900">Fast Delivery</p>
                <p className="text-sm text-gray-600">Pan India</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HeadphonesIcon className="h-8 w-8 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900">24/7 Support</p>
                <p className="text-sm text-gray-600">Always Here</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:pl-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://i.ibb.co/35TJBjHk/medical-device-Supply-chain-Management.jpg"
                  alt="Medical Equipment"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-700">
                      <p className="font-semibold">Equipment Types</p>
                      <p className="text-sm">Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;