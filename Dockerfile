FROM node:alpine

WORKDIR /usr/app

COPY ./api/package*.json ./

RUN npm install

COPY ./api .

EXPOSE 8087

CMD ["npm", "start"]