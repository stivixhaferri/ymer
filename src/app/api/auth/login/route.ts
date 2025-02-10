import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword, createToken } from '@/lib/auth'
import { rateLimit } from '@/lib/rateLimit'

const limiter = rateLimit({
  limit: 5,
  windowMs: 60 * 1000, // 1 minute
})

export async function POST(req: Request) {
  const rateLimitResult = await limiter(req)
  if (rateLimitResult) return rateLimitResult

  try {
    const { email, password } = await req.json()
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 })
    }

    const isValid = await verifyPassword(password, user.password)

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 })
    }

    const token = createToken({ userId: user.id })

    const response = NextResponse.json({ message: 'Logged in successfully' }, { status: 200 })
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400, // 1 day
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

