FROM node:10.6.0
WORKDIR ./src
COPY package.json ./
RUN npm install
COPY . /src
CMD npm start
EXPOSE 3001
