#!/bin/bash

# Remove previous build
rm -rf build/

(cd frontend;
yarn install;
yarn build)

mv frontend/build/ .

docker-compose build web
docker-compose up web
