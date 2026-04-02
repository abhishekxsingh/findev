import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Eye, Download, Mail, MoreVertical } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { mockInvoices, formatCurrency, calculateInvoiceTotals } from '../data/invoiceConfig';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const InvoiceList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'overdue':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const filteredInvoices = mockInvoices.filter(invoice => {
    const matchesSearch = 
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Invoices</h1>
            <p className="text-lg text-gray-600">Manage and track all your invoices</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-gray-600 mb-1">Total Invoices</div>
                <div className="text-3xl font-bold text-gray-900">{mockInvoices.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-gray-600 mb-1">Paid</div>
                <div className="text-3xl font-bold text-green-600">
                  {mockInvoices.filter(inv => inv.status === 'paid').length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-gray-600 mb-1">Pending</div>
                <div className="text-3xl font-bold text-yellow-600">
                  {mockInvoices.filter(inv => inv.status === 'pending').length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-gray-600 mb-1">Overdue</div>
                <div className="text-3xl font-bold text-red-600">
                  {mockInvoices.filter(inv => inv.status === 'overdue').length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Bar */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex-1 w-full md:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search invoices..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3 w-full md:w-auto">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="overdue">Overdue</option>
                  </select>
                  
                  <Button 
                    onClick={() => navigate('/invoices/create')}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    New Invoice
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoices Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Invoice #</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Customer</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Date</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Due Date</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Amount</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((invoice) => {
                      const totals = calculateInvoiceTotals(invoice.items);
                      return (
                        <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                          <td className="py-4 px-4">
                            <span className="font-mono text-sm font-medium text-gray-900">
                              {invoice.invoiceNumber}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-sm font-medium text-gray-900">{invoice.customer.name}</div>
                            <div className="text-xs text-gray-500">{invoice.customer.gstin}</div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-700">{invoice.date}</td>
                          <td className="py-4 px-4 text-sm text-gray-700">{invoice.dueDate}</td>
                          <td className="py-4 px-4">
                            <span className="text-sm font-semibold text-gray-900">
                              {formatCurrency(totals.total)}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={`${getStatusColor(invoice.status)} border`}>
                              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex justify-end gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => navigate(`/invoices/${invoice.id}`)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button size="sm" variant="ghost">
                                    <MoreVertical className="w-4 h-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Download className="w-4 h-4 mr-2" />
                                    Download PDF
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send Email
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                
                {filteredInvoices.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No invoices found</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};
