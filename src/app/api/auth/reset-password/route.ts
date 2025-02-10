import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken, hashPassword } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json()
    const payload = verifyToken(token)
    const user = await prisma.user.findUnique({ where: { id: payload.userId } })

    if (!user || user.resetPasswordToken !== token || user.resetPasswordExpires < new Date()) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    const hashedPassword = await hashPassword(password)
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    })

    return NextResponse.json({ message: 'Password reset successfully' }, { status: 200 })
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

