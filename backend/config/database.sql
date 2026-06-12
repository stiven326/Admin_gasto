CREATE DATABASE gastos;

USE gastos;

CREATE TABLE categorias (
    cat_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE transacciones (
    ts_id INT PRIMARY KEY AUTO_INCREMENT,
    monto DECIMAL(10,2) NOT NULL,
    categoria_id INT NOT NULL,
    fecha DATE NOT NULL,

    FOREIGN KEY (categoria_id)
        REFERENCES categorias(cat_id)
);

INSERT INTO categorias (nombre)
VALUES
('alimentacion'),
('salario'),
('transporte');

INSERT INTO transacciones (monto, categoria_id, fecha)
VALUES
(1000, 1, '2026-05-26'),
(10000, 2, '2026-05-26');

SELECT * FROM transacciones;

SELECT * FROM categorias;

SELECT
    t.ts_id,
    t.monto,
    c.nombre AS categoria,
    t.fecha
FROM transacciones t
INNER JOIN categorias c
    ON t.categoria_id = c.cat_id;