'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Testimonials } from "@/components/Testimonials"
import { AIChatWidget } from "@/components/AIChatWidget"
import { ProfileStrengthAnalyzer } from "@/components/ProfileStrengthAnalyzer"
import { SOPLORReviewer } from "@/components/SOPLORReviewer"
import { AIInterviewCoach } from "@/components/AIInterviewCoach"
import { ApplicationTracker } from "@/components/ApplicationTracker"
import { PremiumFeatures } from "@/components/PremiumFeatures"
import { ArrowRight, Zap, PenTool, Video, ClipboardList, Star, Menu, BookOpen, GraduationCap } from 'lucide-react'
import { VideoDemo } from "@/components/VideoDemo"
import { LanguageTestInfo } from "@/components/LanguageTestInfo"
import { GermanUniversityDeadlines } from "@/components/GermanUniversityDeadlines"

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    { id: "profile", title: "Profile", icon: Zap, component: ProfileStrengthAnalyzer },
    { id: "reviewer", title: "SOP/LOR", icon: PenTool, component: SOPLORReviewer },
    { id: "interview", title: "Interview", icon: Video, component: AIInterviewCoach },
    { id: "tracker", title: "German Unis", icon: GraduationCap, component: GermanUniversityDeadlines },
    { id: "language", title: "IELTS/TOEFL", icon: BookOpen, component: LanguageTestInfo },
    { id: "premium", title: "Premium", icon: Star, component: PremiumFeatures },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-indigo-100">
        <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
          <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text hover:scale-105 transition-transform">
            AI Coach
          </Link>
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Login"].map((item) => (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-indigo-600 hover:scale-105 transition-all duration-300 font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4 text-indigo-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Master Your Graduate School Journey
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get personalized recommendations and insights for your master's program applications
          </motion.p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2" />
              AI-Powered
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse mr-2" />
              Real-time Analysis
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center w-full px-4"
          >
            <Button
              asChild
              className="w-full sm:w-auto bg-[#619BFF] hover:bg-[#4D7ECC] text-white px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl
                            font-bold rounded-full shadow-lg hover:shadow-xl 
                            transition-all duration-300 transform hover:scale-105
                            relative overflow-hidden group"
            >
              <Link href="/recommender">
                <span className="relative z-10 flex items-center justify-center">
                  <span>Start Your Evaluation</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-full absolute">
                    <div className="absolute -inset-2 bg-blue-500/20 blur-lg transform rotate-12 scale-110 animate-pulse" />
                  </div>
                </div>
              </Link>
            </Button>
          </motion.div>
        </section>

        <Card className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg mb-12">
          <CardContent className="p-4 sm:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex flex-wrap justify-center sm:justify-start w-full mb-6 bg-gray-100 p-1 rounded-lg">
                {features.map((feature) => (
                  <TabsTrigger 
                    key={feature.id} 
                    value={feature.id}
                    className="flex-1 sm:flex-none flex items-center gap-2 py-2 px-3 sm:py-3 sm:px-4 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm rounded-md transition-all text-sm sm:text-base"
                  >
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">{feature.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <div className="p-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4 sm:mb-6 flex items-center gap-2">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      {feature.title}
                    </h2>
                    <feature.component />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <Testimonials />
        <VideoDemo />
      </main>
      <AIChatWidget />
    </div>
  )
}

