import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, Printer } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { toast } from 'sonner';
import {
  companyInfo,
  invoiceConfig,
  mockInvoices,
  calculateInvoiceTotals,
  numberToWords,
  formatCurrency
} from '../data/invoiceConfig';
import { downloadInvoiceAsPDF, sendInvoiceEmail } from '../utils/invoiceUtils';

export const InvoiceView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  
  const invoice = mockInvoices.find(inv => inv.id === id);
  
  if (!invoice) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 pb-16 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invoice Not Found</h1>
          <Button onClick={() => navigate('/invoices')}>Back to Invoices</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const totals = calculateInvoiceTotals(invoice.items);
  const amountInWords = numberToWords(Math.floor(totals.total));

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadInvoiceAsPDF(invoice.invoiceNumber);
      if (result.success) {
        toast.success('Invoice downloaded successfully!');
      } else {
        toast.error('Failed to download invoice: ' + result.error);
      }
    } catch (error) {
      toast.error('Error downloading invoice');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSendEmail = async () => {
    setIsSendingEmail(true);
    try {
      const emailData = {
        invoiceNumber: invoice.invoiceNumber,
        date: invoice.date,
        dueDate: invoice.dueDate,
        customer: invoice.customer,
        items: invoice.items,
        totals: totals,
        notes: invoice.notes || ''
      };

      const result = await sendInvoiceEmail(emailData);
      if (result.success) {
        toast.success(`Invoice emailed successfully to ${invoice.customer.email}`);
      } else {
        toast.error('Failed to send email: ' + result.error);
      }
    } catch (error) {
      toast.error('Error sending email');
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Action Buttons */}
          <div className="mb-6 flex justify-between items-center print:hidden">
            <Button variant="ghost" onClick={() => navigate('/invoices')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Invoices
            </Button>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={handleSendEmail}
                disabled={isSendingEmail}
              >
                <Mail className="w-4 h-4 mr-2" />
                {isSendingEmail ? 'Sending...' : 'Email'}
              </Button>
              <Button 
                variant="outline"
                onClick={handleDownloadPDF}
                disabled={isDownloading}
              >
                <Download className="w-4 h-4 mr-2" />
                {isDownloading ? 'Generating...' : 'Download PDF'}
              </Button>
              <Button 
                variant="outline"
                onClick={handlePrint}
              >
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
            </div>
          </div>

          {/* Invoice Card */}
          <Card className="p-12 bg-white shadow-lg" id="invoice-content">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-12">
              {/* Company Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">FD</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{companyInfo.name}</div>
                </div>
                <p className="text-sm text-gray-600 max-w-xs">{companyInfo.address}</p>
                <p className="text-sm text-gray-700 font-medium">{companyInfo.gstin}</p>
                <p className="text-sm text-gray-600">MSME/UDYAM TYPE: {companyInfo.msmeType}</p>
                <p className="text-sm text-gray-600">{companyInfo.udyam}</p>
              </div>

              {/* Invoice Details */}
              <div className="text-right space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">INVOICE</h1>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-600">Inv No.:</span>
                    <span className="font-mono font-semibold text-gray-900">{invoice.invoiceNumber}</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium text-gray-900">{invoice.date}</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-medium text-gray-900">{invoice.dueDate}</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-600">Place Of Supply:</span>
                    <span className="font-medium text-gray-900">{invoice.placeOfSupply}</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-600">Sales person:</span>
                    <span className="font-medium text-gray-900">{invoice.salesPerson}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Bill To:</h3>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">{invoice.customer.name}</p>
                  <p className="text-sm text-gray-600">{invoice.customer.address}</p>
                  <p className="text-sm font-medium text-gray-700">{invoice.customer.gstin}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Ship To:</h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{invoice.customer.address}</p>
                  <p className="text-sm font-medium text-gray-700">{invoice.customer.gstin}</p>
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-8">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-300">#</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-300">Item & Description</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-300">HSN/SAC</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-300">Qty</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-300">Rate</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-300">IGST %</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-300">IGST Amt</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item, index) => {
                    const itemTotal = item.quantity * item.rate;
                    const itemGst = (itemTotal * invoiceConfig.gstRate) / 100;
                    return (
                      <tr key={index} className="border-t border-gray-300">
                        <td className="py-3 px-4 text-sm text-gray-700 border-r border-gray-300">{index + 1}</td>
                        <td className="py-3 px-4 border-r border-gray-300">
                          <div className="font-medium text-gray-900">{item.description}</div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 border-r border-gray-300">{item.sacCode}</td>
                        <td className="py-3 px-4 text-sm text-gray-700 text-right border-r border-gray-300">
                          {item.quantity.toFixed(2)}
                          <div className="text-xs text-gray-500">{item.unit}</div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 text-right border-r border-gray-300">
                          {item.rate.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 text-right border-r border-gray-300">
                          {invoiceConfig.gstRate}%
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 text-right border-r border-gray-300">
                          {itemGst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 text-right">
                          {itemTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Totals Section */}
            <div className="flex justify-end mb-8">
              <div className="w-96 space-y-2">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Sub Total:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {totals.subTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">IGST {invoiceConfig.gstRate}%:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {totals.gstAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between py-3 bg-blue-50 px-4 rounded">
                  <span className="text-base font-bold text-gray-900">Total:</span>
                  <span className="text-base font-bold text-blue-600">
                    {formatCurrency(totals.total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Amount in Words */}
            <div className="mb-8 p-4 bg-gray-50 rounded">
              <span className="text-sm font-semibold text-gray-700">Total in words: </span>
              <span className="text-sm text-gray-900">{invoiceConfig.currencyWord} {amountInWords} Only</span>
            </div>

            {/* Notes */}
            <div className="mb-8 p-4 border border-gray-200 rounded">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Notes:</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Bank Transfer Details:</strong></p>
                <p>Beneficiary Name: {companyInfo.bankDetails.beneficiaryName}</p>
                <p>Account Number: {companyInfo.bankDetails.accountNumber}</p>
                <p>IFSC Code: {companyInfo.bankDetails.ifscCode}</p>
                <p>Bank: {companyInfo.bankDetails.bankName}, {companyInfo.bankDetails.branch}</p>
                {invoice.notes && (
                  <p className="mt-3 italic">{invoice.notes}</p>
                )}
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Terms & Conditions:</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Payment Terms:</strong> {invoiceConfig.paymentTerms}</p>
                <p><strong>CIN:</strong> {companyInfo.cin}</p>
                <p><strong>PAN:</strong> {companyInfo.pan}</p>
                <p><strong>SAC Code:</strong> {invoiceConfig.sacCode} ({invoiceConfig.sacDescription} - TDS @ {invoiceConfig.tdsRate}% u/s {invoiceConfig.tdsSection})</p>
              </div>
            </div>

            {/* Signature */}
            <div className="text-right mt-12">
              <div className="inline-block">
                <div className="mb-16 text-sm text-gray-600">For {companyInfo.name}</div>
                <div className="border-t border-gray-400 pt-2">
                  <span className="text-sm font-medium text-gray-700">Authorized Signature</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};
