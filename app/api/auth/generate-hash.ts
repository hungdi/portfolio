import * as crypto from 'crypto'

const password = process.env.PASSWORD || ''
if (!password) {
  console.error('PASSWORD 환경변수가 설정되지 않았습니다')
  process.exit(1)
}

const salt = process.env.PASSWORD_SALT || ''
if (!salt) {
  console.error('PASSWORD_SALT 환경변수가 설정되지 않았습니다')
  process.exit(1)
}

const derivedKey = crypto.pbkdf2Sync(
  password,
  salt,
  10000,
  64,
  'sha512'
)

const derivedHash = derivedKey.toString('hex')
console.log('생성된 해시:', derivedHash) 