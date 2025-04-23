import { NextResponse } from 'next/server'
import * as sha256 from 'js-sha256'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    const salt = process.env.PASSWORD_SALT
    const correctHash = process.env.PASSWORD_HASH
    
    if (!salt) {
      throw new Error('PASSWORD_SALT 환경변수가 설정되지 않았습니다')
    }
    
    if (!correctHash) {
      throw new Error('PASSWORD_HASH 환경변수가 설정되지 않았습니다')
    }
    
    console.log('=== 비밀번호 검증 시작 ===')
    console.log('입력된 비밀번호:', password)
    console.log('사용된 솔트:', salt)
    
    const hashedPassword = sha256.sha256(password + salt)
    console.log('저장된 해시:', correctHash)
    console.log('생성된 해시:', hashedPassword)
    console.log('비밀번호 일치 여부:', hashedPassword === correctHash)
    console.log('=== 비밀번호 검증 종료 ===')

    if (hashedPassword === correctHash) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: '비밀번호가 일치하지 않습니다' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('비밀번호 검증 중 오류 발생:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
} 