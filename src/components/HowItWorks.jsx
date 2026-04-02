import React from 'react';
import { KeyRound, Code2, Rocket } from 'lucide-react';
import { howItWorksSteps } from '../data/mock';

const iconMap = [KeyRound, Code2, Rocket];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600">
            Simple integration process with comprehensive documentation and support
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 -z-10"></div>

          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[index];
            
            return (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>

                {/* Card */}
                <div className="pt-16 pb-8 px-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Example */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800 overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-400 font-medium">Quick Integration Example</span>
            </div>
            
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400">
{`// Initialize FinDev Client
const findev = require('@findev/node-sdk');

const client = new findev.Client({
  apiKey: 'YOUR_API_KEY'
});

// Verify PAN Card
const result = await client.pan.verify({
  panNumber: 'ABCDE1234F',
  name: 'John Doe'
});

console.log(result);
// { success: true, status: 'verified', ... }`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
