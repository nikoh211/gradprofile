'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, Clock, Info } from 'lucide-react'

export function GermanUniversityDeadlines() {
  const germanUniversities = [
    {
      name: "Technical University of Munich (TUM)",
      winterDeadline: "January 15th (for Winter Semester)",
      summerDeadline: "July 15th (for Summer Semester)",
      programs: "Computer Science, Engineering, Natural Sciences",
      ranking: "#1 in Germany",
      info: "Most programs are in English"
    },
    {
      name: "Ludwig Maximilian University Munich",
      winterDeadline: "January 15th (for Winter Semester)",
      summerDeadline: "July 15th (for Summer Semester)",
      programs: "Various disciplines including Natural Sciences",
      ranking: "#2 in Germany",
      info: "Some programs require German proficiency"
    },
    {
      name: "Heidelberg University",
      winterDeadline: "December 15th (for Winter Semester)",
      summerDeadline: "June 15th (for Summer Semester)",
      programs: "Medicine, Sciences, Humanities",
      ranking: "#3 in Germany",
      info: "Germany's oldest university"
    },
    {
      name: "Humboldt University of Berlin",
      winterDeadline: "January 15th (for Winter Semester)",
      summerDeadline: "July 15th (for Summer Semester)",
      programs: "Arts & Humanities, Social Sciences",
      ranking: "#4 in Germany",
      info: "Located in Berlin's historic center"
    },
    {
      name: "RWTH Aachen University",
      winterDeadline: "March 1st (for Winter Semester)",
      summerDeadline: "September 1st (for Summer Semester)",
      programs: "Engineering, Technology, Natural Sciences",
      ranking: "#5 in Germany",
      info: "Known for engineering excellence"
    },
    {
      name: "Technical University of Berlin",
      winterDeadline: "April 1st (for Winter Semester)",
      summerDeadline: "October 1st (for Summer Semester)",
      programs: "Engineering, Computer Science, Planning Sciences",
      ranking: "#6 in Germany",
      info: "Strong industry connections"
    },
    {
      name: "University of Freiburg",
      winterDeadline: "January 15th (for Winter Semester)",
      summerDeadline: "July 15th (for Summer Semester)",
      programs: "Medicine, Natural Sciences, Humanities",
      ranking: "#7 in Germany",
      info: "Beautiful historic campus"
    },
    {
      name: "Free University of Berlin",
      winterDeadline: "January 15th (for Winter Semester)",
      summerDeadline: "July 15th (for Summer Semester)",
      programs: "Humanities, Social Sciences, Natural Sciences",
      ranking: "#8 in Germany",
      info: "International research hub"
    },
    {
      name: "University of Göttingen",
      winterDeadline: "January 15th (for Winter Semester)",
      summerDeadline: "July 15th (for Summer Semester)",
      programs: "Natural Sciences, Humanities",
      ranking: "#9 in Germany",
      info: "40+ Nobel Prize laureates"
    },
    {
      name: "University of Hamburg",
      winterDeadline: "January 15th (for Winter Semester)",
      summerDeadline: "July 15th (for Summer Semester)",
      programs: "Economics, Law, Medicine",
      ranking: "#10 in Germany",
      info: "Largest research uni in northern Germany"
    }
  ]

  return (
    <div className="w-full space-y-6">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-indigo-800">
          Top German Universities Application Deadlines
        </CardTitle>
      </CardHeader>
      <div className="grid grid-cols-1 gap-4">
        {germanUniversities.map((uni, index) => (
          <motion.div
            key={uni.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-indigo-700 mb-2">{uni.name}</h3>
                      <Badge variant="secondary" className="mb-2">{uni.ranking}</Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      <div>
                        <p className="text-sm font-medium">Winter Semester</p>
                        <p className="text-sm text-gray-600">{uni.winterDeadline}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      <div>
                        <p className="text-sm font-medium">Summer Semester</p>
                        <p className="text-sm text-gray-600">{uni.summerDeadline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-5 h-5 text-indigo-600 mt-1" />
                    <p className="text-sm text-gray-600">{uni.programs}</p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Info className="w-5 h-5 text-indigo-600 mt-1" />
                    <p className="text-sm text-gray-600">{uni.info}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 