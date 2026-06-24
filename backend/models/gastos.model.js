const db = require('../config/db');
class GastoModel {

    static async obtenerGastos() {

        const [rows] = await db.query(`
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
            ORDER BY ts.ts_id DESC
        `);

        return rows;
    }

    static async crearGasto(datos) {

        const {
            descripcion,
            monto,
            categoria_id,
            fecha,
            tipo
        } = datos;

        const [result] = await db.query(`
            INSERT INTO transacciones
            (
                descripcion,
                monto,
                categoria_id,
                fecha,
                tipo
            )
            VALUES (?, ?, ?, ?, ?)
        `,
        [
            descripcion,
            monto,
            categoria_id,
            fecha,
            tipo
        ]);

        return result;
    }

    static async eliminarGasto(id) {

        const [result] = await db.query(
            'DELETE FROM transacciones WHERE ts_id = ?',
            [id]
        );

        return result;
    }
}

module.exports = GastoModel;