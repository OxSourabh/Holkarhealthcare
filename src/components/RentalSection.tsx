import React from 'react';
import { Calendar, Shield, Truck, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const RentalSection = () => {
  const rentalEquipment = [
     {
      id: 1,
      name: 'Oxygen Concentrator',
      category: 'Critical Care',
      monthlyRate1: '₹5,000 - 5L',
      monthlyRate: '₹4,500 - 10L',
      image: 'https://i.ibb.co/DgGJStRT/51-Hg-SAHN3-IL-SL1500.png',
      features: ['Nitrogen-Filtering', 'Internal-Oxygen Production', 'Outlet Powered'],
      availability: 'Available'
    },
    {
      id:2,
      name: 'Manual Patient Bed',
      category: 'Patient Bed',
      monthlyRate: '₹1,500',
      image: 'https://i.ibb.co/yctLvfxm/Fowler-Hospital-Bed-Manual-adjustable-patient-bed.png',
      features: ['Backrest Elevation','Height Adjustment','Bed Mobility'],
      availability: 'Available'
    },

    {
      id: 12,
      name: 'Bi-Pap Machine',
      category: 'Critical Care',
      monthlyRate: '₹5,000',
      image: 'https://i.ibb.co/KjFgG6br/bmc-bipap-machine-500x500.png',
      features: ['Dual pressure settings', 'Non-invasive ventilation', 'Customizable therapy modes'],
      availability: 'Available'
    },
    {
      id: 13,
      name: 'Portable X-Ray Machine',
      category: 'Diagnostic',
      monthlyRate: '₹50,000',
      image: 'https://i.ibb.co/9XntJXL/woodpecker-rta-smart-ray-portable-dc-x-ray-machine-1000x1000.png',
      features: ['High resolution imaging', 'DICOM compatible', 'Portable design'],
      availability: 'Available'
    },
    {
      id: 14,
      name: 'Patient Monitor - 5 Parameter',
      category: 'Monitoring',
      monthlyRate: '₹5,000',
      image: 'https://i.ibb.co/bMgcg9j6/5-para-patient-monitor-12-months-replacement-warranty-120.png',
      features: ['ECG, SpO2, NIBP, Temp, Resp', 'Wireless connectivity', 'Alarm management'],
      availability: 'Available'
    },
    {
      id: 15,
      name: 'Ultrasound Scanner - 4D',
      category: 'Diagnostic',
      monthlyRate: '₹35,000',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Color Doppler', '4D imaging', 'Multiple probes'],
      availability: 'Limited'
    },
    {
      id: 16,
      name: 'Defibrillator - Biphasic',
      category: 'Emergency',
      monthlyRate: '₹22,000',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Manual & AED modes', 'ECG monitoring', 'Pediatric capability'],
      availability: 'Available'
    },
    {
      id: 17,
      name: 'Anesthesia Machine',
      category: 'Surgical',
      monthlyRate: '₹60,000',
      image: 'https://images.pexels.com/photos/4031321/pexels-photo-4031321.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Multi-gas monitoring', 'Ventilator integrated', 'Safety systems'],
      availability: 'Available'
    },
    {
      id: 18,
      name: 'Dialysis Machine',
      category: 'Nephrology',
      monthlyRate: '₹75,000',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Hemodialysis capable', 'Water treatment system', 'Safety monitoring'],
      availability: 'Available'
    },
    {
      id: 19,
      name: 'C-Arm X-Ray System',
      category: 'Surgical',
      monthlyRate: '₹90,000',
      image: 'https://images.pexels.com/photos/4031321/pexels-photo-4031321.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Mobile C-arm', 'Digital imaging', 'Fluoroscopy'],
      availability: 'Limited'
    },
    {
      id: 20,
      name: 'Infusion Pump - Multi-channel',
      category: 'Critical Care',
      monthlyRate: '₹10,000',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['4-channel delivery', 'Drug library', 'Wireless monitoring'],
      availability: 'Available'
    }
  ];

  const rentalTerms = [
    'Minimum rental period: 1 day',
    'Equipment vise advance payment required before equipment delivery',
    'Security deposit: A Fixed Amount which will be refundable',
    'Free installation and training included',
    'Technical support during rental period',
    'Maintenance and calibration included',
    'Insurance coverage available',
    'Renting Party Will be resposible for any kind of Damage',
    'Additional Mask & Gloves Should Be Purchased Seperately',
    'Flexible rental extensions available'
  ];

  return (
    <section id="rentals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Medical Equipment Rental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible rental solutions for hospitals, clinics, and healthcare facilities. 
            Get the equipment you need without the upfront investment.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Terms</h3>
            <p className="text-sm text-gray-600">Daily, weekly, or monthly rentals</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fully Insured</h3>
            <p className="text-sm text-gray-600">Complete coverage included</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Free Delivery</h3>
            <p className="text-sm text-gray-600">Installation & setup included</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">Technical assistance anytime</p>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rentalEquipment.map((equipment) => (
            <div key={equipment.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  For Rent
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                  equipment.availability === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {equipment.availability === 'Available' ? (
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3" />
                      <span>Available</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1">
                      <AlertCircle className="h-3 w-3" />
                      <span>Limited</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">{equipment.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{equipment.name}</h3>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {equipment.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Monthly Rent</span>
                    <span className="font-semibold text-blue-600 text-lg">{equipment.monthlyRate}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Request Rental Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Rental Terms & Conditions */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Rental Terms & Conditions</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                Important Payment Terms
              </h4>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-blue-800 font-semibold mb-2">
                  Fixed Amount Advance Payment Required
                </p>
                <p className="text-blue-700 text-sm">
                  All equipment rentals requires a fixed amount advance payment before delivery and installation. 
                  This ensures equipment availability and covers initial setup costs.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Rental Conditions</h4>
              <ul className="space-y-2">
                {rentalTerms.map((term, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Download Complete Rental Agreement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalSection;