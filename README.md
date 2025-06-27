# AIxImage - AI-Powered Image Generation Platform

Transform your photos with AI-powered enhancement and editing tools. Create stunning visuals with just a few clicks.

## Features ✨

- 🎨 AI Image Generation with custom models
- 📸 Real-time image preview and gallery
- 🏗️ Custom model training
- 💳 Credit-based payment system
- 🔐 Secure authentication with Clerk
- 💰 Payment integration with Stripe & Razorpay
- 🚀 Modern Next.js frontend with TypeScript
- ⚡ Fast Node.js backend with Express

## Tech Stack 🛠️

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **State Management**: React hooks
- **Animation**: Framer Motion
- **Authentication**: Clerk
- **Payments**: Stripe & Razorpay

### Backend

- **Runtime**: Node.js with Bun
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: Fal.ai
- **Storage**: S3-compatible (Cloudflare R2)
- **API**: RESTful

## Getting Started 🚀

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database
- Clerk account for authentication
- Stripe/Razorpay account for payments
- Cloudflare R2 or S3-compatible storage
- Fal.ai API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/aiximage.git
   cd aiximage
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:

   - Create `.env` files in both `apps/backend` and `apps/web`
   - Refer to the [environment variables guide](#environment-variables) below

4. Run the development server:

   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

#### Backend (`.env` in `apps/backend`)

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/aiximage"

# AI Service
FAL_KEY="your_fal_ai_key"

# Storage
S3_ACCESS_KEY="your_s3_access_key"
S3_SECRET_KEY="your_s3_secret_key"
BUCKET_NAME="your_bucket_name"
ENDPOINT="your_s3_endpoint"

# Authentication
CLERK_JWT_PUBLIC_KEY="your_clerk_public_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
CLERK_ISSUER="https://your-clerk-instance.clerk.accounts.dev"
SIGNING_SECRET="your_clerk_webhook_signing_secret"

# Payments
STRIPE_SECRET_KEY="your_stripe_secret_key"
RAZORPAY_KEY_ID="your_razorpay_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_secret_key"

# URLs
WEBHOOK_BASE_URL="your_webhook_base_url"
FRONTEND_URL="your_frontend_url"
```

#### Frontend (`.env.local` in `apps/web`)

```env
NEXT_PUBLIC_BACKEND_URL="http://localhost:8080"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

## Project Structure 📂

```
aiximage/
├── apps/
│   ├── backend/          # Node.js backend service
│   └── web/              # Next.js frontend application
├── packages/
│   ├── common/           # Shared types and utilities
│   ├── db/               # Database schema and Prisma client
│   ├── eslint-config/    # ESLint configurations
│   ├── typescript-config # TypeScript configurations
│   └── ui/               # Shared UI components
├── docker/               # Docker configurations
└── turbo.json            # Turborepo configuration
```

## Deployment 🚢

### Docker

Build and run with Docker Compose:

```bash
docker-compose up --build
```

### Vercel

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set up environment variables
4. Deploy!

## API Documentation 📚

### Authentication

- `POST /api/webhook/clerk` - Clerk webhook handler

### Image Generation

- `POST /ai/training` - Train new AI model
- `POST /ai/generate` - Generate images
- `POST /pack/generate` - Generate images from pack
- `GET /image/bulk` - Get generated images

### Models

- `GET /models` - Get available models
- `GET /pre-signed-url` - Get S3 upload URL

### Payments

- `POST /payment/create` - Create payment session
- `POST /payment/razorpay/verify` - Verify Razorpay payment
- `GET /payment/subscription/:userId` - Get user subscription
- `GET /payment/credits/:userId` - Get user credits
- `POST /payment/webhook` - Payment webhook handler

## Contributing 🤝

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
