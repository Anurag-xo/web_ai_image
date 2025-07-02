# An-Photo AI - Image Generation Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)](https://stripe.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

An-Photo AI is a full-stack application for generating AI-powered images. It features a user-friendly interface for generating, viewing, and managing images, with a robust backend to handle the image generation and user data.

## ✨ Features

- **AI Image Generation**: Create unique images from text prompts using advanced AI models.
- **User Authentication**: Secure user accounts and personalized experiences with Clerk.
- **Subscription Plans**: Monetize your service with Stripe-based subscription plans.
- **Credit System**: Users can purchase credits to generate images.
- **Image Gallery**: View and manage your generated images.
- **Modern Tech Stack**: Built with the latest technologies for a fast, scalable, and maintainable application.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [Bun](https://bun.sh/) (v1.1.26 or higher)
- [Docker](https://www.docker.com/get-started)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/anphoto_ai.git
    cd anphoto_ai
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the `apps/web` and `apps/backend` directories and add the necessary environment variables. You can use the `.env.example` files as a template.

4.  **Generate Prisma Client:**

    ```bash
    bun run generate:db
    ```

5.  **Run the development servers:**

    ```bash
    bun run dev
    ```

    This will start the frontend and backend servers concurrently.

    - Frontend: `http://localhost:3000`
    - Backend: `http://localhost:4000`

## 📁 Project Structure

This project is a monorepo managed by Turborepo.

- `apps/web`: The Next.js frontend application.
- `apps/backend`: The Express.js backend application.
- `packages/db`: The Prisma schema and database client.
- `packages/common`: Shared types and utility functions.
- `packages/ui`: Shared React components.
- `packages/eslint-config`: Shared ESLint configurations.
- `packages/typescript-config`: Shared TypeScript configurations.

## 📜 Scripts

- `bun run dev`: Start the development servers for all apps.
- `bun run build`: Build all apps for production.
- `bun run lint`: Lint all apps.
- `bun run format`: Format the codebase with Prettier.
- `bun run start:web`: Start the frontend app in production mode.
- `bun run start:backend`: Start the backend app in production mode.
- `bun run generate:db`: Generate the Prisma client.

## 🛠️ Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [Stripe](https://stripe.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Fal.ai](https://fal.ai/)

### Tools

- [Turborepo](https://turborepo.org/)
- [Docker](https://www.docker.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

