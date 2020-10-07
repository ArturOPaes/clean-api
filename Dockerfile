FROM node:12
WORKDIR /usr/ws/clean-api
COPY ./package.json .
RUN npm install --only=prod
