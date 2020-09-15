FROM node:12

MAINTAINER davegarrehy@gmail.com

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

COPY . .

#Our app lives at port 3000
EXPOSE 3000

CMD [ "node", "Node_Pokemon_API.js" ]

