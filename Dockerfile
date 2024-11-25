# Use official Node.js image as the base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if exists)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3440

# Start the Next.js app
CMD ["npm", "start"]
