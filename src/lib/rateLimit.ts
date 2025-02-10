import { NextResponse } from 'next/server'

interface RateLimitContext {
  limit: number
  windowMs: number
  headers?: boolean
}

const ipRequests: { [key: string]: number[] } = {}

export function rateLimit(context: RateLimitContext) {
  return (req: Request) => {
    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1'
    const now = Date.now()
    const windowStart = now - context.windowMs

    const requestTimestamps = ipRequests[ip] ?? []
    const requestsInWindow = requestTimestamps.filter((timestamp) => timestamp > windowStart)

    if (requestsInWindow.length >= context.limit) {
      const response = NextResponse.json(
        { error: 'Too many requests, please try again later.' },
        { status: 429 }
      )

      if (context.headers) {
        response.headers.set('X-RateLimit-Limit', context.limit.toString())
        response.headers.set('X-RateLimit-Remaining', '0')
        const resetTime = Math.ceil((windowStart + context.windowMs - now) / 1000)
        response.headers.set('X-RateLimit-Reset', resetTime.toString())
      }

      return response
    }

    ipRequests[ip] = [...requestsInWindow, now]

    return null
  }
}

