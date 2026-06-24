const express = require('express');
const router = express.Router();
const GastosController =
require('../controllers/gastos.controllers');

router.get(
    '/gastos',
    GastosController.obtenerGastos
);

router.post(
    '/gastos',
    GastosController.crearGasto
);

router.delete(
    '/gastos/:id',
    GastosController.eliminarGasto
);

module.exports = router;