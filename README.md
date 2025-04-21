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

### Enabling TypeScript Strict Mode

1. Open `next.config.js` and add the following configuration:
   ```js
   typescript: {
     strict: true,
   }
   ```

### Implementing Authentication with Clerk

1. Install Clerk:
   ```bash
   npm install @clerk/clerk-react
   ```

2. Add Clerk environment variables to your `.env.local` file:
   ```
   CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   ```

3. Wrap your application with `ClerkProvider` in `pages/_app.tsx`:
   ```tsx
   import { ClerkProvider } from '@clerk/clerk-react';

   function MyApp({ Component, pageProps }) {
     return (
       <ClerkProvider>
         <Component {...pageProps} />
       </ClerkProvider>
     );
   }

   export default MyApp;
   ```

### Custom Clerk Components

1. Create custom Clerk components to remove the watermark:
   ```tsx
   import React from 'react';
   import { CustomSignIn, CustomSignUp, CustomUserButton, useCustomUser } from './CustomClerkComponents';

   const ClerkAuth = () => {
     const { isSignedIn } = useCustomUser();

     return (
       <div>
         {isSignedIn ? (
           <div>
             <CustomUserButton />
             <p>Welcome back!</p>
           </div>
         ) : (
           <div>
             <CustomSignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
             <CustomSignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
           </div>
         )}
       </div>
     );
   };

   export default ClerkAuth;
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

   model Chatbot {
     id          Int      @id @default(autoincrement())
     name        String
     description String?
     createdAt   DateTime @default(now())
     updatedAt   DateTime @updatedAt
     messages    Message[]
   }

   model Message {
     id        Int      @id @default(autoincrement())
     content   String
     createdAt DateTime @default(now())
     updatedAt DateTime @updatedAt
     chatbotId Int
     chatbot   Chatbot  @relation(fields: [chatbotId], references: [id])
   }

   model SubscriptionPlan {
     id          Int      @id @default(autoincrement())
     name        String
     description String?
     price       Float
     createdAt   DateTime @default(now())
     updatedAt   DateTime @updatedAt
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

### Subscription Plan

1. Add a new field for subscription plan selection in the billing settings component.
2. Update the `handleChange` function to handle the new field.
3. Update the `handleSubmit` function to include the subscription plan.
4. Add a new breadcrumb item for the billing settings page.
5. Add a new route for the billing settings page in the ClerkAuth component.
6. Add a new menu item for the billing settings page in the Sidebar component.
7. Add a new field for file description in the UploadcareFileUpload component.
8. Update the `handleFileChange` function to handle the new field.
9. Add a new environment variable for the subscription plan in `next.config.js`.
10. Add a new route for the billing settings page in `pages/_app.tsx`.
11. Add a new route for the billing settings page in `pages/api/auth/[...clerk].ts`.
12. Add a new field for the subscription plan in `pages/api/openai.ts`.
13. Add a new field for the subscription plan in `pages/api/pusher.ts`.
14. Add a new field for the subscription plan in `pages/api/stripe/webhook.ts`.
15. Add a new field for the subscription plan in `pages/api/uploadcare.ts`.
16. Add a new section for the subscription plan in `pages/index.tsx`.
17. Add a new model for the subscription plan in `prisma/schema.prisma`.
18. Add a new function for the subscription plan in `services/OpenAIService.ts`.
19. Add a new function for the subscription plan in `services/PusherService.ts`.
20. Add a new function for the subscription plan in `services/StripeService.ts`.
21. Add a new style for the subscription plan in `styles/globals.css`.
22. Add a new theme for the subscription plan in `utils/theme.ts`.
