import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadInvoiceAsPDF = async (invoiceNumber) => {
  try {
    // Get the invoice element
    const invoiceElement = document.getElementById('invoice-content');
    
    if (!invoiceElement) {
      throw new Error('Invoice element not found');
    }

    // Hide buttons and interactive elements before capturing
    const buttons = invoiceElement.querySelectorAll('button');
    buttons.forEach(btn => btn.style.display = 'none');

    // Capture the invoice as canvas
    const canvas = await html2canvas(invoiceElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // Show buttons again
    buttons.forEach(btn => btn.style.display = '');

    // Calculate PDF dimensions
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Save PDF
    pdf.save(`Invoice-${invoiceNumber}.pdf`);
    
    return { success: true };
  } catch (error) {
    console.error('Error generating PDF:', error);
    return { success: false, error: error.message };
  }
};

export const sendInvoiceEmail = async (invoiceData) => {
  try {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    
    const response = await fetch(`${BACKEND_URL}/api/invoices/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoiceData)
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send email');
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};
