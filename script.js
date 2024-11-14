// script.js

function ocultarIndice() {
  const lateral = document.getElementById("lateral");
  const lateralizquierdo = document.getElementById("lateral-izquierdo");
  const principal = document.getElementById("principal");
  const boton = document.getElementById("boton");
  const lateralRetoj = document.getElementById("lateralRetoj");

  principal.classList.toggle("otro");
  boton.classList.toggle("oculto");
  lateralizquierdo.classList.toggle("oculto");
  lateralRetoj.classList.toggle("oculto");
  lateral.classList.toggle("oculto");
}

// Leer el identificador de la página desde el meta o el body
const pageId = document.querySelector('meta[name="page-id"]')?.content;

// Seleccionar todos los enlaces del acordeón
const links = document.querySelectorAll("details a");

// Aplicar el estilo activo si el href coincide con el identificador de la página
links.forEach((link) => {
  const href = link.getAttribute("href").split(".")[0]; // Extrae solo la parte antes del .html
  if (href === pageId) {
    link.style.backgroundColor = "#a52a2a80"; // Cambia el color de fondo
  }
});
