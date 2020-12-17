var game = null;

function initialise() {
  var canvas = initialiseCanvas();
  var context = initialiseContext(canvas);
  game = new Game(context, newGeneration);
  game.loop();
}

function newGeneration(generation) {
  document.getElementById("lblGeneration").innerText = generation;
}

function btnPauseResume_click() {
  if (!game.paused) {
    game.pause();
    this.innerText = "Resume";
  } else {
    game.resume();
    this.innerText = "Pause";
  }
}

function rngSpeed_change() {
  game.setSpeed(this.value);
}

function bindEvents() {
  document.getElementById("btnPauseResume").addEventListener("click", btnPauseResume_click);
  document.getElementById("rngSpeed").addEventListener("change", rngSpeed_change);
}

function initialiseContext(canvas) {
  var context = canvas.getContext("2d");
  return context;
}

function initialiseCanvas() {
  var canvas = document.getElementById("game");
  canvas.width = 1000;
  canvas.height = 1000;
  return canvas;
}

document.addEventListener('DOMContentLoaded', function() { 
  initialise();
  bindEvents(); 
});