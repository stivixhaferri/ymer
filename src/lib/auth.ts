import { compare, hash } from 'bcryptjs';
import { sign, JwtPayload } from 'jsonwebtoken';
import { jwtVerify} from 'jose';

export async function hashPassword(password: string): Promise<string> {
  try {
    const hashedPassword = await hash(password, 12); 
    return hashedPassword;
  } catch (error) {
    console.error("Password hashing error:", error);
    throw error;
  }
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await compare(password, hashedPassword);
}

export function createToken(payload: object): string {
  return sign(payload, process.env.JWT_SECRET!, { expiresIn: '1d' });
}

export async function verifyToken(token: string): Promise<string | JwtPayload> {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
    return payload;
  } catch (error) {
    console.error('Token verification error:', error);
    throw error;  
  }
}