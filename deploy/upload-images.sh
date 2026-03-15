#!/bin/bash
# Upload images from public/images/ to Beget S3
# Usage: bash deploy/upload-images.sh

S3_ENDPOINT="https://s3.ru1.storage.beget.cloud"
BUCKET="decff4bdb6bc-armada-media"
ACCESS_KEY="${S3_ACCESS_KEY}"
SECRET_KEY="${S3_SECRET_KEY}"

# Install AWS CLI if not present
if ! command -v aws &> /dev/null; then
  echo "Installing AWS CLI..."
  apt install -y awscli 2>/dev/null || pip install awscli
fi

# Configure AWS CLI for Beget S3
aws configure set aws_access_key_id "$ACCESS_KEY"
aws configure set aws_secret_access_key "$SECRET_KEY"
aws configure set default.region "ru-1"

# Sync images folder to S3
echo "Uploading images to S3..."
aws s3 sync public/images/ s3://$BUCKET/images/ \
  --endpoint-url "$S3_ENDPOINT" \
  --acl public-read \
  --cache-control "public, max-age=2592000"

echo "Done! Images available at:"
echo "https://buelifmopuduegur.begetcdn.cloud/images/"
