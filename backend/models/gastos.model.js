const db = require('../config/db')

class GastoModel{
    static async obtenerGastos(){
        const [rows] = await db.query('SELECT ct.nombre, ts.monto, ts.fecha FROM transacciones ts inner JOIN categorias ct on ts.categoria_id = ct.cat_id LIMIT 100')
        return rows
    } 
}

module.exports = GastoModel