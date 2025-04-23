/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 기본 포트를 3000로 설정
  env: {
    NEXT_PUBLIC_BASE_URL: 'http://localhost:3000',
  },
}

module.exports = nextConfig 