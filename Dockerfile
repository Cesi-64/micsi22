FROM node:18

ADD . /app/
WORKDIR /app


RUN npm install

EXPOSE 10001
CMD npm run start