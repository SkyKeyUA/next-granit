/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  env: {
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
    NEST_APP_API_URL: process.env.NEST_APP_API_URL,
  },
};

module.exports = nextConfig;
