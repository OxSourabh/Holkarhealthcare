import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 8860702654</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>holkarhealthcare@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>North-East Division, Delhi</span>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">H</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Holkar Healthcare</h1>
                <p className="text-sm text-gray-600">Medical Equipment Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</a>
              <a href="#rentals" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Rentals</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* CTA Button */}
           <div className="hidden md:flex">
             <a
               href="https://wa.me/918860702654?text=Hello%2C%20Holkar%20Healthcare%20Kindly%20Share%20Your%20Catalogue%20with%20me%20along%20with%20product%20pricing%20quote"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
               aria-label="Get a quote via WhatsApp - Contact Holkar Healthcare for medical device catalog and pricing"
            >
             Get Quote
            </a>
          </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Home</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Products</a>
                <a href="#rentals" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Rentals</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Contact</a>
                <a href="https://wa.link/3z7vrg" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4 w-fit">
                 Get Quote
                </button>
              </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;