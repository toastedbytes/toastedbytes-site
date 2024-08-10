# Stage 1: Build the application
FROM node:alpine AS build
# set the working directory
WORKDIR /app
# Copy the working directory in the container
COPY package*.json ./
# Install the project dependencies
RUN npm ci
# Copy the rest of the project files to the container
COPY . .
# Build the application to the production mode to dist folder
RUN npm run build

CMD ["npm", "start"]