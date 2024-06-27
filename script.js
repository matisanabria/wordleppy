const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar() {

  const INTENTO = leerIntento();
  console.log(INTENTO);
}
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

