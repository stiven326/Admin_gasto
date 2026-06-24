const model = require('../models/gastos.model');

class GastosController {

    static async obtenerGastos(req, res) {

        try {

            const gastos =
                await model.obtenerGastos();

            res.json(gastos);

        } catch (error) {

            res.status(500).json({
                mensaje: error.message
            });
        }
    }

    static async crearGasto(req, res) {

        try {

            const resultado =
                await model.crearGasto(req.body);

            res.json(resultado);

        } catch (error) {

            res.status(500).json({
                mensaje: error.message
            });
        }
    }

    static async eliminarGasto(req, res) {

        try {

            const resultado =
                await model.eliminarGasto(req.params.id);

            res.json(resultado);

        } catch (error) {

            res.status(500).json({
                mensaje: error.message
            });
        }
    }
}

module.exports = GastosController;