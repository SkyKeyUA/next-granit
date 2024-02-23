/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  env: {
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
    NEST_APP_API_URL: process.env.NEST_APP_API_URL,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
