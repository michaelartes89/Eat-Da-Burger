DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(155) NOT NULL,
    burgerToppings VARCHAR(355) NOT NULL,
    eaten BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
)