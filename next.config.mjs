/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://nest-api-portfolio.up.railway.app/api/:path*',
            },
        ];
    },
};

export default nextConfig;
