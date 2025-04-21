'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from 'lucide-react'

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="mt-16 mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">How to Use AI Coach</h2>
      <Card className="max-w-sm md:max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl text-indigo-700">Watch Our Tutorial</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cursorful-video-lbk0BzqQRfv1gSEDimw5wjFd0Hd4NO.mp4"
              poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qq5X4KoewQl7YkiZeIEN15UVniF9aC.png"
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <button
                  onClick={(e) => {
                    const video = e.currentTarget.parentElement?.previousElementSibling as HTMLVideoElement
                    video?.play()
                  }}
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 text-indigo-600" />
                </button>
              </div>
            )}
          </div>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 text-center">
            Learn how to make the most of our AI-powered tools and get personalized recommendations for your graduate school journey.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

