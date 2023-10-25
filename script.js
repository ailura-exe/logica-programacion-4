
function obtenerSecuencia() {
    const numeroInput = document.getElementById("numero");
    const numero = parseInt(numeroInput.value);
  
    if (isNaN(numero) || numero < 0) {
      alert("Ingresa un número válido y positivo.");
      return;
    }
  
    let secuencia = [];
    
    for (let i = 0; i < numero; i++) {
      if (i < 2) {
        secuencia.push(i);
      } else {
        let nuevoNumero = secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(nuevoNumero);
      }
    }
    console.log(secuencia);
    document.getElementById("numero").value="";
    const resultado = document.querySelector(".secuenciaObtenida");
    resultado.innerHTML = "Secuencia: " + secuencia.join(", ");
}
