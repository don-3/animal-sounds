var totalImages = document.querySelectorAll(".animal-pic").length;


for (var i = 0; i < totalImages; i++) {
  document.querySelectorAll(".animal-pic")[i].addEventListener("click", function () {
    var buttonClicked = this.classList;

      playSound(buttonClicked);
      buttonAnimation(buttonClicked);
    
  })
}

function buttonAnimation(currentImage) {
  
  //Add class-list to add transparancy to image. 
  var activeButton = document.querySelector("." + currentImage[0]);

  activeButton.classList.add("pressed");

    // Set Timeout function
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    },1000);
  
  
}

function playSound(sound) {
  switch (true) {
    case sound.contains("tiger"):
      var tigerSound = new Audio("sounds/Tiger6.mp3");
      tigerSound.play();
    break;

    case sound.contains("cow"):
      var cowSound = new Audio("sounds/cow.wav");
      cowSound.play();
    break;

    case sound.contains("cat"):
      var catSound = new Audio("sounds/cat.wav");
      catSound.play();
    break;

    case sound.contains("elephant"):
      var elephantSound = new Audio("sounds/elephant9.mp3");
      elephantSound.play();
    break;

    case sound.contains("cow"):
      var cowSound = new Audio("sounds/cow.wav");
      cowSound.play();
    break;

    case sound.contains("dog"):
      var dogSound = new Audio("sounds/dog.wav");
      dogSound.play();
    break;

    case sound.contains("monkey"):
      var monkeySound = new Audio("sounds/monkey.wav");
      monkeySound.play();
    break;

    case sound.contains("gorilla"):
      var gorillaSound = new Audio("sounds/gorilla.wav");
      gorillaSound.play();
    break;

    case sound.contains("dolphin"):
      var giraffeSound = new Audio("sounds/dolphin.wav");
      giraffeSound.play();
    break;

    default:
      alert("Not avaliable.")
      
  }

}