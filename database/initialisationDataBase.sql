CREATE DATABASE wild_circus;
USE wild_circus;
CREATE TABLE `customer` (
    `id_customer` int auto_increment NOT NULL PRIMARY KEY,
    `firstname` varchar(50) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    `email` varchar(200) NOT NULL
);

CREATE TABLE `show` (
    `id_show` int auto_increment NOT NULL PRIMARY KEY,
    `city` varchar(100) NOT NULL,
    `date_show` varchar(50) NOT NULL,
    `number_place` int NOT NULL
);