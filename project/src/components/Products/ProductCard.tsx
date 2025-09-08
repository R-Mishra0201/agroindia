import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Tag } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  onInquire: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onInquire }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Tag size={12} />
            <span>{product.category}</span>
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{product.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onInquire(product)}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <MessageCircle size={16} />
          <span>Inquire Now</span>
        </motion.button>
      </div>
    </motion.div>
  );
};