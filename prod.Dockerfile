# Stage 1: Install dependencies and build the Next.js app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
ENV NODE_ENV=production
RUN npm run build


EXPOSE 3032
# CMD ["npm", 'run', "start"]
