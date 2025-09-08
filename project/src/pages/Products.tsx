import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/Products/ProductCard';
import { Modal } from '../components/UI/Modal';
import { QueryForm } from '../components/Forms/QueryForm';
import { PRODUCTS, Product } from '../data/products';
import { PRODUCT_CATEGORIES } from '../utils/constants';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categoryParam = searchParams.get('category');
  const selectedCategory = categoryParam || 'all';

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(product => 
      product.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
    );
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleProductInquire = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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
            Our Product Range
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of premium agricultural products
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
            }`}
          >
            All Products
          </button>
          {PRODUCT_CATEGORIES.map((category) => {
            const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(categorySlug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === categorySlug
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} onInquire={handleProductInquire} />
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </motion.div>
        )}

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
    </div>
  );
};