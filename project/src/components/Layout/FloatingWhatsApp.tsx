import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const FloatingWhatsApp: React.FC = () => {
  const { sendGeneralMessage } = useWhatsApp();

  const handleClick = () => {
    sendGeneralMessage('Hello! I would like to know more about your agricultural products.');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
      style={{ zIndex: 1000 }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <MessageCircle size={24} />
      </motion.div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </motion.button>
  );
};