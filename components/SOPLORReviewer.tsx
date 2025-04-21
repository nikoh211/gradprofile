'use client'

import { useState, useRef } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Upload, FileText } from 'lucide-react'

export function SOPLORReviewer() {
  const [text, setText] = useState('')
  const [feedback, setFeedback] = useState('')
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setIsLoading(true)
      setTimeout(() => {
        setText(`Content extracted from ${file.name}. This is a placeholder for the actual PDF content.`)
        setIsLoading(false)
      }, 2000)
    }
  }

  const handleReview = () => {
    setIsLoading(true)
    setTimeout(() => {
      setFeedback("Your document effectively highlights your academic achievements. Consider elaborating more on your research experience and future goals to make it more compelling. Also, try to connect your past experiences with your future aspirations more clearly.")
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          ref={fileInputRef}
          className="hidden"
        />
        <Button 
          onClick={() => fileInputRef.current?.click()} 
          className="w-full flex items-center justify-center gap-2 text-sm sm:text-base py-2 sm:py-3"
        >
          <Upload className="h-4 w-4" />
          <span>Upload PDF</span>
        </Button>
        <Button 
          onClick={() => setText('')} 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 text-sm sm:text-base py-2 sm:py-3"
        >
          <FileText className="h-4 w-4" />
          <span>Clear Text</span>
        </Button>
      </div>
      
      {fileName && (
        <p className="text-sm text-indigo-600 mt-2">
          Uploaded: {fileName}
        </p>
      )}
      
      <Textarea 
        placeholder="Paste your Statement of Purpose or Letter of Recommendation here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
      />
      
      <Button 
        onClick={handleReview} 
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base py-2 sm:py-3" 
        disabled={isLoading || !text}
      >
        {isLoading ? 'Processing...' : 'Get AI Review'}
      </Button>
      
      {feedback && (
        <Alert className="bg-indigo-50 border-indigo-200">
          <AlertTitle className="text-indigo-800 text-base sm:text-lg">AI Feedback</AlertTitle>
          <AlertDescription className="text-indigo-700 text-sm sm:text-base">{feedback}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

