FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Clear NPM cache and update NPM
RUN npm cache clean --force && npm update -g npm

# Install the Angular CLI and other dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the rest of the frontend files to the container
COPY . .

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--poll", "1"]

