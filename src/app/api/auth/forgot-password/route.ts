import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createToken } from '@/lib/auth'
import { sendEmail } from '@/lib/email'
import { rateLimit } from '@/lib/rateLimit'

const limiter = rateLimit({
  limit: 3,
  windowMs: 60 * 60 * 1000, // 1 hour
})

export async function POST(req: Request) {
  const rateLimitResult = await limiter(req)
  if (rateLimitResult) return rateLimitResult

  try {
    const { email } = await req.json()
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json({ message: 'If an account exists, a reset link has been sent.' }, { status: 200 })
    }

    const token = createToken({ userId: user.id })
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: token,
        resetPasswordExpires: new Date(Date.now() + 3600000), // 1 hour from now
      },
    })

    await sendEmail({
      to: user.email,
      subject: 'Reset your password',
      text: `Click this link to reset your password: ${resetLink}`,
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    })

    return NextResponse.json({ message: 'If an account exists, a reset link has been sent.' }, { status: 200 })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

