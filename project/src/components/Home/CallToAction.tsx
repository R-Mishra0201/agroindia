import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Users } from 'lucide-react';
import { Button } from '../UI/Button';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const CallToAction: React.FC = () => {
  const { sendGeneralMessage } = useWhatsApp();

  const handleBulkOrderClick = () => {
    sendGeneralMessage('Hello! I am interested in placing a bulk order for agricultural products. Please provide more details about pricing and minimum quantities.');
  };

  const handleConsultationClick = () => {
    sendGeneralMessage('Hello! I would like to schedule a consultation to discuss my farming requirements and get product recommendations.');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-earth-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join thousands of successful farmers who trust our products. Get expert advice and premium agricultural solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Consultation</h3>
              <p className="text-primary-100 text-sm">
                Get personalized advice from our agricultural experts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Bulk Orders</h3>
              <p className="text-primary-100 text-sm">
                Special pricing and support for large quantity orders
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-primary-100 text-sm">
                Get instant responses via WhatsApp for all your queries
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={handleConsultationClick}
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Free Consultation
            </Button>
            <Button
              size="lg"
              onClick={handleBulkOrderClick}
              className="bg-white text-primary-600 hover:bg-primary-50"
            >
              Bulk Orders
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};