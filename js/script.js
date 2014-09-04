//runs the main function when the DOM is fully loaded
$(document).ready(main("lol"));

//main function
function main () {
  
  //init the greid for the first time (black)
  initGrid("normal");
}

function initGrid(type) {
  $('.grid').append('<div class="cell">lol it worked</div>');
  console.log('sad face :(')
}

