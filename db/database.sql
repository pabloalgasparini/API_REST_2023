CREATE DATABASE IF NOT EXISTS api_rest;

USE api_rest;

CREATE TABLE empeleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL, 
    salary INT(5)DEFAULT NULL, 
    PRIMARY KEY (id)
    );

    DESCRIBE empeleados;

INSERT INTO empeleados VALUES
(1, 'JUAN', 1000),
(2, 'RICARDON', 2000),
(3, 'ENZO', 2500),
(4, 'JULIO', 1500);