#!/bin/bash

# Creates a cluster on Google Cloud Container Engine
# and deploys kyrene docker image AUTOMAGICALLY

# Use deploy directory as working directory
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )
cd "$parent_path"

# halt on any error
set -e

# Build docker image
docker build --tag=gcr.io/mpj-test-1221/kyrene:1 ..

# Create the cluster
gcloud container clusters create kyrene --machine-type g1-small

# Push docker image to google cloud
gcloud docker push gcr.io/mpj-test-1221/kyrene:1

# Create the replication controller
kubectl create -f replication-controller.json

# Expose replicationcontroller to the internet
kubectl create -f service.json

# Generate webhook config
./generate-webhook-config

# Create particle webhook
particle webhook create particle-webhook.json
