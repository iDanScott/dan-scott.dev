var game = null;

function initialise() {
  var canvas = initialiseCanvas();
  var context = initialiseContext(canvas);
  game = new Game(context, newGeneration);
  game.loop();
}

function relMouseCoords(event){
  var totalOffsetX = 0;
  var totalOffsetY = 0;
  var canvasX = 0;
  var canvasY = 0;
  var currentElement = this;

  do{
      totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
      totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  }
  while(currentElement = currentElement.offsetParent)

  canvasX = event.pageX - totalOffsetX;
  canvasY = event.pageY - totalOffsetY;

  return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

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

function btnClear_click() {
  game.clear(); 
}

function game_click(e) {
  game.clicked.call(game, this.relMouseCoords(e));
}

function bindEvents() {
  document.getElementById("game").addEventListener("click", game_click);
  document.getElementById("btnPauseResume").addEventListener("click", btnPauseResume_click);
  document.getElementById("rngSpeed").addEventListener("change", rngSpeed_change);
  document.getElementById("btnClear").addEventListener("click", btnClear_click);
}

function initialiseContext(canvas) {
  var context = canvas.getContext("2d");
  return context;
}

function initialiseCanvas() {
  var canvas = document.getElementById("game");
  canvas.width = 1500;
  canvas.height = 1050;
  return canvas;
}

document.addEventListener('DOMContentLoaded', function() { 
  initialise();
  bindEvents(); 
});