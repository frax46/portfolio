/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Explicitly configure the compiler to use SWC
  compiler: {
    // Do not use Babel
    emotion: false,
  },
  // Disable React strict mode temporarily if it's causing issues
  reactStrictMode: false,
}

module.exports = nextConfig 