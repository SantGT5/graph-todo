FROM node:18.14.2-alpine

WORKDIR /app

RUN npm install

COPY  ./ ./

RUN npm run build

EXPOSE 5173

CMD [ "npm", "run", "preview" ]