document.getElementById('app').innerHTML = `Bienvenido años`;

// concat strings
let string = 'Java' + 'Script';
// console.log(string);

// let object = [1,2,3];
// console.log(object);

// let other = new Array();
// console.log(other);

// let date = new Date();
// console.log(date);
// console.log(date.getTime());

// otra forma de for

const array = [1, 2, 3, 4, 5]
const set = new Set([5, 6, 7, 8])
const map = new Map();
map.set('nombre', 'juan');
map.set('apellido', 'Gómez');
const object = {
  'model': 'chevrolet',
  'color': 'red'}

// when values are wanted

for (let numbers of array) {
  console.log(numbers)
}

for (let numbers of set.values()) {
  console.log(numbers);
}

for (let person of map.values()) {
  console.log(person);
}

for (let car in object) {
  console.log(`${object[car]}`); //otra forma de imprimir values
  console.log(object[car]); // imprime solo los values
  console.log(object); // imprime el objeto completo
}

// when entries(keys and values) are wanted

for (let numbers of array.entries()) {
  console.log(numbers)
}

for (let numbers of set.entries()) {
  console.log(numbers);
}

for (let person of map.entries()) {
  console.log(person);
}

for (let car of Object.entries(object)) {
  console.log("<<<<<<<")
  console.log(car);
}

// when keys are wanted

for (let numbers of array.keys()) {
  console.log(numbers)
}

for (let numbers of set.keys()) {
  console.log(numbers);
}

for (let person of map.keys()) {
  console.log(person);
}

// iterate with map

const number = array.map(function(array) {
  console.log(array)
});

// iterate with forEach

array.forEach(function(array, index) {
  console.log(array, index); // print values, print indexes of each value
});

// iterate on a html tags

const lists = document.getElementsByTagName('li');

for (list of lists) {
  console.log(list);
}

// scope

let a = 'a';
const b = 'b';

function scope() {
  a = 'A';
  console.log(a + b);
}

scope()