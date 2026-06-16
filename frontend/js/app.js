let registro = document.getElementById('transacciones');
fetch ('http://localhost:3000/api/gastos').then(datos => datos.json()).then(registro =>{

    for(i=0;i<=5;i++){
    registro.innerHTML += `<div class="fila ">
                            <div>Ingreso</div>
                            <div>20.000</div>
                        </div>`
    }
})
