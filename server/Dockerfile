FROM node:18.14.2-alpine

LABEL version="1.4"

WORKDIR /app

COPY ./package.json ./
COPY ./tsconfig.json ./

RUN npm install

COPY  ./ ./

RUN npm run build

EXPOSE 4000

CMD [ "npm", "run", "pro" ]