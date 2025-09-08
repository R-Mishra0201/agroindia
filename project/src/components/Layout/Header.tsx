import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, PRODUCT_CATEGORIES } from '../../utils/constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-600 text-white p-2 rounded-full"
            >
              <Leaf size={24} />
            </motion.div>
            <span className="text-xl font-bold text-gray-900">AgriProducts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative">
                {link.name === 'Products' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                      <span>Products</span>
                      <ChevronDown size={16} />
                    </button>
                    
                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border py-2 min-w-48"
                        >
                          {PRODUCT_CATEGORIES.map((category) => (
                            <Link
                              key={category}
                              to={`/products?category=${category.toLowerCase()}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              {category}
                            </Link>
                          ))}
                          <Link
                            to="/products"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-t mt-2 pt-2"
                          >
                            View All Products
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-gray-700 hover:text-primary-600 transition-colors ${
                      location.pathname === link.href ? 'text-primary-600 font-medium' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white"
            >
              <nav className="py-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <div key={link.name}>
                    {link.name === 'Products' ? (
                      <div>
                        <button
                          onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:text-primary-600 transition-colors"
                        >
                          <span>Products</span>
                          <ChevronDown 
                            size={16} 
                            className={`transform transition-transform ${
                              isProductsDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isProductsDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50"
                            >
                              {PRODUCT_CATEGORIES.map((category) => (
                                <Link
                                  key={category}
                                  to={`/products?category=${category.toLowerCase()}`}
                                  onClick={closeMenu}
                                  className="block px-8 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                >
                                  {category}
                                </Link>
                              ))}
                              <Link
                                to="/products"
                                onClick={closeMenu}
                                className="block px-8 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors border-t mt-2 pt-2"
                              >
                                View All Products
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={closeMenu}
                        className={`block px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors ${
                          location.pathname === link.href ? 'text-primary-600 font-medium' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};