// getElementById

let element = document.getElementById('hero');
element = document.getElementById('header').className; //devuelve la clase
element = document.getElementById('encabezado').textContent; //devuelve el contenido
element = document.getElementById('encabezado').innerText; //devuelve el contenido


console.log("element", element);

// querySelector

const encabezado = document.querySelector('.header'); // seleccionas el elemento como lo harías en css
const enlace = document.querySelector('#principal a:first-child'); // seleccionas el elemento como lo harías en css

console.log("enlace", enlace);
console.log("encabezado", encabezado);

