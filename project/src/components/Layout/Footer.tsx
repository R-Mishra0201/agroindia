import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const Footer: React.FC = () => {
  const { sendGeneralMessage } = useWhatsApp();

  const handleWhatsAppClick = () => {
    sendGeneralMessage('Hello! I would like to know more about your services.');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-full">
                <Leaf size={24} />
              </div>
              <span className="text-xl font-bold">AgriProducts</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Premium agricultural solutions for modern farming. Quality products, expert advice, and exceptional service.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </motion.button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=seeds" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Seeds
                </Link>
              </li>
              <li>
                <Link to="/products?category=fertilizers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link to="/products?category=equipment" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/products?category=organic-products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Organic Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-400" />
                <span className="text-gray-400 text-sm">info@agriproducts.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-400" />
                <span className="text-gray-400 text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  123 Agricultural Hub<br />
                  Green Valley, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AgriProducts. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};