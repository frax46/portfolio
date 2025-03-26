#!/bin/bash

# Deployment script for portfolio project

# Exit on any error
set -e

# Configuration
VPS_USER="your-username"
VPS_HOST="your-vps-ip-or-domain"
PROJECT_DIR="/path/to/portfolio" # Path on your VPS

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Deploying portfolio to VPS...${NC}"

# Ensure we're at the root of the project
echo -e "${GREEN}Checking if we're at the root of the project...${NC}"
if [ ! -f "docker-compose.yml" ] || [ ! -f "Dockerfile" ]; then
  echo "Error: Dockerfile or docker-compose.yml not found. Make sure you're in the project root."
  exit 1
fi

# Build and compress the project
echo -e "${GREEN}Creating deployment archive...${NC}"
git archive --format=tar.gz -o deploy.tar.gz HEAD

# Copy the archive to the VPS
echo -e "${GREEN}Copying files to VPS...${NC}"
scp deploy.tar.gz $VPS_USER@$VPS_HOST:$PROJECT_DIR/

# SSH into the VPS and deploy
echo -e "${GREEN}Deploying on VPS...${NC}"
ssh $VPS_USER@$VPS_HOST << EOF
  cd $PROJECT_DIR
  echo "Extracting files..."
  tar -xzf deploy.tar.gz --strip-components=0
  rm deploy.tar.gz

  echo "Building and starting Docker containers..."
  docker-compose down || true
  docker-compose build
  docker-compose up -d

  echo "Cleaning up unused Docker resources..."
  docker system prune -f
EOF

# Clean up local archive
rm deploy.tar.gz

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${YELLOW}Your portfolio is now running at http://$VPS_HOST:3000${NC}"
echo -e "${YELLOW}For HTTPS, configure the nginx service in docker-compose.yml${NC}" 