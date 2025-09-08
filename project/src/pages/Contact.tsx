import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { QueryForm } from '../components/Forms/QueryForm';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { Button } from '../components/UI/Button';

export const Contact: React.FC = () => {
  const { sendGeneralMessage } = useWhatsApp();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 12345 67890',
      subtitle: 'Mon-Sat, 9:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@agriproducts.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Agricultural Hub, Green Valley',
      subtitle: 'State 12345, India'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Saturday',
      subtitle: '9:00 AM - 6:00 PM IST'
    }
  ];

  const handleQuickWhatsApp = () => {
    sendGeneralMessage('Hello! I would like to get more information about your products and services.');
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products? We're here to help you find the perfect agricultural solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-full">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.details}</p>
                    <p className="text-gray-500 text-sm">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-green-50 p-6 rounded-xl border border-green-200"
            >
              <h3 className="font-semibold text-green-900 mb-3 flex items-center space-x-2">
                <MessageCircle size={20} />
                <span>Quick WhatsApp Contact</span>
              </h3>
              <p className="text-green-700 mb-4 text-sm">
                For immediate assistance, click below to start a WhatsApp conversation with our team.
              </p>
              <Button onClick={handleQuickWhatsApp} className="bg-green-600 hover:bg-green-700">
                <MessageCircle size={16} className="mr-2" />
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Query Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <QueryForm />
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
            <p className="text-gray-600 mb-6">
              Located in the heart of the agricultural district, we welcome farmers to visit our facility 
              and see our products firsthand.
            </p>
            <div className="bg-gray-100 rounded-lg p-12 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">AgriProducts Headquarters</h3>
                <p className="text-gray-600">123 Agricultural Hub, Green Valley, State 12345</p>
                <p className="text-sm text-gray-500 mt-2">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};