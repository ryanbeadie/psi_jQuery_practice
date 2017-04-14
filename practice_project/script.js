/*
  Write the code to make clicking on the 'change-highlight' button give a box on the DOM
  the 'highlight' class to turn the box red.
  Each time the 'change-highlight' button is clicked, it should give the next square
  the 'highlight' class.
  Only 1 box should be highlighted at a time.
  You will need to add to the highlightASquare function,
  you are also welcome to write more than the given functions.
*/
var numberOfSquares = 10;
var whichSquare= 0;
$(document).ready(onReady);

//Function that runs when html is fully loaded:
function onReady(){
  //click listener to button:
  $('.change-highlight').on('click', highlightASquare);

  //call to put starting squares on DOM
  appendSquaresToDom(numberOfSquares);
}

function highlightASquare(){
  var arrayOfSquares = $('.square');
  var onSquare = $(arrayOfSquares[whichSquare]);
  var minusOnSquare=$(arrayOfSquares[whichSquare - 1]);

  if (whichSquare === 10) {
      whichSquare=0;
      $(arrayOfSquares[9]).removeClass("highlight");
      $(arrayOfSquares[0]).addClass("highlight");


  }//end if

  //This variable stores an array of the elements with the 'square' class

  onSquare.addClass("highlight");
  whichSquare ++;
  removeASquare();

  function removeASquare(){
    minusOnSquare.removeClass("highlight");


  } //End removeASquare
}//end highlightASquare


//You don't need to change this function:
function appendSquaresToDom(number){
  var squaresToAppend = "";
 //concatenate string of squares
  for(var i = 0; i < number; i++){
    squaresToAppend += "<div class='square'></div>";
  }
  //append string of html
  $(".container").append(squaresToAppend);
}
