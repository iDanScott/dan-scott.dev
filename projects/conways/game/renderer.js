function Renderer(context) {
  this.context = context;
  this.squareSize = 15;
}

function getColour(alive, intensity) {
  if (!alive) 
    return "rgba(255, 255, 255, 1)";

  return "rgba(0, 0, 255, " + Math.min(0.2 + (intensity / 10), 1) + ")";
}

Renderer.prototype.drawCell = function(x, y, alive, intensity) {
  this.context.fillStyle = getColour(alive, intensity);
  this.context.fillRect(x * this.squareSize + 1, y * this.squareSize + 1, this.squareSize - 2, this.squareSize - 2);
}

Renderer.prototype.drawGridLines = function(width, height) {
  for (var x = 0; x <= width / this.squareSize; x++) {
    this.context.beginPath();
    this.context.moveTo(x * this.squareSize, 0);
    this.context.lineTo(x * this.squareSize, height);
    this.context.stroke();
  }

  for (var y = 0; y <= height / this.squareSize; y++) {
    this.context.beginPath();
    this.context.moveTo(0, y * this.squareSize);
    this.context.lineTo(width, y * this.squareSize);
    this.context.stroke();
  }
}