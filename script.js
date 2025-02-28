function agregarServicio() {
    let div = document.createElement("div");
    div.classList.add("gasto");
    div.innerHTML = `
        <input type="text" placeholder="Servicio (Ej: Internet)" class="nombre">
        <input type="number" placeholder="Monto" class="monto">
    `;
    document.getElementById("servicios").appendChild(div);
}

function agregarGasto() {
    let div = document.createElement("div");
    div.classList.add("gasto");
    div.innerHTML = `
        <input type="text" placeholder="Gasto (Ej: Transporte)" class="nombre">
        <input type="number" placeholder="Monto" class="monto">
    `;
    document.getElementById("gastosApartes").appendChild(div);
}

function calcular() {
    let ingreso = parseFloat(document.getElementById("ingreso").value) || 0;
    
    let totalGastos = 0;
    document.querySelectorAll("#servicios .monto, #gastosApartes .monto").forEach(input => {
        totalGastos += parseFloat(input.value) || 0;
    });

    let saldoRestante = ingreso - totalGastos;

    document.getElementById("totalGastos").textContent = totalGastos.toFixed(2);
    document.getElementById("saldoRestante").textContent = saldoRestante.toFixed(2);
}
