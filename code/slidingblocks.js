function swap(square) {
  /*check values of shape x and y against those of white square. if next to each
  other, swap places. specifying white was necessary in this case.*/
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
  /*checks that squares are in the same column/row, then checks that they are
  horizontally/vertically neighbouring*/
  var xDiff = Math.abs(whiteX - squareX);
  var yDiff = Math.abs(whiteY - squareY);
  if ((xDiff < 2 && yDiff < 2) && (xDiff === 0 || yDiff === 0)) {
    grid[squareX][squareY] = "white";
    grid[whiteX][whiteY] = square;
    console.log(square, "was swapped."); /*Used this and other console.logs as
    debug, but they're actually very good for following the game itself.*/
    redrawGrid(grid, size)
    winCheck()
  } else {
    console.log("That's an invalid move.");
  }
}

function redrawGrid(grid, size) {
  /*sets each square's x/y coordinates to their new position, should they have
  changed*/
  for (var i = 0; i < grid.length; i++) {
    for (var n = 0; n < grid[i].length; n++) {
      var editedSquare = document.getElementById(grid[i][n]);
      editedSquare.setAttribute("x", n * size / 3);
      editedSquare.setAttribute("y", (grid.length - i - 1) * size / 3);
    }
  }
}

function winCheck() {
  var winCondition = true;
  if (grid.length !== endGoalGrid.length) {
    winCondition = false;
  }
  for (var i = 0; i < grid.length; i++) {
    for (var n = 0; n < grid.length; n++) {
      if (grid[i][n] + "G" !== endGoalGrid[i][n]) {
        winCondition = false;
      }
    }
  }
  if (winCondition) {
    $('#window').slideUp();
    $('#victory').fadeIn(1000);
    console.log("You win!");
  }
}

function init() {
  /*http://stackoverflow.com/questions/8657444/add-event-listeners-via-an-array-and-for-loop
  Used the jquery version for less lines and because the js one didn't actually
  work. Initially, I tried using list iteration over the grid list defined
  globally further down so that each square could check what was beside it.
  However, a list-based approach was better.
  Note: the goal list is still under the square class. However, since its ids
  are all different, it is guaranteed to be unaffected by the swap function.
  */
  $('#window').attr("width", size);
  $('#window').attr("height", size);
  $('#windowGoal').attr("width", size);
  $('#windowGoal').attr("height", size);
  $('.square').attr("width", size / 3);
  $('.square').attr("height", size / 3);
  $('.square').click(function() {
    swap(this.id)
  });
}
/*https://www.freecodecamp.com/challenges/generate-random-whole-numbers-with-javascript
challenge gave me a lead in to how the random function works with integers*/
function nextLevel() {
  console.log("The board is being reset.");
  var colorList = ["red", "orange", "yellow", "green", "blue", "cyan", "purple",
      "pink", "white"
    ] //add more colours to this list to scale the program up to bigger grids.
  var goalcolorList = ["redG", "orangeG", "yellowG", "greenG", "blueG", "cyanG",
    "purpleG", "pinkG", "whiteG"
  ];
  var colorIndex;
  var goalcolorIndex;
  for (var i = 0; i < grid.length; i++) {
    for (var n = 0; n < grid[0].length; n++) {
      colorIndex = Math.floor(Math.random() * colorList.length); /*chooses the
      index of a random color in the list*/
      goalcolorIndex = Math.floor(Math.random() * goalcolorList.length);
      /*chooses the index of a random color in the win condition list*/
      grid[i][n] = colorList[colorIndex];
      endGoalGrid[i][n] = goalcolorList[goalcolorIndex];
      colorList.splice(colorIndex, 1); /*removes color from the list. This is
      reinitialised whenever the function is run, so no harm done.*/
      goalcolorList.splice(goalcolorIndex, 1); /*removes color from the list.
      This is reinitialised whenever the function is run, so no harm done.*/
    }
  }
  redrawGrid(grid, size)
  redrawGrid(endGoalGrid, size)
  $('#window').slideDown();
  $('#victory').hide();
}
// global variables
var grid = [
  ["red", "green", "blue"],
  ["orange", "pink", "white"],
  ["cyan", "yellow", "purple"]
]; /*initialises 2d array for grid*/
var size = $(window).width() / 3;
var endGoalGrid = [
  ["purpleG", "pinkG", "whiteG"],
  ["greenG", "blueG", "cyanG"],
  ["redG", "orangeG", "yellowG"]
]; /*initialises 2d array for win image*/
// main program body
nextLevel();
redrawGrid(grid, size);
redrawGrid(endGoalGrid, size);
init();
