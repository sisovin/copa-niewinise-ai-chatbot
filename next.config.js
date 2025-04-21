/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    strict: true,
  },
  env: {
    CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
    CLERK_API_KEY: process.env.CLERK_API_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    UPLOADCARE_PUBLIC_KEY: process.env.UPLOADCARE_PUBLIC_KEY,
    CLOUDWAYS_API_KEY: process.env.CLOUDWAYS_API_KEY,
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    PUSHER_KEY: process.env.PUSHER_KEY,
    PUSHER_SECRET: process.env.PUSHER_SECRET,
    PUSHER_CLUSTER: process.env.PUSHER_CLUSTER,
    SUBSCRIPTION_PLAN: process.env.SUBSCRIPTION_PLAN,
  },
};

module.exports = nextConfig;
