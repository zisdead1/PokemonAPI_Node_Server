FROM node:12-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

#Our app lives at port 3000
EXPOSE 3000

#kick off our app
CMD [ "npm", "start" ]

