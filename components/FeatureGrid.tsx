'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Brain, PenTool, PiggyBank, Video, ClipboardList, BarChart2, Star, BookOpen } from 'lucide-react'

const features = [
  { 
    id: "profile",
    title: "Profile",
    icon: Zap,
    href: "/profile-analyzer",
    description: "Analyze your academic profile strength"
  },
  {
    id: "acceptance",
    title: "Acceptance",
    icon: Brain,
    href: "/acceptance-probability",
    description: "Check your admission chances"
  },
  {
    id: "sop",
    title: "SOP/LOR",
    icon: PenTool,
    href: "/sop-lor-reviewer",
    description: "Get expert review on your documents"
  },
  {
    id: "financial",
    title: "Financial",
    icon: PiggyBank,
    href: "/financial-aid",
    description: "Explore funding opportunities"
  },
  {
    id: "interview",
    title: "Interview",
    icon: Video,
    href: "/interview-coach",
    description: "Practice with AI interview coach"
  },
  {
    id: "applications",
    title: "Applications",
    icon: ClipboardList,
    href: "/application-tracker",
    description: "Track your applications"
  },
  {
    id: "benchmarking",
    title: "Benchmarking",
    icon: BarChart2,
    href: "/profile-benchmarking",
    description: "Compare with accepted students"
  },
  {
    id: "premium",
    title: "Premium",
    icon: Star,
    href: "/premium-features",
    description: "Access exclusive features"
  },
  {
    id: "language",
    title: "IELTS/TOEFL",
    icon: BookOpen,
    href: "/language-tests",
    description: "Get information about language proficiency tests"
  }
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={feature.href}>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/50 backdrop-blur-sm border border-indigo-50 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

