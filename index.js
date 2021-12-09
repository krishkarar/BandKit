// alert("working baby!!");

// document.querySelectorAll(".drum")[0].addEventListener("click", handleClick);
// //this line makes sure that when the first button is clicked, the function handleclick gets called

//to implement the same change for all buttons, the following for loop is run:

//for buttons
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;

    make_Sound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  });
}


//for keypress
document.addEventListener("keydown",function(event){
  make_Sound(event.key);
  makeAnimation(event.key);
});

function make_Sound(key){
  // var buttonInnerHTML = key;  for buttons
  // event.key -- for keyboard
  switch(key)
  {
    case "w":
    var tom1 = new Audio("tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("kick-bass.mp3");
    kick.play();
    break;

    default:
    console.log(key);

  }

}


function makeAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
