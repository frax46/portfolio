# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM node:20-alpine AS production

# Set NODE_ENV
ENV NODE_ENV=production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Add metadata labels
LABEL org.opencontainers.image.source=https://github.com/frax46/portfolio
LABEL org.opencontainers.image.description="Portfolio website built with Next.js"
LABEL org.opencontainers.image.licenses=MIT

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
