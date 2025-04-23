import { NextResponse } from 'next/server'
import * as crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const SALT = process.env.PASSWORD_SALT
    const STORED_HASH = process.env.PASSWORD_HASH

    if (!SALT || !STORED_HASH) {
      console.error('환경변수 누락:', { SALT: !!SALT, STORED_HASH: !!STORED_HASH })
      return NextResponse.json(
        { error: '서버 설정이 완료되지 않았습니다' },
        { status: 503 } // Service Unavailable
      )
    }

    const { password } = await request.json()

    if (!password) {
      return NextResponse.json(
        { error: '비밀번호가 필요합니다' },
        { status: 400 }
      )
    }

    const derivedKey = crypto.pbkdf2Sync(
      password,
      SALT,
      10000,
      64,
      'sha512'
    )

    const derivedHash = derivedKey.toString('hex')

    if (derivedHash === STORED_HASH) {
      const response = NextResponse.json({ success: true })
      response.cookies.set('session', crypto.randomBytes(32).toString('hex'), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24
      })
      return response
    }

    return NextResponse.json(
      { error: '비밀번호가 일치하지 않습니다' },
      { status: 401 }
    )
  } catch (error) {
    console.error('비밀번호 검증 중 오류 발생:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
} 