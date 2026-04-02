import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: December 20, 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                At FinDev Technologies Private Limited, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services.
              </p>
            </div>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Name, email address, and contact information</li>
                <li>Company name and business details</li>
                <li>Payment and billing information</li>
                <li>API keys and authentication credentials</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Usage Data</h3>
              <p className="text-gray-700 mb-4">We automatically collect certain information when you use our services:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>API usage metrics and logs</li>
                <li>IP addresses and device information</li>
                <li>Browser type and operating system</li>
                <li>Timestamps and usage patterns</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Providing and maintaining our verification API services</li>
                <li>Processing your transactions and billing</li>
                <li>Improving our services and developing new features</li>
                <li>Communicating with you about updates, offers, and support</li>
                <li>Detecting and preventing fraud or security issues</li>
                <li>Complying with legal obligations and enforcing our terms</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>SOC 2 Type II compliance</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular employee security training</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Rights</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your data</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. International Data Transfers</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to improve your experience. You can control cookies through your browser settings. For more details, see our <a href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may share data with trusted third-party service providers who assist us in operating our services, such as payment processors, cloud hosting providers, and analytics services. These parties are bound by confidentiality agreements and data protection obligations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. API logs and usage data are typically retained for 90 days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
