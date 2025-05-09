'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'

export default function Login() {
  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?' + 
      'client_id=YOUR_GOOGLE_CLIENT_ID' +
      '&redirect_uri=' + encodeURIComponent('http://localhost:3000/api/auth/callback/google') +
      '&response_type=code' +
      '&scope=email profile' +
      '&prompt=select_account';
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-800">Sign in to MastersGuide</h1>
      <Button 
        onClick={handleGoogleLogin}
        className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </Button>
    </div>
  )
}

