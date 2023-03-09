FROM node:18

ADD . /app/
WORKDIR /app


RUN npm install

EXPOSE 8888
CMD npm run start