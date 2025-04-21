"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Check } from "lucide-react"
import { motion } from "framer-motion"

export function PremiumFeatures() {
  const router = useRouter()

  return (
    <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Lock className="w-6 h-6 mr-3" />
          </motion.div>
          Unlock Premium Features
        </CardTitle>
        <CardDescription className="text-indigo-100">
          Get access to exclusive tools and personalized guidance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {[
            "Personalized SOP Review by Masters Alumni",
            "Advanced University Matching Algorithm",
            "One-on-One Consultation with Admissions Expert",
            "Exclusive Webinars and Workshops"
          ].map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <Check className="w-5 h-5 mr-3 text-green-300" />
              <span className="text-indigo-50">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-center bg-indigo-600/30 rounded-b-lg p-6">
        <motion.p 
          className="text-3xl font-bold mb-4"
          whileHover={{ scale: 1.1 }}
        >
          ₹799 <span className="text-sm font-normal text-indigo-200">/ month</span>
        </motion.p>
        <Button
          onClick={() => router.push("/payment")}
          className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg
                    shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Get Started Now
        </Button>
      </CardFooter>
    </Card>
  )
}

