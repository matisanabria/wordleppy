let intentos = 6;
const palabra = "APPLE";

// Obtener elementos del HTML
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
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");

  ROW.className = "row";

  for (let i in palabra) {
    const SPAN = document.createElement('span');
    SPAN.className = 'letter';
    // Verificar cada letra, si acierta "verde", si está mal la posición de la letra "amarillo", y si está mal "gris"
    for (let i in palabra) {
      if (intento[i] === palabra[i]) {
        SPAN.innerHTML = intento[i];
        SPAN.style.backgroundColor = "green";
      } else if (palabra.includes(intento[i])) {
        SPAN.innerHTML = intento[i];
        SPAN.style.backgroundColor = "yellow";
      } else {
        SPAN.innerHTML = intento[i];
        SPAN.style.backgroundColor = "grey";
      }
      ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    // Si gana se envía un mensaje de que ganó a la función terminar
    if (intento === palabra) {
      terminar("<h1>GANASTE!😀</h1>");
      return;
    }

    // Se restan intentos por cada turno, si llega a 0, pierde y envía un mensaje de que perdió a la función terminar
    console.log(intentos);
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
  intentos--;
}
