'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from 'lucide-react'

export function SOPAlumniReview() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  if (!isSubscribed) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Premium Feature: SOP Review by Masters Alumni
          </CardTitle>
          <CardDescription>
            Get your Statement of Purpose reviewed by successful Masters graduates from top universities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Unlock expert feedback from alumni who have successfully navigated the admissions process.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Personalized feedback from Masters alumni</li>
            <li>Insights on structure, content, and presentation</li>
            <li>Suggestions for improvement based on successful SOPs</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsSubscribed(true)} className="w-full">
            Upgrade to Premium
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Submit Your SOP for Alumni Review</h3>
      <Textarea 
        placeholder="Paste your Statement of Purpose here..."
        rows={10}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
      />
      <Button className="w-full">Submit for Review</Button>
      <p className="text-sm text-gray-600">
        Our alumni reviewers typically respond within 3-5 business days. You'll receive an email notification when your review is ready.
      </p>
    </div>
  )
}

