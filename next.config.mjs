/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://nest-api-portfolio.onrender.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
