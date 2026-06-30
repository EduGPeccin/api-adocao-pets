create database pets_db;
use pets_db;

create table users(
id int auto_increment primary key,
name varchar(40) not null,
email varchar(40) not null,
password varchar(20) not null,
phone varchar(13) not null,
role varchar(7) not null
);

create table pets(
id int auto_increment primary key,
name varchar(40) not null,
age int not null,
species varchar(20) not null,
size varchar(6) not null,
status varchar(9) not null,
description varchar(100)
);

create table adoptions(
id int auto_increment primary key,
user_id int,
pet_id int,
adoption_date date
);

INSERT INTO users (name, email, password, phone, role) VALUES
('Jose Carlo', 'jose@email.com', '123456', '54999999999', 'adopter'),
('Maria Silva', 'maria@email.com', 'senha123', '54988888888', 'adopter'),
('João Souza', 'joao@email.com', 'admin123', '54977777777', 'admin');

INSERT INTO pets (name, age, species, size, status, description) VALUES
('Rex', 3, 'Cachorro', 'large', 'available', 'Muito brincalhão e amigável.'),
('Mimi', 2, 'Gato', 'small', 'available', 'Gata carinhosa e tranquila.'),
('Thor', 5, 'Cachorro', 'large', 'adopted', 'Cão protetor e obediente.'),
('Luna', 1, 'Gato', 'small', 'available', 'Filhote cheia de energia.'),
('Bob', 4, 'Cachorro', 'medium', 'available', 'Adora passeios ao ar livre.');

INSERT INTO adoptions (user_id, pet_id, adoption_date) VALUES
(1, 3, '2026-05-10'),
(2, 2, '2026-06-01'),
(3, 1, '2026-04-12');