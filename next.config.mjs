/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://nest-api-portfolio.up.railway.app/api/:path*', // Replace with your actual API base URL
            },
        ];
    },
};

export default nextConfig;
