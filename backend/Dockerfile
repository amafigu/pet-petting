# syntax=docker/dockerfile:1

# Use a specific version of Node.js as the base image
ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-slim AS build

# Set the working directory in the container
WORKDIR /app

# Install system dependencies required for native npm module compilation
RUN apt-get update -qq && \
    apt-get install -y build-essential node-gyp pkg-config python-is-python3 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json (or npm-shrinkwrap.json) for npm install
COPY package*.json ./

# Install npm dependencies including 'devDependencies'
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application (uncomment the next line if your project needs a build step, e.g., TypeScript compilation)
RUN npm run build

# Start a new, final image to reduce size
FROM node:${NODE_VERSION}-slim AS production

# Set NODE_ENV environment variable to production for this stage
ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /app

# Copy built assets from the 'build' stage
COPY --from=build /app/dist ./dist

# Copy package.json and package-lock.json for npm install in production mode
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3001

# Command to run the application
CMD ["node", "dist/server.js"]
