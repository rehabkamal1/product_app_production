# Multi-stage Dockerfile for Angular production build
# Stage 1: build the app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent --no-audit --no-fund
COPY . .
RUN npm run build -- --configuration production

# Stage 2: serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist/task1 /usr/share/nginx/html
# Add custom nginx config to enable SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
