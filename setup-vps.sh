#!/bin/bash

# Script to set up the VPS for the portfolio deployment
# Run this once on your VPS to prepare it for CI/CD deployments

# Exit on any error
set -e

# Update package lists
echo "Updating package lists..."
apt-get update

# Install required packages
echo "Installing required packages..."
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    apache2-utils

# Add Docker's official GPG key
echo "Adding Docker's GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the Docker repository
echo "Setting up Docker repository..."
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package lists again
apt-get update

# Install Docker
echo "Installing Docker..."
apt-get install -y docker-ce docker-ce-cli containerd.io

# Install Docker Compose
echo "Installing Docker Compose..."
curl -L "https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Create directory structure
echo "Creating directory structure..."
mkdir -p /opt/portfolio/traefik/acme
mkdir -p /opt/portfolio/traefik/config

# Set permissions for Docker socket
echo "Setting appropriate permissions..."
chmod 666 /var/run/docker.sock

# Create empty ACME JSON file with correct permissions
echo "Creating ACME JSON file..."
touch /opt/portfolio/traefik/acme/acme.json
chmod 600 /opt/portfolio/traefik/acme/acme.json

echo "VPS setup complete! The server is now ready for portfolio deployment."
echo "Next steps:"
echo "1. Update your GitHub repository with the correct secrets"
echo "2. Push to main branch to trigger the CI/CD pipeline" 