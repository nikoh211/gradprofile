'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Target, CheckCircle } from 'lucide-react'

export function LanguageTestInfo() {
  const tests = {
    ielts: [
      { title: "Test Format", content: "Listening, Reading, Writing, and Speaking", icon: BookOpen },
      { title: "Test Duration", content: "2 hours 45 minutes", icon: Clock },
      { title: "Score Range", content: "0-9 bands", icon: Target },
      { title: "Validity", content: "2 years", icon: CheckCircle },
    ],
    toefl: [
      { title: "Test Format", content: "Reading, Listening, Speaking, and Writing", icon: BookOpen },
      { title: "Test Duration", content: "About 3 hours", icon: Clock },
      { title: "Score Range", content: "0-120 points", icon: Target },
      { title: "Validity", content: "2 years", icon: CheckCircle },
    ],
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-indigo-800">
          Language Test Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ielts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ielts">IELTS</TabsTrigger>
            <TabsTrigger value="toefl">TOEFL</TabsTrigger>
          </TabsList>
          
          {Object.entries(tests).map(([testName, details]) => (
            <TabsContent key={testName} value={testName}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {details.map((detail, index) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border border-indigo-100 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <detail.icon className="w-5 h-5 text-indigo-600" />
                          <div>
                            <h3 className="font-medium text-gray-800">{detail.title}</h3>
                            <p className="text-sm text-gray-600">{detail.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
} 