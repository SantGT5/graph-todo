FROM node:18.14.2-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./tsconfig.json ./

RUN npm install

COPY  ./ ./

CMD [ "npm", "run", "pro" ]