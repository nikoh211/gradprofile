'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const questions = [
  "Tell me about yourself and why you're interested in this program.",
  "What are your research interests and how do they align with our faculty's work?",
  "Describe a challenging project you've worked on and how you overcame obstacles.",
  "Where do you see yourself in 5 years after completing this program?",
  "How do you plan to contribute to our university community?"
];

export function AIInterviewCoach() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleNextQuestion = () => {
    setFeedback("Good answer! Try to be more specific about your experiences and how they relate to the program.")
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswer('')
      setFeedback('')
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Question {currentQuestion + 1}:</h3>
        <p>{questions[currentQuestion]}</p>
      </div>
      <Textarea 
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={4}
      />
      <Button onClick={handleNextQuestion} className="w-full">Submit Answer</Button>
      {feedback && (
        <Alert>
          <AlertTitle>AI Feedback</AlertTitle>
          <AlertDescription>{feedback}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

