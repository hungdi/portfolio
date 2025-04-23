import * as crypto from 'crypto'

const password = 'admin1234'
const salt = 'j8KmP2vL9nQ5xR3tY7wZ4cF6hB1dN0'

console.log('=== 해시 생성 테스트 ===')
console.log('비밀번호:', password)
console.log('솔트:', salt)

const derivedKey = crypto.pbkdf2Sync(
  password,
  salt,
  10000,
  64,
  'sha512'
)

const derivedHash = derivedKey.toString('hex')
console.log('생성된 해시:', derivedHash)
console.log('=== 테스트 종료 ===') 