FROM node:10.6.0
ENV NPM_CONFIG_LOGLEVEL warn
COPY . .
RUN npm install
RUN npm start
EXPOSE 3000
