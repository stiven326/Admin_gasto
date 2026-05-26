CREATE DATABASE gastos;

use gastos;

create table categorias(
    cat_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)
);

create table transacciones(
    ts_id int PRIMARY KEY AUTO_INCREMENT,
    monto DECIMAL(10,2),
    categoria_id INT,
    fecha date,

    Foreign Key (categoria_id) REFERENCES categorias(cat_id)
);

select * from transacciones;

insert into categoria(nombre)
VALUES ('alimentacion'), ('salario'), ('transporte');

insert into transacciones(monto, cat_id, fecha)
VALUES(1000, 1, '2026-05-26'),
(10000, 2, '2026-05-26');