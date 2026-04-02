// Mock data for verification API services

export const products = [
  {
    id: 'face-api',
    name: 'Face Verification API',
    description: 'Advanced facial recognition and liveness detection for secure identity verification',
    icon: 'ScanFace',
    features: [
      'Real-time face matching',
      'Liveness detection',
      '99.9% accuracy rate',
      'Anti-spoofing technology'
    ],
    color: 'from-blue-50 to-cyan-50',
    accentColor: 'text-blue-600'
  },
  {
    id: 'income-analysis',
    name: 'Income Analysis API',
    description: 'Comprehensive income verification and financial analysis from bank statements',
    icon: 'TrendingUp',
    features: [
      'Bank statement parsing',
      'Income pattern analysis',
      'Fraud detection',
      'Multi-format support'
    ],
    color: 'from-emerald-50 to-teal-50',
    accentColor: 'text-emerald-600'
  },
  {
    id: 'pan-verification',
    name: 'PAN Card Verification',
    description: 'Instant PAN card validation with government database integration',
    icon: 'CreditCard',
    features: [
      'Real-time verification',
      'OCR extraction',
      'Database validation',
      'Instant results'
    ],
    color: 'from-amber-50 to-orange-50',
    accentColor: 'text-amber-600'
  },
  {
    id: 'aadhaar-verification',
    name: 'Aadhaar Verification',
    description: 'Secure Aadhaar validation with OTP-based authentication',
    icon: 'ShieldCheck',
    features: [
      'OTP authentication',
      'eKYC integration',
      'Secure & compliant',
      'XML parsing'
    ],
    color: 'from-violet-50 to-purple-50',
    accentColor: 'text-violet-600'
  }
];

export const stats = [
  { label: 'API Calls/Month', value: '50M+' },
  { label: 'Accuracy Rate', value: '99.9%' },
  { label: 'Active Clients', value: '2,500+' },
  { label: 'Countries Served', value: '15+' }
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '₹4,999',
    period: '/month',
    description: 'Perfect for small businesses',
    features: [
      '10,000 API calls/month',
      'All verification APIs',
      'Email support',
      'Basic analytics',
      '99.5% uptime SLA'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '₹14,999',
    period: '/month',
    description: 'For growing enterprises',
    features: [
      '50,000 API calls/month',
      'All verification APIs',
      'Priority support',
      'Advanced analytics',
      '99.9% uptime SLA',
      'Custom webhooks'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited API calls',
      'All verification APIs',
      '24/7 dedicated support',
      'Custom integration',
      '99.99% uptime SLA',
      'On-premise deployment'
    ],
    highlighted: false
  }
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Sign Up & Get API Key',
    description: 'Create your account and receive instant access to your unique API credentials'
  },
  {
    step: '02',
    title: 'Integrate API',
    description: 'Simple integration with comprehensive documentation and SDK support'
  },
  {
    step: '03',
    title: 'Start Verifying',
    description: 'Begin processing verifications with real-time results and detailed reports'
  }
];

export const mockVerificationResponse = {
  faceApi: {
    success: true,
    match_score: 98.5,
    liveness_check: 'passed',
    confidence: 'high',
    processing_time: '1.2s'
  },
  incomeAnalysis: {
    success: true,
    average_monthly_income: '₹85,000',
    income_stability: 'stable',
    verification_status: 'verified',
    analysis_period: '6 months'
  },
  panVerification: {
    success: true,
    pan_number: 'ABCDE1234F',
    name: 'John Doe',
    status: 'active',
    verification_status: 'verified'
  },
  aadhaarVerification: {
    success: true,
    masked_aadhaar: 'XXXX-XXXX-5678',
    name: 'John Doe',
    verification_status: 'verified',
    kyc_status: 'completed'
  }
};
