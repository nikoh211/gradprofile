#!/bin/bash

# Build the Next.js application
npm run build

# Deploy to your hosting service
# Replace with your actual deployment commands
rsync -avz --delete .next/ user@gradprofile.com:/var/www/gradprofile.com/
rsync -avz --delete public/ user@gradprofile.com:/var/www/gradprofile.com/public/ 