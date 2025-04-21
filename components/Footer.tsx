import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/terms" className="text-sm text-gray-600 hover:text-indigo-600">Terms of Service</Link>
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-indigo-600">Privacy Policy</Link>
          <Link href="/refund" className="text-sm text-gray-600 hover:text-indigo-600">Refund Policy</Link>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-indigo-600">Contact Us</Link>
        </div>
        <p className="text-center text-sm text-gray-600">
          © 2024 AI Coach. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

