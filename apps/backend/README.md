# PhotoAI Backend Service

The Node.js backend service for PhotoAI - an AI-powered image generation platform.

## Features

- AI Image Generation with FalAI
- Model Training Integration
- S3 Image Storage
- Payment Processing (Stripe & Razorpay)
- User Credit Management
- Clerk Authentication
- Webhook Handlers

## Tech Stack

- Node.js with TypeScript
- Express.js
- Prisma ORM
- FalAI Client
- S3 Storage
- Stripe/Razorpay Integration
- Clerk Authentication

## Environment Variables

Create a `.env` file:

```bash
# AI Service
FAL_KEY=your_fal_ai_key

# Storage
S3_ACCESS_KEY=your_s3_access_key
S3_SECRET_KEY=your_s3_secret_key
BUCKET_NAME=your_bucket_name
ENDPOINT=your_s3_endpoint

# Authentication
AUTH_JWT_KEY=your_jwt_key
CLERK_JWT_PUBLIC_KEY=your_clerk_public_key
SIGNING_SECRET=your_clerk_webhook_signing_secret

# Payments
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# URLs
WEBHOOK_BASE_URL=your_webhook_base_url
FRONTEND_URL=your_frontend_url
```

## Development

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Start production server
bun start
```

The server will be available at `http://localhost:8080`.

## API Endpoints

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

## Project Structure

```
apps/backend/
├── routes/              # API route handlers
├── services/           # Business logic
├── models/             # AI model integrations
├── middleware/         # Express middleware
└── types/             # TypeScript types
```

## Key Components

- `index.ts` - Main application entry
- `middleware.ts` - Authentication middleware
- `models/FalAIModel.ts` - FalAI integration
- `services/payment.ts` - Payment processing
- `routes/payment.routes.ts` - Payment endpoints
- `routes/webhook.routes.ts` - Webhook handlers

## Docker Support

Build the backend container:

```bash
docker build -f docker/Dockerfile.backend -t photoai-backend ..
```

Run the container:

```bash
docker run -p 8080:8080 \
  --env-file .env \
  photoai-backend
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
