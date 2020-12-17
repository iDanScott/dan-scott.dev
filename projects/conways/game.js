function Game(context, newGenerationCallback) {
  this.context = context;
  this.renderer = new Renderer(context);
  this.loopSpeed = 10;
  this.data = new Array(200);
  this.generation = 0;
  this.newGenerationCallback = newGenerationCallback;
  for (x = 0; x < this.data.length; x++) {
    this.data[x] = new Array(200);  
    for (var y = 0; y < this.data[x].length; y++) {
      this.data[x][y] = new Cell(x, y, Math.random() < 0.5);
    }
  };
}

Game.prototype.loop = function() {
  var game = this;

  var time = setInterval(function() {
    game.nextGeneration.call(game);
    game.generation++;
    game.newGenerationCallback(game.generation);
  }, this.loopSpeed);
}

Game.prototype.nextGeneration = function() {
  for (var x = 0; x < this.data.length; x++) {
    for (var y = 0; y < this.data[x].length; y++) {

      var cell = this.data[x][y];
      this.draw(cell);
      cell.wasAlive = cell.alive;

      this.computeNextGeneration(cell);
    }
  }
}

Game.prototype.computeNextGeneration = function(cell) {
  var activeNeighbours = this.activeNeighbours(cell);
  cell.alive = activeNeighbours == 3 ||
  (
    cell.alive && 
    activeNeighbours == 2
  );
}

Game.prototype.activeNeighbours = function(cell) {
  var x = cell.x; 
  var y = cell.y;
  var maxX = this.data.length - 1;
  var maxY = this.data[0].length - 1;

  var alive = 0;
  var xLeftWrap = x == 0 ? maxX : x - 1;
  var xRightWrap = x == maxX ? 0 : x + 1;
  var yUpWrap = y == 0 ? maxY : y - 1;
  var yDownWrap = y == maxY ? 0 : y + 1;
  alive += this.data[xLeftWrap][y].wasAlive;
  alive += this.data[xLeftWrap][yUpWrap].wasAlive;
  alive += this.data[xLeftWrap][yDownWrap].wasAlive;
  alive += this.data[xRightWrap][y].wasAlive;
  alive += this.data[xRightWrap][yUpWrap].wasAlive;
  alive += this.data[xRightWrap][yDownWrap].wasAlive;
  alive += this.data[x][yUpWrap].wasAlive;
  alive += this.data[x][yDownWrap].wasAlive;

  return alive;
}

Game.prototype.draw = function(cell) {
  if (cell.wasAlive != cell.alive)
    this.renderer.drawCell(cell.x, cell.y, cell.alive);
}

Game.prototype.setLoopSpeed = function(speed) {
  this.loopSpeed = speed;
}