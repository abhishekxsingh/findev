import React, { useState } from 'react';
import { ScanFace, TrendingUp, CreditCard, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { products, mockVerificationResponse } from '../data/mock';

const iconMap = {
  ScanFace,
  TrendingUp,
  CreditCard,
  ShieldCheck
};

export const ProductsSection = () => {
  const [activeDemo, setActiveDemo] = useState(null);

  const handleTryDemo = (productId) => {
    setActiveDemo(productId);
    setTimeout(() => {
      setActiveDemo(null);
    }, 3000);
  };

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Our Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Complete Verification Suite
          </h2>
          <p className="text-xl text-gray-600">
            Powerful APIs designed to streamline your identity verification workflow
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = iconMap[product.icon];
            const isActive = activeDemo === product.id;

            return (
              <Card 
                key={product.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-2 ${
                  isActive ? 'border-blue-500 shadow-2xl scale-105' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <CardHeader className={`bg-gradient-to-br ${product.color} pb-8`}>
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-7 h-7 ${product.accentColor}`} />
                    </div>
                    {isActive && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-100 border border-green-300 rounded-full animate-in fade-in slide-in-from-top">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-green-700">Processing...</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mt-4">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6 space-y-6">
                  {/* Features List */}
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}>
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Demo Result (when active) */}
                  {isActive && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in slide-in-from-bottom">
                      <div className="text-sm font-medium text-green-800 mb-2">Verification Result:</div>
                      <div className="text-xs text-green-700 font-mono">
                        {JSON.stringify(
                          mockVerificationResponse[
                            product.id === 'face-api' ? 'faceApi' :
                            product.id === 'income-analysis' ? 'incomeAnalysis' :
                            product.id === 'pan-verification' ? 'panVerification' :
                            'aadhaarVerification'
                          ],
                          null,
                          2
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => handleTryDemo(product.id)}
                      disabled={isActive}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white group/btn"
                    >
                      {isActive ? 'Processing...' : 'Try Demo'}
                      {!isActive && <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />}
                    </Button>
                    <Button variant="outline" className="border-2 hover:bg-gray-50">
                      View Docs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};
