function Cell(x, y, alive) {
  this.x = x;
  this.y = y;
  this.alive = alive;
  this.wasAlive = !alive;
}