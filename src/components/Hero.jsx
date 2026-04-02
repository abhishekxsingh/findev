import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { stats } from '../data/mock';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700">Trusted by 2,500+ Businesses</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Verify Identities
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Instantly & Securely
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Enterprise-grade verification APIs for face recognition, income analysis, PAN, and Aadhaar validation. Build trust with seamless KYC integration.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">GDPR Compliant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl shadow-blue-500/30 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl backdrop-blur-sm border border-gray-200 shadow-2xl overflow-hidden">
              {/* Floating Cards Animation */}
              <div className="absolute top-8 left-8 right-8 space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-in fade-in slide-in-from-top" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Face Verification</div>
                      <div className="text-lg font-bold text-gray-900">98.5% Match</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-in fade-in slide-in-from-top" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">PAN Verified</div>
                      <div className="text-lg font-bold text-gray-900">ABCDE1234F</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-in fade-in slide-in-from-top" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Income Analysis</div>
                      <div className="text-lg font-bold text-gray-900">₹85,000/mo</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Processing Speed</span>
                    <span className="text-sm font-bold text-blue-600">{"<"} 2 seconds</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-pulse" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
