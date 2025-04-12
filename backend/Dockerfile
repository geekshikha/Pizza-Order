# Stage 1: Build the NestJS app
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install
# Install Prisma CLI globally
RUN npm install -g prisma ts-node

# Copy source code
COPY . .

# Generate Prisma client
RUN prisma generate

# Build the application
RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine AS prod
WORKDIR /app

# Install Prisma CLI in production
RUN npm install -g prisma ts-node

# Copy only the necessary files
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/prisma ./prisma

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
# CMD ["node", "dist/main"]

# Inline migrate and start commands
CMD sh -c "npx prisma migrate deploy && npm run seed && node dist/main"
