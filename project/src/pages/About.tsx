import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Award, Globe, Target, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower farmers with premium agricultural products and expert knowledge for sustainable farming success.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Quality, sustainability, innovation, and farmer-first approach guide everything we do.'
    },
    {
      icon: Globe,
      title: 'Our Vision',
      description: 'To be the leading agricultural solutions provider, contributing to global food security and sustainable farming.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Farmers' },
    { number: '50+', label: 'Premium Products' },
    { number: '10+', label: 'Years Experience' },
    { number: '95%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-earth-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About AgriProducts
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are passionate about transforming agriculture through innovative products and sustainable solutions. 
              Our commitment to quality and farmer success drives everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern farming"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Empowering Farmers Since 2015
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize agriculture, AgriProducts has been at the forefront 
                of providing cutting-edge farming solutions. We understand the challenges farmers face and 
                work tirelessly to develop products that increase yield, reduce costs, and promote sustainable practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of agricultural experts, researchers, and passionate individuals work together to 
                source and develop the finest agricultural products. From premium seeds to organic fertilizers, 
                we ensure every product meets the highest standards of quality and effectiveness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="bg-primary-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-earth-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AgriProducts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to your farming success through quality products and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                All our products undergo rigorous quality testing to ensure optimal performance and results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-earth-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-earth-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our team of agricultural experts provides personalized guidance and support for your farming needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-accent-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="text-accent-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Solutions</h3>
              <p className="text-gray-600">
                We promote environmentally responsible farming practices with organic and eco-friendly products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};