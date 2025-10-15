import React from 'react';
import { Award, Users, Building, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building, label: 'Healthcare Facilities Served', value: '1000+' },
    { icon: Users, label: 'Satisfied Customers', value: '5000+' },
    { icon: Award, label: 'Years of Experience', value: '10+' },
    { icon: Clock, label: 'Equipment Installations', value: '10000+' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading Medical Equipment Provider in India
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Holkar Healthcare has been at the forefront of medical equipment supply for over 10 years. 
              We specialize in providing cutting-edge medical technology to hospitals, clinics, diagnostic 
              centers, and healthcare facilities across India.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, reliability, and customer satisfaction has made us a trusted 
              partner for healthcare providers. From small clinics to large hospital chains, we deliver 
              solutions that enhance patient care and operational efficiency.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Authorized dealer for top international brands</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Comprehensive after-sales support and maintenance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Flexible financing and rental options</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Pan-India presence with local support teams</span>
              </div>
            </div>

            <a 
             href="https://www.facebook.com/profile.php?id=61577874597815" 
             target="_blank" 
             rel="noopener noreferrer"
            >
  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
    Learn More About Us
  </button>
</a>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower healthcare providers with state-of-the-art medical equipment and exceptional 
              service, enabling them to deliver superior patient care while achieving operational excellence.
            </p>
          </div>
          <div className="bg-cyan-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be India's most trusted and innovative medical equipment solutions provider, 
              contributing to the advancement of healthcare infrastructure nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;