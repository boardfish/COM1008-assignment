function swap(square) {
  /*check values of shape x and y against those of white square*/
  /*if next to each other*/
  /*swap places*/
  for (var i = 0; i < grid.length; i++) {
    for (var n = 0; n < grid[i].length; n++) {
      if (grid[i][n] === "white") {
        var whiteX = i;
        var whiteY = n;
      }
      if (grid[i][n] === square) {
        var squareX = i;
        var squareY = n;
      }
    }
  }
  var xDiff = Math.abs(whiteX - squareX);
  var yDiff = Math.abs(whiteY - squareY);
  if ((xDiff<2 && yDiff<2) && (xDiff===0 || yDiff===0)) {
    grid[squareX][squareY] = "white";
    grid[whiteX][whiteY] = square;
    console.log(square, "was swapped");
    redrawGrid()
  }
  else {
    console.log("That's an invalid move.");
  }
}

function redrawGrid() {
  console.log("Redrawing...");
  var firstStageSwapped = false;
  for (var i = 0; i < grid.length; i++) {
    for (var n = 0; n < grid[i].length; n++) {
      var editedSquare = document.getElementById(grid[i][n]);
      editedSquare.setAttribute("x", n*size/3);
      editedSquare.setAttribute("y", (grid.length-i-1)*size/3);
    }
  }
  var winCondition = true;
  if (grid.length !== endGoalGrid.length) {
    winCondition = false;
  }
  for (var i = 0; i < grid.length; i++) {
    for (var n = 0; n < grid.length; n++) {
      if (grid[i][n]!==endGoalGrid[i][n]) {
        winCondition = false;
      }
    }
  }
  if (winCondition) {
    $('#window').slideUp();
    $('#victory').fadeIn(1000);
  }
  console.log(winCondition);
}

function init() {
  /*http://stackoverflow.com/questions/8657444/add-event-listeners-via-an-array-and-for-loop
  Used the jquery version for less lines and because the js one didn't actually
  work. Initially, I tried using list iteration over the grid list defined
  globally further down so that each square could check what was beside it.
  However, a list-based approach
  */
  $('#window').attr("width", size);
  $('#window').attr("height", size);
  $('.square').attr("width", size/3);
  $('.square').attr("height", size/3);
  $('.square').click(function(){
    swap(this.id)
  });
}
// global variables
/*var grid = [["red", "green", "blue"], ["orange", "pink", "white"], ["cyan", "yellow", "purple"]];*/
var size = $(window).width()/3;
var grid = [["purple", "white", "pink"], ["green", "blue", "cyan"], ["red", "orange", "yellow"]];
var endGoalGrid = [["purple", "pink", "white"], ["green", "blue", "cyan"], ["red", "orange", "yellow"]];
// main program body
redrawGrid();
init();
