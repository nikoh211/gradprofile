"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  const router = useRouter()

  // Check for payment success in URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const status = urlParams.get("payment_status")

    if (status === "success") {
      // Redirect to the form after successful payment
      router.push("/payment-success")
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-md mx-auto">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Pay ₹799</CardTitle>
            <CardDescription className="text-center">
              Scan the QR code using any UPI app to complete your payment
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QrCode-0wz8FdLzH6AtRDjxFEb9SSgld8bQX8.jpeg"
                alt="UPI QR Code"
                className="w-full max-w-[300px]"
              />
            </div>

            <div className="text-sm text-gray-600 text-center mb-6">
              After completing the payment, click the button below
            </div>

            <Button
              onClick={() => router.push("/payment-success")}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              I've Completed the Payment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

