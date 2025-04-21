'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  name: string;
  university: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    university: "Indian Institute of Technology, Delhi",
    quote: "MastersGuide's Profile Strength Analyzer was a game-changer. It helped me identify and improve weak areas in my application!",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Rahul Patel",
    university: "Indian Institute of Science, Bangalore",
    quote: "The Acceptance Probability feature gave me realistic expectations and motivated me to work harder on my applications.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Ananya Reddy",
    university: "Jawaharlal Nehru University",
    quote: "Thanks to the SOP Reviewer, my statement of purpose went from good to great. I'm convinced it played a crucial role in my acceptance!",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Vikram Singh",
    university: "Birla Institute of Technology and Science, Pilani",
    quote: "The Financial Aid Assistance tool helped me discover scholarships I didn't even know existed. It made my dream school affordable!",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Neha Gupta",
    university: "National Institute of Technology, Trichy",
    quote: "The AI Interview Coach prepared me so well that I felt confident and relaxed during my actual interviews. Highly recommended!",
    image: "/placeholder.svg?height=100&width=100"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="mt-16 mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">What Our Users Say</h2>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto max-w-sm md:max-w-2xl">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-indigo-600">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].university}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-3 md:mb-4 text-base md:text-lg">"{testimonials[currentIndex].quote}"</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-100 transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md hover:bg-gray-100 transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
        </button>
      </div>
    </section>
  )
}

