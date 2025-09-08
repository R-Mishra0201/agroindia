import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../Products/ProductCard';
import { Modal } from '../UI/Modal';
import { QueryForm } from '../Forms/QueryForm';
import { PRODUCTS, Product } from '../../data/products';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';

export const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show only first 6 products on home page
  const featuredProducts = useMemo(() => PRODUCTS.slice(0, 6), []);

  const handleProductInquire = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of agricultural products designed to maximize your farming success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} onInquire={handleProductInquire} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/products">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </Link>
        </motion.div>

        {/* Query Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProduct ? `Inquire about ${selectedProduct.name}` : 'Product Inquiry'}
        >
          <QueryForm
            initialCategory={selectedProduct?.category || ''}
            onClose={closeModal}
          />
        </Modal>
      </div>
    </section>
  );
};