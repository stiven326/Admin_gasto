let transaccion = document.getElementById('transacciones');
fetch ('http://localhost:3000/api/gastos').then(datos => datos.json()).then(registro =>{

    for(i=0;i<=5;i++){

        if(registros.data[i].tipo == 1){
            registro.innerHTML += `<div class="fila gastos">
            <div>${registro.data[i].nombre}</div>
            <div>${registro.data[i].monto}</div>
        </div>`

         }else{
            transaccion.innerHTML += `<div class="fila ingresos">
            <div>${registro.data[i].nombre}</div>
            <div>${registro.data[i].monto}</div>`
         }
    }
})
