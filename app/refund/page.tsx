import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Refund Policy</h1>
          <div className="prose max-w-none">
            <p className="mb-4">At MastersGuide, we strive to ensure your satisfaction with our services. This Refund Policy outlines our guidelines for refunds and returns.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">1. Refund Eligibility</h2>
            <p className="mb-4">You may be eligible for a refund if:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The request is made within 14 days of purchase</li>
              <li>The service has not been substantially utilized</li>
              <li>Technical issues prevented service delivery</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">2. Refund Process</h2>
            <p className="mb-4">To request a refund:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Contact us at queries@gradprofile.com</li>
              <li>Provide your order details and reason for refund</li>
              <li>Allow up to one week for processing</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">3. Processing Time</h2>
            <p className="mb-4">Refund processing typically takes one week from the date of approval. The time for the refund to appear in your account may vary depending on your payment method and financial institution.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">4. Non-Refundable Items</h2>
            <p className="mb-4">The following are non-refundable:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Completed consultations</li>
              <li>Customized reports</li>
              <li>Services used for more than 14 days</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">5. Contact</h2>
            <p className="mb-4">For any questions about our refund policy, please contact us at queries@gradprofile.com or visit us at:</p>
            <p className="mb-4">
              DLF TechPark Noida<br />
              Noida, Uttar Pradesh<br />
              India
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

