CREATE DATABASE wild_circus;
USE wild_circus;
CREATE TABLE `customer` (
    `id` int auto_increment NOT NULL PRIMARY KEY,
    `firstname` varchar(50) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    `email` varchar(200) NOT NULL,
);