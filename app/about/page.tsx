'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, Lightbulb, Target, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const [activeTab, setActiveTab] = useState("mission")

  const tabs = [
    {
      id: "mission",
      title: "Our Mission",
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />,
      iconLarge: <Target className="w-6 h-6" />,
      content: "At MastersGuide, our mission is to empower students worldwide in their pursuit of higher education. We strive to provide personalized, data-driven guidance to help you make informed decisions about your graduate school journey."
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
      iconLarge: <Lightbulb className="w-6 h-6" />,
      content: "We envision a future where every aspiring student has access to top-quality education guidance, breaking down barriers and opening doors to academic excellence and career success."
    },
    {
      id: "team",
      title: "Our Team",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      iconLarge: <Users className="w-6 h-6" />,
      content: "Behind MastersGuide is a diverse team of education experts, data scientists, and technologists. We combine our expertise to create innovative solutions that address the complex challenges of graduate school admissions."
    },
    {
      id: "impact",
      title: "Our Impact",
      icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />,
      iconLarge: <Rocket className="w-6 h-6" />,
      content: "Since our inception, we've helped thousands of students from over 50 countries secure admissions to their dream universities. Our AI-powered platform continues to evolve, providing increasingly accurate and personalized recommendations."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About MastersGuide
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                MastersGuide is a cutting-edge platform designed to simplify and enhance the graduate school application process. 
                By leveraging artificial intelligence and data analytics, we provide personalized recommendations and insights 
                to help you find and apply to the best-fit master's programs.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id}
                className="flex items-center justify-center gap-2 py-2 px-3 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm rounded-md transition-all text-sm sm:text-base"
              >
                {tab.icon}
                <span className="font-medium">{tab.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {tab.iconLarge}
                      {tab.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{tab.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div 
          className="text-center mt-12 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © 2024 AICoach. All rights reserved.
        </motion.div>
      </div>
    </div>
  )
}

