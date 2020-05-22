// getElementById

let element = document.getElementById('hero');
element = document.getElementById('header').className; //devuelve la clase
element = document.getElementById('encabezado').textContent; //devuelve el contenido
element = document.getElementById('encabezado').innerText; //devuelve el contenido


console.log("element", element);

// querySelector

const encabezado = document.querySelector('.header'); // seleccionas el elemento como lo harías en css
const link = document.querySelector('#principal a:first-child'); // seleccionas el elemento como lo harías en css

console.log("enlace", link);
console.log("encabezado", encabezado);

// Traversing

const cursos = document.querySelectorAll('.card');
console.log("cursos", cursos[0].parentElement); //devuelve nodo padre en el dom
console.log("cursos", cursos[0].children); //devuelve nodo hijo

// crear elementos dentro del html
const enlace = document.createElement('a'); //se crea el elemento nodo
enlace.className = '.clase'; //se le añade la clase
enlace.id = '#nuevo'; //se le añade un enlace
enlace.setAttribute('href', '#'); //se le añade un atributo (primer item) y el valor del atributo (segundo item)
enlace.innerText = 'estoy creado desde js'; //ponerle texto al elemento
document.querySelector('#principal').appendChild(enlace); //ponerlo dentro del html

// crear nuevo elemento dentro del html
const nuevoHeader = document.createElement('h2'); //crear el elemento nuevo
nuevoHeader.id = '#encabezado';
nuevoHeader.innerText ='blaaaaaaaa';
// nuevoHeader.appendChild(document.createTextNode('Soy el nuevo header')); //ponerle texto
const anterior = document.querySelector('#encabezado'); // el elemento que está actualmente en el dom y que se va a reemplazar
const padre = document.querySelector('#lista-cursos'); //padre del elemento anterior
padre.replaceChild(nuevoHeader, anterior); //coger el padre y reemplazar el hijo anterior con el nuevo

console.log("nuevoHeader", nuevoHeader)

// cambiar clases o atrbuutos

const liink = document.querySelectorAll('.enlace');
liink[0].remove(); //remove element

const classExample = document.querySelector('header');
classExample.className; // to get the class
classExample.classList, // lista de todas las clases que tiene
classExample.classList.add('nueva-clase');
classExample.classList.remove('nueva-clase');

const attributeExample = document.querySelector('a');
attributeExample.getAttribute('href');
attributeExample.setAttribute('id', 'laaaa');
console.log(attributeExample.hasAttribute('id'));
attributeExample.removeAttribute('id');
console.log(attributeExample)

// Event Listeners

const elemento = document.querySelector('#logo');

elemento.addEventListener('mouseup', function(e) {
  e.preventDefault();
  console.log(e.type);
})

// Eventos para input
const inputEvent = document.querySelector('#buscador');

inputEvent.addEventListener('input', function(e) {
  e.value;
  console.log(e.type);
})
