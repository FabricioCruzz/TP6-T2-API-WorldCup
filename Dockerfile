FROM node:alpine

WORKDIR /usr/app

COPY ./api/package*.json ./

RUN npm install

COPY ./api .

EXPOSE 8087

CMD npm start

FROM postgres:10.17

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=worldcup

COPY ./scriptWorldCup.sql ./docker-entrypoint-initdb.d/

EXPOSE 5441