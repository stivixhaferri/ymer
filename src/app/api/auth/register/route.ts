import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth'
import { rateLimit } from '@/lib/rateLimit'

const limiter = rateLimit({
  limit: 3,
  windowMs: 60 * 60 * 1000, // 1 hour
})

export async function POST(req: Request) {
  const rateLimitResult = await limiter(req);
  if (rateLimitResult) return rateLimitResult;

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    console.log(user)
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error.stack || error.message);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}


