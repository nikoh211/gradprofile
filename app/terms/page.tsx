import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Terms and Conditions</h1>
          <div className="prose max-w-none">
            <p className="mb-4">Welcome to MastersGuide. By using our service, you agree to comply with and be bound by the following terms and conditions:</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing or using MastersGuide, you agree to these Terms and Conditions and all applicable laws and regulations.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">2. Use of Service</h2>
            <p className="mb-4">You may use MastersGuide for your personal, non-commercial use only. You must not use MastersGuide for any illegal or unauthorized purpose.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">3. User Account</h2>
            <p className="mb-4">To access certain features of MastersGuide, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">4. Intellectual Property</h2>
            <p className="mb-4">The content, features, and functionality of MastersGuide are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">MastersGuide is provided on an "as is" and "as available" basis. We do not guarantee that the service will be uninterrupted, timely, secure, or error-free.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">6. Changes to Terms</h2>
            <p className="mb-4">We reserve the right to modify these Terms and Conditions at any time. Your continued use of MastersGuide after any such changes constitutes your acceptance of the new Terms and Conditions.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">7. Contact</h2>
            <p className="mb-4">If you have any questions about these Terms and Conditions, please contact us at queries@gradprofile.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

