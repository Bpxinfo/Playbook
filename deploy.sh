#!/bin/bash

# ----------------------
# KUDU Deployment Script
# ----------------------

# Installs dependencies, builds the production build, and copies files to wwwroot

# Prerequisites
# Node.js
# npm

# Navigate to project root
cd "$DEPLOYMENT_SOURCE"

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# If the build directory is not wwwroot, move it
echo "Moving build files to wwwroot..."
if [ -d wwwroot ]; then
    rm -rf wwwroot
fi
mv dist wwwroot

# Copy web.config to wwwroot if it's not already there
if [ ! -f wwwroot/web.config ]; then
    cp public/web.config wwwroot/
fi

echo "Deployment finished successfully!" 