/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.corinthians.com.br'],
  },
}

module.exports = nextConfig
