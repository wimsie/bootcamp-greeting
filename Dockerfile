FROM node:10-alpine

LABEL maintainer=alexander.warschun@gmail.com

RUN apk add --no-cache tzdata

ENV TZ="Europe/Berlin"

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app
COPY .git/refs/heads/master /app/revision.txt

CMD node index.js
EXPOSE 8080
