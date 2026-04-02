import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Target, Users, Zap, Award, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of verification technology to deliver cutting-edge solutions.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to helping you achieve your verification goals.',
      color: 'emerald'
    },
    {
      icon: Zap,
      title: 'Speed & Reliability',
      description: 'Lightning-fast API responses with 99.9% uptime guarantee for mission-critical applications.',
      color: 'amber'
    },
    {
      icon: Award,
      title: 'Security & Compliance',
      description: 'SOC 2 certified with enterprise-grade security measures and full regulatory compliance.',
      color: 'violet'
    }
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'CEO & Founder', image: null },
    { name: 'Priya Sharma', role: 'CTO', image: null },
    { name: 'Amit Patel', role: 'Head of Sales', image: null },
    { name: 'Sneha Reddy', role: 'Product Manager', image: null }
  ];

  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    amber: 'bg-amber-100 text-amber-600',
    violet: 'bg-violet-100 text-violet-600'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Building Trust Through
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Verified Identities
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            FinDev Technologies is on a mission to make identity verification seamless, secure, and accessible for businesses worldwide. We're empowering organizations to build trust and prevent fraud with our cutting-edge API solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50M+</div>
              <div className="text-gray-600">Verifications Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">2,500+</div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Founded in 2020, FinDev Technologies emerged from a simple observation: businesses were struggling with fragmented, unreliable, and expensive identity verification solutions. We saw an opportunity to build something better.
            </p>
            <p className="mb-4">
              Our founding team, with decades of combined experience in fintech, AI, and cybersecurity, set out to create a unified platform that would make verification easy, accurate, and affordable. What started as a small team in Gurugram has grown into a leading provider of verification APIs serving thousands of businesses across multiple countries.
            </p>
            <p>
              Today, we're proud to be trusted by enterprises, startups, and financial institutions who rely on our technology to verify millions of identities every month. But we're just getting started – our vision is to become the global standard for identity verification.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 ${colorMap[value.color]} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology & Compliance */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cutting-Edge Technology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>AI-powered verification algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Real-time processing infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Advanced anti-fraud detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Scalable cloud architecture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Certifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>SOC 2 Type II Certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>GDPR Compliant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>ISO 27001 Certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>PCI DSS Compliant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-xl mb-8 text-blue-50">
            Whether you're a startup or an enterprise, we're here to help you build trust through verified identities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
