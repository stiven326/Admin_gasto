const transacciones =
document.getElementById('transacciones');

const descripcion =
document.getElementById('descripcion');

const monto =
document.getElementById('monto');

const fecha =
document.getElementById('fecha');

const categoria =
document.getElementById('categoria');

const btnIngreso =
document.getElementById('btnIngreso');

const btnGasto =
document.getElementById('btnGasto');

cargarDatos();

function cargarDatos() {

    fetch('http://localhost:3000/api/gastos')

    .then(res => res.json())

    .then(data => {

        transacciones.innerHTML = '';

        data.forEach(item => {

            const clase =
                item.tipo === 'GASTO'
                ? 'gastos'
                : 'ingresos';

            transacciones.innerHTML += `
                <div class="fila ${clase}">
                    <div>${item.categoria}</div>
                    <div>$${item.monto}</div>
                    <div>${item.fecha}</div>
                </div>
            `;
        });

    })

    .catch(error => {
        console.error(error);
    });
}

btnIngreso.addEventListener(
    'click',
    () => guardarMovimiento('INGRESO')
);

btnGasto.addEventListener(
    'click',
    () => guardarMovimiento('GASTO')
);

function guardarMovimiento(tipo) {
    fetch(
        'http://localhost:3000/api/gastos',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                descripcion:
                    descripcion.value,
                monto:
                    monto.value,
                fecha:
                    fecha.value,
                categoria_id:
                    categoria.value,
                tipo:
                    tipo
            })
        }
    )

.then(res => res.json())
.then(() => {
        descripcion.value = '';
        monto.value = '';
        fecha.value = '';
        categoria.value = '';
        cargarDatos();
    })
    .catch(error => {
        console.error(error);
    });
}