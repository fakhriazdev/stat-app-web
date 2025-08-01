/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://nest-api-portfolio.vercel.app/api/:path*',
      },
    ];
  },
};

export default nextConfig;
