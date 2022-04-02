var audio = new Audio('SFX/test_beep.wav');
audio.preload = 'auto';

// need to preload ALL audiofiles here, then just reference which variable they are assigned to below in filenametoplay

// var theElement = document.getElementById("cyan");
//
// theElement.addEventListener("touchend", handlerFunction, false);
//
// function handlerFunction(event) {
//   alert("touching worked!");
// }




var numberOfButtons = $(".button").length;

var wordList = ["you", "are", "a", "fucking", "cunt"]
var currentWordIndex = 0;
var currentWord = wordList[0];
$("#currentWord").text(currentWord); //debug to display currentWord

//count the number of buttons on page, add a listener for a mouse click and what to do when clicked
for (i = 0; i < numberOfButtons; i++) {
  $(".button")[i].addEventListener("click", function() {
    updateWordIndex();
    dimButtonOnClick(this.id);
  });
}



function dimButtonOnClick(buttonToDim) {
  console.log(buttonToDim);
var dimButton = document.querySelector("#" + buttonToDim);
dimButton.classList.add("dimButton");
setTimeout(function() {
  dimButton.classList.remove("dimButton");
}, 100);
}


function reply_click(clicked_id) {
  var buttonClicked = clicked_id;
  // console.log(buttonClicked);
  $("#buttonClicked").text(buttonClicked); //debug to display last button clicked

  var filenameToPlay = currentWord + "_" + buttonClicked + ".mp3";
  $("#filenameToPlay").text(filenameToPlay); //debug to display filenameToPlay

  audio.play();
}

function updateWordIndex() {
  if (currentWordIndex === 4) {
    currentWordIndex = 0;
  } else if (currentWordIndex < 4) {
    currentWordIndex = currentWordIndex + 1;
  }
  currentWord = wordList[currentWordIndex];
  $("#currentWord").text(currentWord); //debug to display currentWord


}
