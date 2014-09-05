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

//
//    $(document).ready(test);
//
//function test(){
//    $('.grid').append('hola');
//  console.log(':(');
//}