# Frontend
FROM node:18-alpine AS builder
WORKDIR /app
COPY my-app/package*.json ./
COPY backend/package*.json ./backend/
RUN npm install
RUN cd backend && npm install
COPY my-app/ ./
COPY backend/ ./backend/

# Build with type checking disabled
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image
FROM node:18-alpine
WORKDIR /app

# Copy built files and dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/backend ./backend

# Create necessary directories
RUN mkdir -p backend/data uploads

EXPOSE 3000
EXPOSE 5000

CMD ["npm", "start"] 