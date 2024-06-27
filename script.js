let intentos = 6
const palabra = "APPLE"

// Definir botón
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

// Leer el intento
function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

// Leer intento al presionar botón
function intentar() {
  const intento = leerIntento();
  console.log(intento);

  
  for (let i in palabra) {
    if (intento[i] === palabra[i]) {
      console.log(intento[i], "VERDE");
    } else if (palabra.includes(INTENTO[i])) {
      console.log(intento[i], "AMARILLO");
    } else {
      console.log(intento[i], "GRIS");
    }
  }
  if (intento === palabra) {
    return "ganaste";
  }
  intentos--
  if (intentos===0){
    console.log("Perdiste...")
  }
}
