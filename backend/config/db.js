const mysql = require('mysql2')

const pool = mysql.createPool(
    {
        user: 'root',
        host: 'localhost',
        password: '',
        port: 3306,
        database: 'gastos'
    }
)

const promisePool = pool.promise()

module.exports = promisePool