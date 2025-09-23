import React from 'react';
import { Activity, Stethoscope, Zap, Users, Heart, Brain } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: Activity,
      title: 'Diagnostic Equipment',
      description: 'X-ray, MRI, CT scanners, ultrasound machines',
      count: '150+ items',
      color: 'blue'
    },
    {
      icon: Stethoscope,
      title: 'Patient Monitoring',
      description: 'ECG machines, pulse oximeters, vital sign monitors',
      count: '80+ items',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Surgical Equipment',
      description: 'Operating tables, surgical lights, electrosurgical units',
      count: '120+ items',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Rehabilitation',
      description: 'Physiotherapy equipment, mobility aids, exercise tools',
      count: '70+ items',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'Emergency Care',
      description: 'Defibrillators, ventilators, emergency monitors',
      count: '45+ items',
      color: 'orange'
    },
    {
      icon: Brain,
      title: 'Laboratory',
      description: 'Analyzers, microscopes, centrifuges, incubators',
      count: '90+ items',
      color: 'cyan'
    }
  ];

  const colorMap = {
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    green: 'bg-green-100 text-green-600 hover:bg-green-200',
    red: 'bg-red-100 text-red-600 hover:bg-red-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    cyan: 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200'
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Medical Equipment Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From diagnostic imaging to surgical instruments, we provide a complete spectrum 
            of medical equipment to meet all your healthcare facility needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-full ${colorMap[category.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-blue-600">{category.count}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    View All →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};


export default Categories;