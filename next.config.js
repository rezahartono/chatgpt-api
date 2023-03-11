/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    TOKEN_TYPE: process.env.TOKEN_TYPE,
    BASE_URL_OPENAI: process.env.BASE_URL_OPENAI,
  }
}

module.exports = nextConfig
