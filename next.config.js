/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  // Required for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // Add assetPrefix for GitHub Pages with the repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
}

module.exports = nextConfig 