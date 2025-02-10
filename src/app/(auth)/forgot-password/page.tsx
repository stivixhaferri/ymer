'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setMessage('If an account exists, a reset link has been sent to your email.')
      } else {
        const data = await res.json()
        setError(data.error || 'An error occurred')
      }
    } catch (error) {
      console.log(error)
      setError('An error occurred')
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-primary-foreground items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Forgot Your Password?</h1>
          <p className="text-lg text-white/80">
            Don&apos;t worry, it happens to the best of us. Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
        </div>
      </div>

      {/* Forgot password form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Forgot Password</CardTitle>
            <CardDescription>
              Enter your email address and we&apos;ll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {message && (
                <Alert>
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Send Reset Link
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground">
              Remember your password?{' '}
              <Button variant="link" className="p-0" asChild>
                <Link href="/login">
                  Sign in <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

