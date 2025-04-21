'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'

const universities = [
  "Harvard University",
  "Stanford University",
  "MIT",
  "University of California, Berkeley",
  "Columbia University",
]

export default function WaitlistSignup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [university, setUniversity] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send this data to your backend
    // For now, we'll just simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // After successful submission, you might want to redirect or show a success message
    alert('Thank you for joining our waitlist!')
    setIsSubmitting(false)
    router.push('/')
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4 md:mb-6">
        <ArrowLeft className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Back to Home
      </Link>
      <Card className="max-w-sm md:max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-bold text-center text-indigo-800">Join Our Waitlist</CardTitle>
          <CardDescription className="text-center text-sm md:text-base">Be the first to know when we launch!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="university">Interested University Alumni</Label>
              <Select value={university} onValueChange={setUniversity} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a university" />
                </SelectTrigger>
                <SelectContent>
                  {universities.map((uni) => (
                    <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-base py-2 md:py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-xs md:text-sm text-gray-600">
          By joining, you agree to our Terms of Service and Privacy Policy.
        </CardFooter>
      </Card>
    </div>
  )
}

