#!/bin/bash

# Remove previous build
rm -rf build/

# Create new
(cd frontend;
yarn install;
yarn build)

mv frontend/build/ .

docker-compose build
