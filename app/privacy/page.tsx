import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="mb-4">At MastersGuide, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal information (name, email address)</li>
              <li>Academic information (GPA, test scores)</li>
              <li>Application preferences</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide personalized recommendations</li>
              <li>Improve our services</li>
              <li>Communicate with you about your account</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">3. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">4. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">5. Contact Us</h2>
            <p className="mb-4">For any privacy-related questions or concerns, please contact us at queries@gradprofile.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

