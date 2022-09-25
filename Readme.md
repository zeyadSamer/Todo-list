# Todo List Project

## Description

This project aims to give the user an app that saves his tasks that he wants to accomplish

## How to use the app

The user can add todos by the upper input task bar , delete tasks, save tasks, edit tasks and complete them


## Installation and app running



### Installing the backend

- First change directory to api: 
```sh
cd api
```

- make sure to add .env file in API directory and
add required configurations as:
    - POSTGRES_HOST
    - POSTGRES_DB
    - POSTGRES_USER
    - POSTGRES_PASSWORD




- Use the docker compose file to run the docker command: 
```sh
 docker compose up
 ```
 to run the postgres image container

- Run the server by: 
```sh
npm run watch
```

- build sql tables using :
```sh
db-migrate up
```
- in case you want to drop the tables run:

```sh
db-migrate down
```
### Installing frontend

- first change directory to app: 

```sh
cd app
```
- install the dependencies: **
```sh 
npm i
```
- run the app by :
 ```sh 
 npm run start
```

