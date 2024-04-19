CREATE DATABASE logistica_service;

USE logistica_service;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '3219705394';
FLUSH PRIVILEGES;


SELECT * FROM envios;
