FROM node:16.7.0

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

COPY src/app.ts /code/src/app.ts

RUN npm install

COPY . /code

CMD ["nodemon", "src/app.ts"]

