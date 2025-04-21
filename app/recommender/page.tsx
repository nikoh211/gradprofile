'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const mockAIPrediction = (userData) => {
  const baseScore = Math.random() * 50 + 50;
  const gpaFactor = parseFloat(userData.gpa) * 10;
  const greFactor = parseInt(userData.greScore) / 10;
  const toeflFactor = parseInt(userData.toeflScore) / 2;

  return Math.min(100, Math.max(0, baseScore + gpaFactor + greFactor + toeflFactor));
};

const fetchUniversityData = async () => {
  return [
    { name: 'Harvard University', location: 'USA', deadline: '2024-01-15', requirements: { minGPA: 3.7, minGRE: 320, minTOEFL: 100 } },
    { name: 'Stanford University', location: 'USA', deadline: '2024-02-01', requirements: { minGPA: 3.6, minGRE: 315, minTOEFL: 100 } },
    { name: 'MIT', location: 'USA', deadline: '2024-03-01', requirements: { minGPA: 3.8, minGRE: 325, minTOEFL: 100 } },
    { name: 'University of California, Berkeley', location: 'USA', deadline: '2024-02-15', requirements: { minGPA: 3.5, minGRE: 310, minTOEFL: 90 } },
    { name: 'Columbia University', location: 'USA', deadline: '2024-01-30', requirements: { minGPA: 3.6, minGRE: 315, minTOEFL: 100 } },
  ];
};

export default function Recommender() {
  const [formData, setFormData] = useState({
    gpa: '',
    greScore: '',
    toeflScore: '',
    preferredLocation: '',
    preferredProgram: '',
  })
  const [recommendations, setRecommendations] = useState([])
  const [universities, setUniversities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadUniversityData = async () => {
      const data = await fetchUniversityData();
      setUniversities(data);
    };
    loadUniversityData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const filteredRecommendations = universities.filter(uni => {
      const { minGPA, minGRE, minTOEFL } = uni.requirements;
      const gpaMatch = parseFloat(formData.gpa) >= minGPA;
      const greMatch = parseInt(formData.greScore) >= minGRE;
      const toeflMatch = parseInt(formData.toeflScore) >= minTOEFL;
      const locationMatch = formData.preferredLocation.toLowerCase() === uni.location.toLowerCase();
      return gpaMatch && greMatch && toeflMatch && locationMatch;
    }).map(uni => ({
      ...uni,
      probability: mockAIPrediction(formData)
    }));

    setRecommendations(filteredRecommendations);
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="mr-2" /> Back to Home
      </Link>
      <motion.h1 
        className="text-3xl font-bold mb-6 text-center text-indigo-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI-Powered University Recommender
      </motion.h1>
      <motion.div 
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="gpa" className="text-indigo-700">GPA</Label>
            <Input
              type="number"
              id="gpa"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              step="0.01"
              min="0"
              max="4"
              required
              className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <Label htmlFor="greScore" className="text-indigo-700">GRE Score</Label>
            <Input
              type="number"
              id="greScore"
              name="greScore"
              value={formData.greScore}
              onChange={handleChange}
              min="260"
              max="340"
              required
              className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <Label htmlFor="toeflScore" className="text-indigo-700">TOEFL Score</Label>
            <Input
              type="number"
              id="toeflScore"
              name="toeflScore"
              value={formData.toeflScore}
              onChange={handleChange}
              min="0"
              max="120"
              required
              className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <Label htmlFor="preferredLocation" className="text-indigo-700">Preferred Location</Label>
            <Select name="preferredLocation" onValueChange={(value) => handleChange({ target: { name: 'preferredLocation', value }})}>
              <SelectTrigger className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-indigo-500">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="preferredProgram" className="text-indigo-700">Preferred Program</Label>
            <Select name="preferredProgram" onValueChange={(value) => handleChange({ target: { name: 'preferredProgram', value }})}>
              <SelectTrigger className="mt-1 transition-all duration-200 focus:ring-2 focus:ring-indigo-500">
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="computerScience">Computer Science</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="dataScience">Data Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            disabled={isLoading}
          >
            {isLoading ? 'Generating Recommendations...' : 'Get AI-Powered Recommendations'}
          </Button>
        </form>
      </motion.div>

      {recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-800">AI-Powered Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((uni, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-indigo-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="font-bold text-xl mb-2 text-indigo-700">{uni.name}</h3>
                <p className="text-gray-600">Location: {uni.location}</p>
                <p className="text-gray-600">Deadline: {uni.deadline}</p>
                <p className="text-lg font-semibold mt-2">
                  Admission Probability: 
                  <span 
                    className={`ml-2 ${
                      uni.probability > 80 ? 'text-green-600' : 
                      uni.probability > 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}
                  >
                    {uni.probability.toFixed(2)}%
                  </span>
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-indigo-700">Requirements:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Min GPA: {uni.requirements.minGPA}</li>
                    <li>Min GRE: {uni.requirements.minGRE}</li>
                    <li>Min TOEFL: {uni.requirements.minTOEFL}</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {recommendations.length === 0 && !isLoading && (
        <motion.p 
          className="mt-4 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No recommendations found based on your criteria. Try adjusting your preferences.
        </motion.p>
      )}
    </div>
  )
}

