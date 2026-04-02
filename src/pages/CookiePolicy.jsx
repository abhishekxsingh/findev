import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cookie, Settings, Info, CheckCircle } from 'lucide-react';

export const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Cookie className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">Last updated: December 20, 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                This Cookie Policy explains how FinDev Technologies Private Limited uses cookies and similar tracking technologies on our website and services.
              </p>
            </div>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
                  <p className="text-gray-700">
                    These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us improve how our website works.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                  <p className="text-gray-700">
                    These cookies allow our website to remember choices you make and provide enhanced, personalized features.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-700">
                    We use analytics cookies to understand how visitors interact with our website, helping us improve user experience and optimize our services.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Specific Cookies We Use</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Cookie Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Purpose</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700 font-mono">session_id</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Maintains user session</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Session</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700 font-mono">auth_token</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Authentication</td>
                      <td className="py-3 px-4 text-sm text-gray-700">30 days</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700 font-mono">analytics_id</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Usage analytics</td>
                      <td className="py-3 px-4 text-sm text-gray-700">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-700 font-mono">preferences</td>
                      <td className="py-3 px-4 text-sm text-gray-700">User preferences</td>
                      <td className="py-3 px-4 text-sm text-gray-700">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set their own cookies, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Google Analytics for website analytics</li>
                <li>Payment processors for secure transactions</li>
                <li>Customer support tools for chat functionality</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Delete all cookies</li>
                <li>Block all cookies</li>
                <li>Allow all cookies</li>
                <li>Block third-party cookies</li>
                <li>Clear cookies when you close your browser</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser-Specific Instructions</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">
                Please note that disabling certain cookies may affect the functionality of our website. Some features may not work properly if you choose to disable cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Please check this page periodically for updates.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>FinDev Technologies Private Limited</strong></p>
                <p className="text-gray-700">Email: privacy@findev.com</p>
                <p className="text-gray-700">Address: 2nd Floor, Tech Park, Sector 48, Gurugram, Haryana 122018 India</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
