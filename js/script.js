//runs the main function when the DOM is fully loaded
$(document).ready(main);

//main function
function main () {
  
  var x      = 20;
  var y      = 20;
  var height = 300;
  var width  = 600;
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
  
  //if colors button is opacity
  $('.button-opacity').click(function () {
    initGrid(x, y, height, width);
    doTrailSketch();
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
  	$('.grid').append('<div class="cell"></div>');
  }
  
  //resizes the cells to correctly
  //fill the grid
  $('.cell').css({"height": sizeY - 2, "width": sizeX - 2});
}

function doNormalSketch() {
 $('.cell').hover(function () {
   $(this).css({"background-color": "#000"});
 });
}

function doTrailSketch() {
   $('.cell').hover(function () {
     $(this).fadeTo('fast', 1);
     $(this).css({"background-color": "#000"});
   }, function () {
     $(this).fadeTo('fast', 0);
//     $(this).css({"background-color": "#fff", "opacity": "1"});
     //way to make border opacity independant
     //of the content
     //maybe make a div container
   });
}

function doOpacitySketch() {
}

function doColorsSketch() {
}