//runs the main function when the DOM is fully loaded
$(document).ready(main);

//main function
function main () {
  
  var x      = 25;
  var y      = 25;
  var height = 300;
  var width  = 300;
  //inits the greid for the first time (black)
  initGrid(x, y, height, width);
  
  //start with normal sketch as default
  doNormalSketch();
  
  //if normal 
  $('.button-normal').click(function () {
    initGrid(x, y, height, width);
    doNormalSketch();
  });
  
  //if trails button is clicked
  $('.button-trail').click(function () {
    initGrid(x, y, height, width);
    doTrailSketch();
  });
  
  //if opacity button is clicked
  $('.button-opacity').click(function () {
    initGrid(x, y, height, width);
    
    //set the cell background color to black
    //and the opacity to 0
    //this way we can gradually increase opacity
    //to slowly turn the cell black
    $('.cell').css({"background-color": "#000"});
    $('.cell').css({"opacity": "0"});
    doOpacitySketch();
  });
  
  //if colors button is clicked
  $('.button-colors').click(function () {
    initGrid(x, y, height, width);
    doColorsSketch();
  });
}

function initGrid(x, y, height, width) {
//init grid
//type = normal | trail | opecity | colors
//x = amount of horizontal cells
//y = amount of vertical cells
//height = px
//width = px
	
  var sizeX      = width / x;
  var sizeY      = height / y;
  var cellAmount = x * y;
  
  //remove current grid
  $('.grid').remove();
  $('.cell').remove();
  
  //add new grid
  $('.grid-container').append('<div class="grid"></div>');
  
  //fills the grid with the specified
  //amount of cells
  for ( i = 0; i < cellAmount; i++) {
    console.log('grid created');
  	$('.grid').append('<div class="cell-container"><div class="cell"></div></div>');
  }
  
  //resizes the cells to correctly
  //fill the grid
  $('.cell').css({"height": sizeY - 2, "width": sizeX - 2});
}

//changes the .cell background color to black
function doNormalSketch() {
 $('.cell').hover(function () {
   $(this).css({"background-color": "#000"});
 });
}

//changes the .cell opacity to 1 on hover
//changes the .cell opacity to 2 off hover
function doTrailSketch() {
   $('.cell').hover(function () {
     $(this).fadeTo('fast', 1);
     $(this).css({"background-color": "#000"});
   }, function () {
     $(this).fadeTo('fast', 0);
   });
}

//adds 0.25 to .cell current opacity
function doOpacitySketch() {
  $('.cell').hover(function () {
    var currentOpacity = $(this).css("opacity");
    var newOpacity     = parseFloat(currentOpacity) + 0.15;
    console.log(currentOpacity);
    console.log(newOpacity);
    $(this).css({"opacity": newOpacity});
  });
}

function getRandomHexColor() {
  var aux = "01234567890ABCDE".split();
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += aux[Math.floor(Math.random() * 16)];
  }
  return color;
}
//
//function doColorsSketch() {
//  $('.cell').hover(function () {
//    $(this).css({"background-color": getRandomHexColor()});
//}
//
getRandomHexColor();