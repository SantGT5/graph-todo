# GraphQL - ToDo

## Architecture diagram

<img width="827" alt="Screenshot 2023-04-01 at 17 25 59" src="https://user-images.githubusercontent.com/83282533/229298315-c8f8f79b-9cb5-4770-afaa-c79d65dfcd13.png">

### Motivation

> Learn how to design and develop large-scale systems  
> Learn new knowledge and code skills

## Be sure you have installed

- [NodeJs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Npm](https://docs.npmjs.com/)
- [Git](https://git-scm.com/)

## Start project

> **_IMPORTANT:_**  
> Be sure the following ports are available:   
> -- 3050   
> -- 5173   
> -- 4000   
> -- 27017   
> -- 8081   

```
$ git clone https://github.com/SantGT5/graph-todo.git
$ cd graph-todo

--- install dependencies is not required to run project ---
$ cd client
$ npm install

$ cd ../server
$ npm install

$ cd ..

--- docker compose ---
$ npm run docker:dev
```

After run project, the following success message appears in the terminal:

<img width="504" alt="Screenshot 2023-04-01 at 17 52 14" src="https://user-images.githubusercontent.com/83282533/229300775-e2d0fca0-c5f6-4ba4-851e-85c45383c3e4.png">

## Routers

Having project running, you can visit the following routers:

- **Client**: http://localhost:3050/

- **Apollo Server**: http://localhost:3050/graphql

- **Mongo-Express**: http://localhost:8081

## Available Scripts

- **`$ npm run docker:dev`** start dev mode project

- **`$ npm run docker:pro`** production build (MongoDB access is required)

- **`$ npm run docker:server:test`** run server test

- **`$ npm run docker:client:test`** run client test
