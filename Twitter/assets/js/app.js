const tweetsList = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners() {
  // cuando se envía el tweet
  document.querySelector('#formulario').addEventListener('submit', addTweet);

  // Delete tweets
  tweetsList.addEventListener('click', deleteTweet);

  // Contenido cargado
  document.addEventListener('DOMContentLoaded', readyLocalStorage);
}

// Funciones

function addTweet(e) {
  e.preventDefault();

  // Leer el valor del textarea del form
  const tweet = document.getElementById('tweet').value;

  // Crear botón de eliminar tweet
  const deleteButton = document.createElement('a');
  deleteButton.className = 'borrar-tweet';
  deleteButton.textContent = 'X';

  // Crear elemento <li> y añadir el tweet creado
  const li = document.createElement('li');
  li.textContent = tweet;

  //Añadir el tweet a nuestra tweetsList
  tweetsList.appendChild(li);

  // Añade el botón de borrar a la lista
  li.appendChild(deleteButton);

  // Añadir a local storage
  addTweetLocalStorage(tweet);
}

function deleteTweet(e) {
  e.preventDefault();
  if (e.target.className === 'borrar-tweet') {

    // comprobar que li es el padre del botón y borrar
    e.target.parentElement.remove();

    //pasamos el texto del tweet a la función con la X del botón
    deleteTweetLocalStorage(e.target.parentElement.textContent);
  }
}

function addTweetLocalStorage(tweet) {
  let tweets;

  // Llama la función para obtener el arreglo con todos los tweets
  tweets = getTweetsLocalStorage();

  // Añadir nuevo tweet
  tweets.push(tweet);

  // Convertir de arreglo a string para local storage
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsLocalStorage() {
  let tweets;

  // revisa si hay tweet guardados en local storage
  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {

    // Guarda los tweets guardados en un JSON
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets; //retorna un arreglo
}

// Mostrar datos de local storage en la pantalla
function readyLocalStorage() {
  let tweets;

  tweets = getTweetsLocalStorage();
  tweets.forEach(tweet => {
    // Crear botón de eliminar tweet
    const deleteButton = document.createElement('a');
    deleteButton.className = 'borrar-tweet';
    deleteButton.textContent = 'X';

    // Crear elemento <li> y añadir el tweet creado
    const li = document.createElement('li');
    li.textContent = tweet;

    //Añadir el tweet a nuestra tweetsList
    tweetsList.appendChild(li);

    // Añade el botón de borrar a la lista
    li.appendChild(deleteButton);
  });
}

// Delete tweet de local storage
  function deleteTweetLocalStorage(tweet) {
    let tweets, deleteTweet;

    // Elimina la X deltweet
    deleteTweet = tweet.substring(0, tweet.length - 1);

    // obtener todos los tweets nuevamente
    tweets = getTweetsLocalStorage();
    tweets.forEach(function(tweet, index) {

      //comparar el tweet a borrar con el tweet de la lista
      if (deleteTweet === tweet) {
        tweets.splice(index, 1);
      }
    });
  localStorage.setItem('tweets', JSON.stringify(tweets));
  }
