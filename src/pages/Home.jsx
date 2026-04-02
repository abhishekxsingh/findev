import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductsSection } from '../components/ProductsSection';
import { HowItWorks } from '../components/HowItWorks';
import { Pricing } from '../components/Pricing';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};
