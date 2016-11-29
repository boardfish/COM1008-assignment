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
    winCheck()
  }
  else {
    console.log("That's an invalid move.");
  }
}

function redrawGrid() {
  console.log("Redrawing...");
  console.log(grid);
  var firstStageSwapped = false;
  for (var i = 0; i < grid.length; i++) {
    for (var n = 0; n < grid[i].length; n++) {
      console.log(grid[i][n]);
      var editedSquare = document.getElementById(grid[i][n]);
      console.log(grid[i][n], "to", n*size/3, (grid.length-i-1)*size/3);
      editedSquare.setAttribute("x", n*size/3);
      editedSquare.setAttribute("y", (grid.length-i-1)*size/3);
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

/*https://www.freecodecamp.com/challenges/generate-random-whole-numbers-with-javascript
challenge gave me a lead in to how the random function works*/
function nextLevel() {
  console.log("NEXTLEVEL FUNCTION EXECUTED \N------------");
  var colorList = ["red", "orange", "yellow", "green", "blue", "cyan","purple", "pink", "white"] //add more colours to this list to scale the program up to bigger grids.
  var goalcolorList = ["red", "orange", "yellow", "green", "blue", "cyan", "purple", "pink", "white"];
  var colorIndex;
  var goalcolorIndex;
  for (var i = 0; i < grid.length; i++) {
    for (var n = 0; n < grid[0].length; n++) {
      colorIndex = Math.floor(Math.random() * colorList.length);
      goalcolorIndex = Math.floor(Math.random() * goalcolorList.length);
      grid[i][n] = colorList[colorIndex];
      endGoalGrid[i][n] = goalcolorList[goalcolorIndex];
      console.log(i, n);
      console.log("Index chosen was", colorIndex, "color", colorList[colorIndex]);
      colorList.splice(colorIndex, 1);
      console.log(colorList);
      console.log(grid[i]);
      console.log("Index chosen was", goalcolorIndex, "color", goalcolorList[goalcolorIndex]);
      goalcolorList.splice(goalcolorIndex, 1);
      console.log(goalcolorList);
      console.log(endGoalGrid[i]);
    }
  }
  redrawGrid()
  $('#window').slideDown();
  $('#victory').hide();
}

// global variables
var grid = [["red", "green", "blue"], ["orange", "pink", "white"], ["cyan", "yellow", "purple"]];
var size = $(window).width()/3;
/*var grid = [["purple", "white", "pink"], ["green", "blue", "cyan"], ["red", "orange", "yellow"]];*/
var endGoalGrid = [["purple", "pink", "white"], ["green", "blue", "cyan"], ["red", "orange", "yellow"]];
// main program body
redrawGrid();
init();
