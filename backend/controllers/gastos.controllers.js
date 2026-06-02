const model = require('../models/gastos.model')

class GastosController{
    static async obtenerGastos(req,res){
        const gastos = await model.obtenerGastos()
        res.json(gastos)

    }
}

//(async () => {
//    const gastos = await GastosController.obtenerGastos()
//})()<}

module.exports = GastosController