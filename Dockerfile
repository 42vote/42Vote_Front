FROM node:latest

WORKDIR /usr/src/app

RUN apt-get update -y
RUN npm install -g npm@9 
COPY ./source/ .
RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start"]
