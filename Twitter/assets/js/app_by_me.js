let tweetList = document.getElementById('lista-tweets');

function events() {
  document.getElementById('formulario').addEventListener('submit', addTweet);
  tweetList.addEventListener('click', deleteTweet);
  document.addEventListener('DOMContentLoaded', savedTweetsLocalStorage);
}

events();

// function to add a tweet in tweetlist
function addTweet(e) {
  e.preventDefault;

  let tweet = document.getElementById('tweet').value;
  let li = document.createElement('li');
  li.textContent = tweet;
  tweetList.appendChild(li);

  let deleteButton = document.createElement('a');
  deleteButton.className = 'borrar-tweet';
  deleteButton.textContent = 'X';
  li.appendChild(deleteButton);
  addTweetLocalStorage(tweet);
}

// function to delete tweet from tweetlist
function deleteTweet(e) {
  e.preventDefault();

  if (e.target.className === 'borrar-tweet')
    e.target.parentElement.remove();
  deleteTweetLocalStorage(e.target.parentElement.innerText);
}

// function to add a tweet to local storage
function addTweetLocalStorage(tweet) {
  let tweets;

  tweets = checkTweetsLocalStorage();
  tweets.push(tweet);
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// function to check tweets in local storage
function checkTweetsLocalStorage() {
  let tweets;
  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}

// function to display in browser tweets saved in local storage
function savedTweetsLocalStorage() {
  let tweets = checkTweetsLocalStorage();
  tweets.forEach(tweet => {
    let li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    let deleteButton = document.createElement('a');
    deleteButton.className = 'borrar-tweet';
    deleteButton.textContent = 'X';
    li.appendChild(deleteButton);
  });
}

// function to delete a tweet from local storage
function deleteTweetLocalStorage(tweet) {
  let tweets, deleteTweet;

  deleteTweet = tweet.substring(0, tweet.length - 1);
  tweets = checkTweetsLocalStorage();
  tweets.forEach((tweet, index) => {
      if (deleteTweet === tweet)
        tweets.splice(index, 1);
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));
}