
CREATE DATABASE gastos;
USE gastos;

-- ==========================================
-- TABLA: CATEGORIAS
-- ==========================================

CREATE TABLE categorias (
    cat_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

-- ==========================================
-- TABLA: TRANSACCIONES
-- ==========================================

CREATE TABLE transacciones (
    ts_id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    monto DECIMAL(10,2) NOT NULL,
    categoria_id INT NOT NULL,
    fecha DATE NOT NULL,
    tipo ENUM('INGRESO', 'GASTO') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_categoria
        FOREIGN KEY (categoria_id)
        REFERENCES categorias(cat_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ==========================================
-- REGISTRO DE CATEGORÍAS
-- ==========================================

INSERT INTO categorias (nombre)
VALUES
('Alimentacion'),
('Salario'),
('Transporte'),
('Servicios'),
('Arriendo'),
('Salud'),
('Educacion'),
('Entretenimiento'),
('Otros');

-- ==========================================
-- REGISTRO DE TRANSACCIONES DE PRUEBA
-- ==========================================

INSERT INTO transacciones (
    descripcion,
    monto,
    categoria_id,
    fecha,
    tipo
)
VALUES
('Compra supermercado', 150000, 1, '2026-06-24', 'GASTO'),
('Pago salario', 2500000, 2, '2026-06-24', 'INGRESO'),
('Pasaje de bus', 12000, 3, '2026-06-24', 'GASTO'),
('Pago energía', 85000, 4, '2026-06-23', 'GASTO'),
('Pago arriendo', 800000, 5, '2026-06-20', 'GASTO'),
('Consulta médica', 50000, 6, '2026-06-18', 'GASTO'),
('Compra de libros', 90000, 7, '2026-06-15', 'GASTO'),
('Salida a cine', 45000, 8, '2026-06-12', 'GASTO'),
('Trabajo freelance', 500000, 9, '2026-06-10', 'INGRESO');

-- ==========================================
-- CONSULTAR TODAS LAS TRANSACCIONES
-- ==========================================

SELECT
    ts.ts_id,
    ts.descripcion,
    ts.monto,
    ts.fecha,
    ts.tipo,
    c.nombre AS categoria,
    ts.created_at
FROM transacciones ts
INNER JOIN categorias c
    ON ts.categoria_id = c.cat_id
ORDER BY ts.ts_id DESC;

-- ==========================================
-- TOTAL DE INGRESOS
-- ==========================================

SELECT
    SUM(monto) AS total_ingresos
FROM transacciones
WHERE tipo = 'INGRESO';

-- ==========================================
-- TOTAL DE GASTOS
-- ==========================================

SELECT
    SUM(monto) AS total_gastos
FROM transacciones
WHERE tipo = 'GASTO';

-- ==========================================
-- SALDO DISPONIBLE
-- ==========================================

SELECT
(
    IFNULL(
        (
            SELECT SUM(monto)
            FROM transacciones
            WHERE tipo = 'INGRESO'
        ),
        0
    )
    -
    IFNULL(
        (
            SELECT SUM(monto)
            FROM transacciones
            WHERE tipo = 'GASTO'
        ),
        0
    )
) AS saldo_actual;