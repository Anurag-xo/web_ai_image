# PhotoAI Web Frontend

The Next.js frontend application for PhotoAI - an AI-powered image generation platform.

## Features

- AI Image Generation
- Real-time Image Preview
- Beautiful Image Gallery
- Responsive Design
- Authentication with Clerk
- Secure Payment Integration with Stripe

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Clerk Authentication
- Stripe/Razorpay Payments

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Clerk Account
- Stripe Account (for payments)

### Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
```

### Development

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
apps/web/
├── app/                   # App Router pages
├── components/           # React components
├── lib/                  # Utility functions
├── styles/              # Global styles
├── types/               # TypeScript types
└── public/              # Static assets
```

## Key Components

- `app/page.tsx` - Homepage
- `app/dashboard/page.tsx` - User Dashboard
- `components/Camera.tsx` - Image Generation UI
- `components/Gallery.tsx` - Image Gallery
- `components/ui/` - Shared UI Components

## Docker Support

Build the frontend container:

```bash
docker build -f docker/Dockerfile.frontend -t photoai-frontend ..
```

Run the container:

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key \
  -e CLERK_SECRET_KEY=your_secret_key \
  -e NEXT_PUBLIC_BACKEND_URL=http://localhost:8080 \
  -e NEXT_PUBLIC_STRIPE_KEY=your_stripe_key \
  photoai-frontend
```

## API Integration

The frontend communicates with the backend API at `NEXT_PUBLIC_BACKEND_URL`. Key endpoints:

- `/api/generate` - Generate new images
- `/api/images` - Fetch user's images
- `/api/pack` - Manage credit packs

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
