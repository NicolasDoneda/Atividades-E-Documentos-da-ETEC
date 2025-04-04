create database if not exists conteudoIntermedio;
use conteudoIntermedio;  

create table teste01(
id int primary key auto_increment,
nome varchar (50),
idade int,
id_curso int,
 foreign key (id_curso) REFERENCES teste02 (id)
 );

create table teste02(
id INT PRIMARY KEY AUTO_INCREMENT,
nome_curso VARCHAR(50),
periodo VARCHAR(50)

);
INSERT INTO teste02
(nome_curso, periodo) values
('ADS', 'Noturno'),
('Logistica', 'Manhã'),
('ADM', 'Tarde');

INSERT INTO teste01 (nome, idade, id_curso) values
('Claudio', 27, 2),
('Manoel', 53, 1),
('Maria', 32, 3);


