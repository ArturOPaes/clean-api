FROM node:12
WORKDIR /usr/ws/clean-api
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm start
