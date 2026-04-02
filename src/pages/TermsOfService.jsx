import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileText, AlertCircle, Scale, Ban, RefreshCw, Shield } from 'lucide-react';

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: December 20, 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Please read these Terms of Service ("Terms") carefully before using the FinDev API services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                By registering for, accessing, or using FinDev Technologies Private Limited's services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not use our services.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">FinDev provides API services for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Face verification and liveness detection</li>
                <li>Income analysis from bank statements</li>
                <li>PAN card verification</li>
                <li>Aadhaar verification and eKYC</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
              <p className="text-gray-700 mb-4">To use our services, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your API keys and credentials</li>
                <li>Be at least 18 years old or represent a legal entity</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. API Usage and Limitations</h2>
              <p className="text-gray-700 mb-4">When using our APIs, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Comply with all applicable laws and regulations</li>
                <li>Not exceed the rate limits specified in your plan</li>
                <li>Not attempt to circumvent usage limits or security measures</li>
                <li>Not use the services for illegal or fraudulent purposes</li>
                <li>Obtain necessary consents before processing personal data</li>
                <li>Implement appropriate data security measures</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Ban className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Uses</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">You may not use our services to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Transmit harmful, offensive, or illegal content</li>
                <li>Reverse engineer, decompile, or disassemble our services</li>
                <li>Interfere with or disrupt the integrity of our systems</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the services for competitive analysis or benchmarking</li>
                <li>Resell or redistribute our services without authorization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Pricing and Payment</h2>
              <p className="text-gray-700 mb-4">
                You agree to pay all fees according to the pricing plan you selected. All fees are non-refundable unless otherwise specified. We reserve the right to change pricing with 30 days' notice. Failure to pay may result in service suspension or termination.
              </p>
              <p className="text-gray-700">
                Applicable taxes, including GST, will be added to your invoice as required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Protection and Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your use of our services is also governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>. You are responsible for complying with all applicable data protection laws when using our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All intellectual property rights in our services, including software, documentation, and trademarks, remain our exclusive property. We grant you a limited, non-exclusive, non-transferable license to use our services in accordance with these Terms.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitations</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                <strong>OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong> We do not guarantee uninterrupted or error-free service. To the maximum extent permitted by law, we disclaim all warranties, express or implied.
              </p>
              <p className="text-gray-700">
                We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold harmless FinDev Technologies Private Limited from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Either party may terminate these Terms at any time. We may suspend or terminate your access immediately if you violate these Terms. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your right to use the services immediately ceases</li>
                <li>You must cease all use of our APIs and delete any cached data</li>
                <li>Outstanding fees remain due and payable</li>
                <li>Provisions that should survive termination will continue to apply</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Material changes will be notified via email or through our platform. Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>FinDev Technologies Private Limited</strong></p>
                <p className="text-gray-700">Email: legal@findev.com</p>
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
