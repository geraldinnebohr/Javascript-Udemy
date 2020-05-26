const listaTweets = document.getElementById('lista-tweets');

function events() {
  document.getElementById('formulario').addEventListener('submit', addTweet);
  listaTweets.addEventListener('click', deleteTweet);
}

events();

function addTweet(e) {
  e.preventDefault();
  const tweet = document.getElementById('tweet').value;
  const li = document.createElement('li');
  li.textContent = tweet;

  const deleteButton = document.createElement('a');
  deleteButton.className = 'borrar-tweet';
  deleteButton.textContent = 'X';
  li.appendChild(deleteButton);

  document.getElementById('lista-tweets').appendChild(li);
  addTweetLocalStorage(tweet);
}

function deleteTweet(e) {
  e.preventDefault();
  if (e.target.className == 'borrar-tweet') {
    e.target.parentElement.remove();
  }
}

function addTweetLocalStorage(tweet) {
  localStorage.setItem('tweets', tweet);
}
