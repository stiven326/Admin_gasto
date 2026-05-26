const db = require('../config/db')

class GastoModel{
    static async obtenerGastos(){
        const [rows] = await db.query('select * from transacciones')
        console.log(rows)
    } 
}

module.exports = GastoModel