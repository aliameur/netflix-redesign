/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'image.tmdb.org',
            'bit.ly',
        ],
    },
    transpilePackages: ["@stripe/firestore-stripe-payments"]
};

module.exports = nextConfig;
