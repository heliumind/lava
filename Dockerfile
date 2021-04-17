# pull official base image
FROM node:current-alpine

# set working directory
WORKDIR /app

# install bash
RUN apk add --no-cache bash

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY . ./

# start app
CMD ["npm", "start"]

