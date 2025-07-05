import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { user, session, account, verification } from '@/db/schema';

export async function GET(request: NextRequest) {
  try {
    // Query all tables to see what data exists
    const users = await db.select().from(user);
    const sessions = await db.select().from(session);
    const accounts = await db.select().from(account);
    const verifications = await db.select().from(verification);

    return NextResponse.json({
      success: true,
      data: {
        users: users.length,
        sessions: sessions.length,
        accounts: accounts.length,
        verifications: verifications.length,
        userSample: users.slice(0, 2), // Show first 2 users (without sensitive data)
        sessionSample: sessions.slice(0, 2).map(s => ({
          id: s.id,
          userId: s.userId,
          expiresAt: s.expiresAt,
          ipAddress: s.ipAddress,
          userAgent: s.userAgent?.substring(0, 50) + '...'
        })),
        accountSample: accounts.slice(0, 2).map(a => ({
          id: a.id,
          providerId: a.providerId,
          userId: a.userId,
          createdAt: a.createdAt
        }))
      }
    });
  } catch (error) {
    console.error('Database check error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 