# Pizza Ordering System

A full-stack pizza ordering application built with modern web technologies. This project uses a microservices architecture with a Next.js frontend and NestJS backend, connected through GraphQL.

## 🚀 Technologies Used

### Frontend

- Next.js
- React
- Apollo Client
- GraphQL
- TailwindCSS
- TypeScript

### Backend

- NestJS
- GraphQL
- Prisma ORM
- PostgreSQL

## 📁 Project Structure

```
.
├── backend/                 # NestJS backend service
│   ├── src/
│   │   ├── pizza/          # Pizza module
│   │   ├── prisma/         # Database schema and migrations
│   │   └── main.ts         # Application entry point
│   └── package.json
├── frontend/               # Next.js frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Next.js pages
│   │   └── styles/        # CSS styles
│   └── package.json
├── docker-compose.yml      # Docker configuration
└── package.json           # Root package.json (monorepo setup)
```

## 🛠️ Prerequisites

- Node.js
- Docker and Docker Compose
- PostgreSQL
- npm

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/geekshikha/Pizza-Order.git
   cd order
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the backend directory with the following:

   ```
   DATABASE_URL="postgresql://postgres:mypostgresdatabase@localhost:5432/postgres?schema=public""
   ```

4. **Start the application**
   This will start all services (PostgreSQL, backend, and frontend) in Docker containers:

   ```bash
   docker-compose up --build
   ```

The application will be available at:

- Frontend: http://localhost:3001
- Backend GraphQL Playground: http://localhost:3000/graphql

## 🔧 Development

- Backend runs on port 3000
- Frontend runs on port 3001
- PostgreSQL runs on port 5432
