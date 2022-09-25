CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY ,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(200) 
    

); 