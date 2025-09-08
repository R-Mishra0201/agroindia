import React from 'react';
import { Hero } from '../components/Home/Hero';
import { ProductShowcase } from '../components/Home/ProductShowcase';
import { Testimonials } from '../components/Home/Testimonials';
import { CallToAction } from '../components/Home/CallToAction';

export const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ProductShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  );
};