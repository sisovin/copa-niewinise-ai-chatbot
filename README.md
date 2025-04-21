# COPA Niewinise AI Chatbot

## Project Description

This project is a COPA Niewinise SAAS AI Chatbot for Email Marketing utilizing Next.js 15, TypeScript Strict, Clerk, Prisma ORM, PostgreSQL, Uploadcare, Cloudways, Stripe, and Pusher.

## Setup Instructions

### Setting up a Next.js 15 Application

1. Create a new Next.js 15 application:
   ```bash
   npx create-next-app@15 my-app
   cd my-app
   ```

2. Install necessary dependencies:
   ```bash
   npm install typescript @types/react @types/node
   ```

### Implementing Authentication with Clerk

1. Install Clerk:
   ```bash
   npm install @clerk/clerk-sdk-node
   ```

2. Add Clerk environment variables to your `.env.local` file:
   ```
   CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   ```

3. Wrap your application with `ClerkProvider` in `pages/_app.tsx`:
   ```tsx
   import { ClerkProvider } from '@clerk/clerk-sdk-node';

   function MyApp({ Component, pageProps }) {
     return (
       <ClerkProvider>
         <Component {...pageProps} />
       </ClerkProvider>
     );
   }

   export default MyApp;
   ```

### Configuring Prisma and PostgreSQL

1. Install Prisma and PostgreSQL client:
   ```bash
   npm install @prisma/client
   npm install prisma --save-dev
   npm install pg
   ```

2. Initialize Prisma:
   ```bash
   npx prisma init
   ```

3. Configure your PostgreSQL database in the `.env` file:
   ```
   DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
   ```

4. Create your Prisma schema in `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }

   generator client {
     provider = "prisma-client-js"
   }

   model User {
     id    Int     @id @default(autoincrement())
     email String  @unique
     name  String?
   }
   ```

5. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

### Setting up Uploadcare, Cloudways, Stripe, and Pusher

1. Install Uploadcare:
   ```bash
   npm install @uploadcare/react-widget
   ```

2. Add Uploadcare environment variables to your `.env.local` file:
   ```
   UPLOADCARE_PUBLIC_KEY=<your-uploadcare-public-key>
   ```

3. Install Cloudways, Stripe, and Pusher:
   ```bash
   npm install cloudways stripe pusher
   ```

4. Add Cloudways, Stripe, and Pusher environment variables to your `.env.local` file:
   ```
   CLOUDWAYS_API_KEY=<your-cloudways-api-key>
   STRIPE_API_KEY=<your-stripe-api-key>
   PUSHER_APP_ID=<your-pusher-app-id>
   PUSHER_KEY=<your-pusher-key>
   PUSHER_SECRET=<your-pusher-secret>
   PUSHER_CLUSTER=<your-pusher-cluster>
   ```
