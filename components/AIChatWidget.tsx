'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      // Simulating AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "Thank you for your message. How can I assist you with your graduate school application process today?" 
        }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Button
              className="rounded-full w-12 h-12 md:w-14 md:h-14 shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 w-[calc(100%-2rem)] md:w-80 h-[60vh] md:h-96 shadow-lg"
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between bg-indigo-600 text-white p-2 md:p-4">
                <CardTitle className="text-base md:text-lg">AI Assistant</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200">
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col p-2 md:p-4">
                <ScrollArea className="flex-grow mb-2 md:mb-4 pr-2 md:pr-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                        {message.content}
                      </span>
                    </div>
                  ))}
                </ScrollArea>
                <div className="flex gap-2">
                  <Input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-grow text-sm md:text-base"
                  />
                  <Button onClick={handleSendMessage} className="bg-indigo-600 hover:bg-indigo-700 text-white p-2">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

