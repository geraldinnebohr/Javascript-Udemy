// Eliminar de Local Storage
localStorage.clear();

// DOM and Scripting
let domDocument;

domDocument = document; // devuelve todo el html
domDocument = document.all; // devuelve un HTMLCollection, it seems array
domDocument = document.head; //devuelve el <head></head>
domDocument = document.domain; // devuelve ip
domDocument = document.URL; // + protocolo y pagina actual
domDocument = document.forms; // todos los forms
domDocument = document.forms[0]; // el primer form
domDocument = document.forms[0].id; // id del primer form
domDocument = document.forms[0].className; // clases del primer form como string
domDocument = document.forms[0].classList; // lista de todas las clases del form 1
domDocument = document.images; // info de imagenes del documento como HTML collection
domDocument = document.images[2].getAttribute('src'); // devuelve unicamente el atributo especificado

// Convertir HTMLcollection to array
let images = document.images;
let imagesArray = Array.from(images);
console.log(imagesArray);

imagesArray.forEach(function(image) {
  console.log(image);
})



