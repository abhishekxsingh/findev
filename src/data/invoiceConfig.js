// Company and Invoice Configuration

export const companyInfo = {
  name: 'FinDev Technologies Private Limited',
  address: '2nd Floor, Tech Park, Sector 48, Gurugram, Haryana 122018 India',
  gstin: 'GSTIN 06AABCF1234D1Z5',
  pan: 'AABCF1234D',
  cin: 'U72900HR2020PTC089456',
  msmeType: 'SMALL',
  udyam: 'UDYAM-HR-06-0012345',
  email: 'support@findev.com',
  phone: '+91 9876543210',
  bankDetails: {
    beneficiaryName: 'FinDev Technologies Private Limited',
    accountNumber: '123456789012',
    ifscCode: 'HDFC0001234',
    bankName: 'HDFC Bank',
    branch: 'Gurugram Sector 48'
  }
};

export const invoiceConfig = {
  sacCode: '998314',
  sacDescription: 'Information technology software services',
  tdsRate: 2,
  tdsSection: '194J',
  gstRate: 18,
  paymentTerms: 'Net 15 days',
  currency: '₹',
  currencyWord: 'Indian Rupee'
};

export const services = [
  {
    id: 'starter-plan',
    name: 'Starter Plan - Monthly Subscription',
    description: 'Access to all verification APIs - 10,000 calls/month',
    sacCode: '998314',
    rate: 4999,
    unit: 'month'
  },
  {
    id: 'professional-plan',
    name: 'Professional Plan - Monthly Subscription',
    description: 'Access to all verification APIs - 50,000 calls/month',
    sacCode: '998314',
    rate: 14999,
    unit: 'month'
  },
  {
    id: 'enterprise-plan',
    name: 'Enterprise Plan - Custom',
    description: 'Unlimited API calls with dedicated support',
    sacCode: '998314',
    rate: 49999,
    unit: 'month'
  },
  {
    id: 'face-verification',
    name: 'Face Verification API - Pay per use',
    description: 'Real-time face matching and liveness detection',
    sacCode: '998314',
    rate: 10,
    unit: 'call'
  },
  {
    id: 'income-analysis',
    name: 'Income Analysis API - Pay per use',
    description: 'Bank statement parsing and income verification',
    sacCode: '998314',
    rate: 25,
    unit: 'call'
  },
  {
    id: 'pan-verification',
    name: 'PAN Verification API - Pay per use',
    description: 'Instant PAN card validation',
    sacCode: '998314',
    rate: 5,
    unit: 'call'
  },
  {
    id: 'aadhaar-verification',
    name: 'Aadhaar Verification API - Pay per use',
    description: 'Secure Aadhaar validation with OTP',
    sacCode: '998314',
    rate: 8,
    unit: 'call'
  }
];

// Mock invoices data
export const mockInvoices = [
  {
    id: 'INV-2024-001',
    invoiceNumber: 'FDT/24-25/001',
    date: '2024-12-15',
    dueDate: '2024-12-30',
    status: 'paid',
    customer: {
      name: 'TechCorp Solutions Pvt Ltd',
      address: 'Plot 45, Cyber City, Gurugram, Haryana 122002 India',
      gstin: '06AABCT1234E1Z6',
      email: 'accounts@techcorp.com'
    },
    items: [
      {
        description: 'Professional Plan - Monthly Subscription',
        sacCode: '998314',
        quantity: 1,
        rate: 14999,
        unit: 'month'
      }
    ],
    placeOfSupply: 'Haryana (06)',
    notes: 'Thank you for your business!',
    salesPerson: 'Rahul Kumar'
  },
  {
    id: 'INV-2024-002',
    invoiceNumber: 'FDT/24-25/002',
    date: '2024-12-18',
    dueDate: '2025-01-02',
    status: 'pending',
    customer: {
      name: 'FinServe Analytics Ltd',
      address: '3rd Floor, Business Hub, Bangalore, Karnataka 560001 India',
      gstin: '29AABCF5678G1Z8',
      email: 'billing@finserve.com'
    },
    items: [
      {
        description: 'Enterprise Plan - Monthly Subscription',
        sacCode: '998314',
        quantity: 1,
        rate: 49999,
        unit: 'month'
      },
      {
        description: 'Custom Integration Setup',
        sacCode: '998314',
        quantity: 1,
        rate: 25000,
        unit: 'service'
      }
    ],
    placeOfSupply: 'Karnataka (29)',
    notes: 'Payment terms: Net 15 days',
    salesPerson: 'Priya Sharma'
  },
  {
    id: 'INV-2024-003',
    invoiceNumber: 'FDT/24-25/003',
    date: '2024-12-20',
    dueDate: '2025-01-04',
    status: 'overdue',
    customer: {
      name: 'Digital Verify Pvt Ltd',
      address: '5th Floor, Tower A, Mumbai, Maharashtra 400001 India',
      gstin: '27AABCD9876H1Z9',
      email: 'payments@digitalverify.com'
    },
    items: [
      {
        description: 'Starter Plan - Monthly Subscription',
        sacCode: '998314',
        quantity: 2,
        rate: 4999,
        unit: 'month'
      }
    ],
    placeOfSupply: 'Maharashtra (27)',
    notes: 'Please clear dues at earliest',
    salesPerson: 'Amit Patel'
  }
];

// Helper functions
export const calculateInvoiceTotals = (items) => {
  const subTotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  const gstAmount = (subTotal * invoiceConfig.gstRate) / 100;
  const total = subTotal + gstAmount;
  
  return {
    subTotal,
    gstAmount,
    total
  };
};

export const numberToWords = (num) => {
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

  const convertHundreds = (n) => {
    if (n === 0) return '';
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
    return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' ' + convertHundreds(n % 100) : '');
  };

  if (num === 0) return 'Zero';
  
  const crore = Math.floor(num / 10000000);
  const lakh = Math.floor((num % 10000000) / 100000);
  const thousand = Math.floor((num % 100000) / 1000);
  const hundred = num % 1000;

  let words = '';
  if (crore > 0) words += convertHundreds(crore) + ' Crore ';
  if (lakh > 0) words += convertHundreds(lakh) + ' Lakh ';
  if (thousand > 0) words += convertHundreds(thousand) + ' Thousand ';
  if (hundred > 0) words += convertHundreds(hundred);

  return words.trim();
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(amount);
};

export const generateInvoiceNumber = () => {
  const year = new Date().getFullYear();
  const nextYear = year + 1;
  const random = Math.floor(Math.random() * 9000) + 1000;
  return `FDT/${year.toString().slice(-2)}-${nextYear.toString().slice(-2)}/${random}`;
};
