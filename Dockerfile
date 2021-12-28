FROM node:alpine3.14

RUN apk add --no-cache bash

RUN npm install -g live-server --no-progress

EXPOSE 9000