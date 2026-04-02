import React from 'react';
import { ShieldCheck, Mail, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Face Verification API', href: '/#products' },
      { name: 'Income Analysis API', href: '/#products' },
      { name: 'PAN Verification', href: '/#products' },
      { name: 'Aadhaar Verification', href: '/#products' },
      { name: 'Pricing', href: '/#pricing' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '/contact' }
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Invoices', href: '/invoices' },
      { name: 'Status Page', href: '#' },
      { name: 'Support', href: '/contact' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Compliance', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FinDev</span>
            </Link>
            
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Enterprise-grade financial verification APIs trusted by thousands of businesses worldwide. Secure, fast, and reliable identity and income verification solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800 grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-500 mb-1">Email</div>
              <a href="mailto:support@findev.com" className="text-white hover:text-blue-400 transition-colors duration-200">
                support@findev.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-500 mb-1">Address</div>
              <p className="text-white">
                Bangalore, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 FinDev. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
