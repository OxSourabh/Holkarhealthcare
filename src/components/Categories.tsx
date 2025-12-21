import React, { useState } from 'react';
import { 
  Activity, Stethoscope, Zap, Users, Heart, Brain, 
  Droplet, Eye, Baby, Home, Scissors, HeartPulse, 
  ChevronDown, ChevronUp
} from 'lucide-react';

interface Equipment {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  inStock: boolean;
}

interface Category {
  id: number;
  icon: any;
  title: string;
  description: string;
  count: string;
  color: string;
  equipments: Equipment[];
}

const Categories = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  
  const categories: Category[] = [
    {
      id: 1,
      icon: Activity,
      title: 'Diagnostic Equipment',
      description: 'Advanced imaging and diagnostic solutions',
      count: '180+ items',
      color: 'blue',
      equipments: [
        {
          id: 101,
          name: '3T MRI Scanner',
          description: 'High-field MRI system for detailed anatomical imaging',
          image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=80',
          price: '1,200,000',
          inStock: true
        },
        {
          id: 102,
          name: 'Digital X-ray System',
          description: 'High-resolution digital radiography system',
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=80',
          price: '185,000',
          inStock: true
        },
        {
          id: 103,
          name: 'Ultrasound Machine',
          description: 'Portable ultrasound with advanced imaging capabilities',
          image: 'https://images.unsplash.com/photo-1601001815894-4cd6f68aabc5?w=500&auto=format&fit=crop&q=80',
          price: '45,000',
          inStock: true
        }
      ]
    },
    {
      id: 2,
      icon: Stethoscope,
      title: 'Patient Monitoring',
      description: 'Real-time patient vital signs tracking',
      count: '95+ items',
      color: 'green',
      equipments: [
        {
          id: 201,
          name: 'Vital Signs Monitor',
          description: 'Multi-parameter patient monitoring system',
          image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=500&auto=format&fit=crop&q=80',
          price: '12,500',
          inStock: true
        },
        {
          id: 202,
          name: 'ECG Machine',
          description: '12-lead electrocardiogram with analysis',
          image: 'https://images.unsplash.com/photo-1631549916768-4119c2bdc5bb?w=500&auto=format&fit=crop&q=80',
          price: '18,200',
          inStock: true
        }
      ]
    },
    {
      id: 3,
      icon: Zap,
      title: 'Surgical Equipment',
      description: 'Precision instruments for surgical procedures',
      count: '140+ items',
      color: 'red',
      equipments: [
        {
          id: 301,
          name: 'Surgical Table',
          description: 'Hydraulic operating table with multiple positions',
          image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=80',
          price: '142,000',
          inStock: true
        }
      ]
    },
    {
      id: 4,
      icon: Users,
      title: 'Rehabilitation',
      description: 'Therapy and mobility assistance equipment',
      count: '85+ items',
      color: 'purple',
      equipments: []
    },
    {
      id: 5,
      icon: Heart,
      title: 'Emergency Care',
      description: 'Critical care and life support systems',
      count: '60+ items',
      color: 'orange',
      equipments: []
    },
    {
      id: 6,
      icon: Brain,
      title: 'Laboratory',
      description: 'Clinical and research laboratory equipment',
      count: '110+ items',
      color: 'cyan',
      equipments: []
    },
    {
      id: 7,
      icon: Droplet,
      title: 'Dialysis',
      description: 'Renal care and treatment systems',
      count: '35+ items',
      color: 'teal',
      equipments: []
    },
    {
      id: 8,
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Eye care and vision testing equipment',
      count: '50+ items',
      color: 'indigo',
      equipments: []
    },
    {
      id: 9,
      icon: Baby,
      title: 'Neonatal Care',
      description: 'Specialized care for newborns',
      count: '40+ items',
      color: 'pink',
      equipments: []
    },
    {
      id: 10,
      icon: Home,
      title: 'Home Healthcare',
      description: 'Medical equipment for home use',
      count: '75+ items',
      color: 'amber',
      equipments: []
    },
    {
      id: 11,
      icon: Scissors,
      title: 'Dental Equipment',
      description: 'Dental care and treatment systems',
      count: '65+ items',
      color: 'emerald',
      equipments: []
    },
    {
      id: 12,
      icon: HeartPulse,
      title: 'Cardiology',
      description: 'Cardiac care and diagnostic equipment',
      count: '55+ items',
      color: 'rose',
      equipments: []
    }
  ];

  const colorMap = {
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    green: 'bg-green-100 text-green-600 hover:bg-green-200',
    red: 'bg-red-100 text-red-600 hover:bg-red-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    cyan: 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200',
    teal: 'bg-teal-100 text-teal-600 hover:bg-teal-200',
    indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
    pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
    amber: 'bg-amber-100 text-amber-600 hover:bg-amber-200',
    emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200',
    rose: 'bg-rose-100 text-rose-600 hover:bg-rose-200'
  };

  const toggleCategory = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="products" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Medical Equipment Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our extensive catalog of medical equipment. Click on any category to view available products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className={`w-full text-left p-6 flex justify-between items-center ${colorMap[category.color as keyof typeof colorMap]}`}
              >
                <div className="flex items-center">
                  <category.icon className="h-6 w-6 mr-3" />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              
              {expandedCategory === category.id && (
                <div className="p-6 border-t border-gray-100">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  {category.equipments.length > 0 ? (
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">Available Equipment:</h4>
                      <div className="space-y-4">
                        {category.equipments.map((equipment) => (
                          <div key={equipment.id} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0">
                              <img 
                                src={equipment.image} 
                                alt={equipment.name}
                                className="h-16 w-16 object-cover rounded-md"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://via.placeholder.com/80?text=Image+Not+Available';
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{equipment.name}</p>
                              <p className="text-sm text-gray-500">{equipment.description}</p>
                              <div className="mt-1 flex items-center">
                                <span className="text-sm font-medium text-gray-900">{equipment.price}</span>
                                {equipment.inStock ? (
                                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Out of Stock
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500 text-sm">No equipment listed yet. Check back soon!</p>
                    </div>
                  )}
                  
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                    <span>{category.count} available</span>
                    <button 
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle view all action
                      }}
                    >
                      View all
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
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
