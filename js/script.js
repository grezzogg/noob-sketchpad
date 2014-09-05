//runs the main function when the DOM is fully loaded
$(document).ready(main);

//main function
function main () {
  
  //init the greid for the first time (black)
  initGrid('normal');
}


function initGrid(type) {
	$('.grid').append('<div class="cell"></div>');
}

/*first, divide the grid width in px between
the amount of grids specified. do the same with
the vertical part of the grid