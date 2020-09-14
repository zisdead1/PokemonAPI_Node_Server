FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

COPY . .

EXPOSE 3000

CMD [ "node", "Node_Pokemon_API.js" ]

