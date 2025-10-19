"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // TODO: Replace with your actual email service (Mailchimp, ConvertKit, etc.)
    // For now, we'll simulate the submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setEmail("")
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-500/20 bg-green-500/5">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Thanks for joining the movement!</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Check your email for confirmation and next steps.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-accent" />
          Join the Movement
        </CardTitle>
        <CardDescription>
          Get updates on the Pure Beachhead strategy and campaign progress
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "..." : "Join"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            We'll never spam you. Unsubscribe anytime.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}