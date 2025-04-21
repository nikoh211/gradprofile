import Link from 'next/link'
import { ArrowLeft, Mail, Clock, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={4} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here's how you can reach us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:aicoachgrad@gmail.com" className="text-sm text-gray-600 hover:text-indigo-600">
                      aicoachgrad@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-600">
                      DLF TechPark Noida<br />
                      Noida, Uttar Pradesh<br />
                      
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">What is your typical response time?</h3>
                <p className="text-sm text-gray-600">We strive to respond to all inquiries within 24-48 hours during business days.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">How can I get technical support?</h3>
                <p className="text-sm text-gray-600">For technical issues, please email us with "Technical Support" in the subject line for faster routing.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Do you offer urgent support?</h3>
                <p className="text-sm text-gray-600">While we handle all inquiries as quickly as possible, premium users receive priority support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

