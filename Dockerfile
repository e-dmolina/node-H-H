FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

<<<<<<< HEAD
CMD [ "node", "src/server.js" ]
=======
CMD [ "node", "src/index.js" ]
>>>>>>> d0406ee835a5df1d58fcebdc1da595c3abbba56c
