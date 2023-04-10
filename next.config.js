/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: 'image.tmdb.org',
            },
        ],
    },
}

module.exports = nextConfig
