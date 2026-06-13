create database pets_db;
use pets_db;

create table users(
id int auto_increment primary key,
name varchar(40) not null,
email varchar(40) not null,
password varchar(20) not null,
phone varchar(13) not null,
role varchar(6) not null
)

create table pets(
id int auto_increment primary key,
name varchar(40) not null,
age int not null,
species varchar(20) not null,
size varchar(6) not null,
status varchar(9) not null,
description varchar(100)
)

create table adoptions(
id int auto_increment primary key,
user_id int,
pet_id int,
adoption_date date
)