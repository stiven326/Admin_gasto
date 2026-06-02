const db = require('../config/db')

class GastoModel{
    static async obtenerGastos(){
        const [rows] = await db.query('select * from transacciones')
        return rows
    } 
}

module.exports = GastoModel