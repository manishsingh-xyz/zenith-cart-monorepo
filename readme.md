# Zenith Cart Monorepo

Zenith Cart is a scalable, modular, and performance-optimized micro frontend e-commerce application built using modern frontend best practices.

## 🚀 Tech Stack

- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit + RTK Query**
- **Module Federation via @module-federation/vite**
- **pnpm Workspaces**
- **Storybook**
- **Vitest + React Testing Library**
- **Docker + Kubernetes (optional)**
- **CI/CD via GitHub Actions**
- **DummyJSON API for mock data**

## 📦 Workspaces

- `apps/host`: Main container app
- `apps/products`: Micro frontend for product listing and details
- `packages/ui`: Shared UI components
- `packages/utils`: Shared utilities and hooks
- `packages/config`: Shared configuration files

## 📄 Getting Started

```bash
# Install dependencies
pnpm install

# Run host app
cd apps/host
pnpm dev

# Run products app
cd apps/products
pnpm dev
```
