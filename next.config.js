/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'prdmovida.blob.core.windows.net',
            port: '',
            pathname: '/public/imagens/**',
          },
        ],
    },

}

module.exports = nextConfig
