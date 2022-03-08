/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: 'custom',
    domains: ["media-exp1.licdn.com"],
  },
}

module.exports = nextConfig
