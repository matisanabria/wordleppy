let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)]

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
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");

  ROW.className = "row";

  // Si la palabra tiene menos de 5 letras no hace nada
  if (intento.length < 5) {
    return;
  }

  for (let i = 0; i < palabra.length; i++) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";

    if (intento[i] === palabra[i]) {
      SPAN.innerHTML = intento[i];
      SPAN.style.backgroundColor = "#43a047";
    } else if (palabra.includes(intento[i])) {
      SPAN.innerHTML = intento[i];
      SPAN.style.backgroundColor = "#d1b036";
    } else {
      SPAN.innerHTML = intento[i];
      SPAN.style.backgroundColor = "#757575";
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
  if (intentos === 0) {
    terminar("<h1>PERDISTE!😖</h1>");
  }
  intentos--;
}
// Si el juego termina, deshabilita los input y muestra el mensaje enviado anteriormente
function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
}
