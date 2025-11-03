#!/bin/bash
echo "🚀 Starting React (Vite) build and deployment..."

# Navigate to your project folder on Hostinger
cd /home/YOUR_USERNAME/AIEcon-Gulf

# Install dependencies
npm install

# Build your Vite project
npm run build

# Clean the public_html directory
rm -rf /home/YOUR_USERNAME/domains/YOUR_DOMAIN/public_html/*

# Copy the built files to public_html
cp -r dist/* /home/YOUR_USERNAME/domains/YOUR_DOMAIN/public_html/

echo "✅ Deployment complete!"
