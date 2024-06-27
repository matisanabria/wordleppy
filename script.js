let intentos = 6;
const palabra = "APPLE";

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


function intentar() {
  // Leer intento al presionar botón
  const intento = leerIntento();
  console.log(intento);

  // Verificar cada letra, si acierta "verde", si está mal la posición de la letra "amarillo", y si está mal "gris"
  for (let i in palabra) {
    if (intento[i] === palabra[i]) {
      console.log(intento[i], "VERDE");
    } else if (palabra.includes(INTENTO[i])) {
      console.log(intento[i], "AMARILLO");
    } else {
      console.log(intento[i], "GRIS");
    }
  }

  // Si gana se envía un mensaje de que ganó a la función terminar
  if (intento === palabra) {
    terminar("<h1>GANASTE!😀</h1>");
    return;
  }

  // Se restan intentos por cada turno, si llega a 0, pierde y envía un mensaje de que perdió a la función terminar
  intentos--;
  if (intentos === 0) {
    terminar("<h1>PERDISTE!😖</h1>");
  }

  // Si el juego termina, deshabilita los input y muestra el mensaje enviado anteriormente
  function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
  }
}
