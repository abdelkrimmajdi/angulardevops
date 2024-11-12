# Stage 1: Build the Angular application
FROM node:14 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built Angular app to the Nginx html directory
COPY --from=build /app/dist/your-angular-app-name /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
