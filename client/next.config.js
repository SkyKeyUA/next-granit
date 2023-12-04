/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  env: {
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
  },
};

module.exports = nextConfig;
