FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run test
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

# Set to production environment and specify port
ENV NODE_ENV=production
ENV PORT=3001

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Expose port 3001
EXPOSE 3001

# Command to run the application in production mode
CMD ["npm", "run", "start"]
