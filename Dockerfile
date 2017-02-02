FROM node:6.7

ENV PORT=3300

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN npm run build

# EXPOSE $PORT
EXPOSE 3300

CMD [ "npm", "start" ]