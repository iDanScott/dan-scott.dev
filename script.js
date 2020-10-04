(function() {

  var currentJoke = 0;
  var jokes = [
    'What do programmers do when they\'re hungry? Have a byte.',
    'Why does the java programmer wear glasses? Because they don\'t C#.',
    'How does a mountain see? It peaks.',
    'Javascript is a well designed programming language'
  ];

  document.addEventListener("DOMContentLoaded", function() {
    populateJoke();
  });

  document.querySelector("#toggleJokes").addEventListener("click", function() {
    populateJoke();
  });

  function getJokeIndex() {
    currentJoke++;
    if (currentJoke > jokes.length - 1) {
      currentJoke = 0;
    }
    return currentJoke;
  }

  function populateJoke() {
    var jokeIndex = getJokeIndex();
    var joke = jokes[jokeIndex];
    document.querySelector(".jokes li").innerText = joke;
  }

})();