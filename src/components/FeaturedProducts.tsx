import React from 'react';
import { Star, ShoppingCart, Calendar } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Digital X-Ray System',
      category: 'Diagnostic Equipment',
      price: '₹6,00,000',
      rentalPrice: '₹75,000/month',
      image: 'https://i.ibb.co/Q7GZT15P/digitl-x-ray-machine-2.webp" alt="digitl-x-ray-machine-2',
      rating: 4.8,
      features: ['High Resolution', 'Low Radiation', 'Digital Output']
    },
    {
      id: 2,
      name: 'Patient Monitor',
      category: 'Monitoring Equipment',
      price: '₹18,000',
      rentalPrice: '₹8,000/month',
      image: 'https://i.ibb.co/G4Vgw20m/5-para-patient-monitor-1000x1000-removebg-preview.png',
      rating: 4.9,
      features: ['Multi-Parameter', 'Wireless', 'Alarm System']
    },
    {
      id: 3,
      name: 'Ultrasound Scanner',
      category: 'Diagnostic Equipment',
      price: '₹12,00,000',
      rentalPrice: '₹20,000/month',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      features: ['Color Doppler', 'Portable Design', '3D/4D Imaging']
    },
    {
      id: 4,
      name: 'Ventilator - ICU Grade',
      category: 'Critical Care',
      price: '₹8,50,000',
      rentalPrice: '₹45,000/month',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      features: ['Multi-mode', 'Touch Screen', 'Battery Backup']
    },
    {
      id: 5,
      name: 'C-Arm X-Ray System',
      category: 'Surgical Equipment',
      price: '₹25,00,000',
      rentalPrice: '₹90,000/month',
      image: 'https://images.pexels.com/photos/4031321/pexels-photo-4031321.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      features: ['Mobile Design', 'Digital Imaging', 'Fluoroscopy']
    },
    {
      id: 6,
      name: 'Dialysis Machine',
      category: 'Nephrology',
      price: '₹18,00,000',
      rentalPrice: '₹75,000/month',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      features: ['Hemodialysis', 'Water Treatment', 'Safety Monitoring']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Medical Equipment
          </h2>
          <p className="text-xl text-gray-600">
            Top-quality equipment trusted by healthcare professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Purchase Price</span>
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Rental Price</span>
                    <span className="text-lg font-bold text-blue-600">{product.rentalPrice}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Rent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;