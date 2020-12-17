const squareSize = 5;

function Renderer(context) {
  this.context = context;
}

Renderer.prototype.drawCell = function(x, y, alive) {
  this.context.fillStyle = alive ? "#82d7ff" : "#fff";
  this.context.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
}