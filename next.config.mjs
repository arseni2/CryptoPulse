/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cryptobubbles.net',
                port: '',
                pathname: 'backend/data/logos/**',
            },
        ],
    },
};

export default nextConfig;
