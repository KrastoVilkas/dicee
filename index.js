function rollD(number) {
    var randomNumber = Math.floor(Math.random()*number) + 1;
    return randomNumber;
}

function roll2D6(){
  var roll1 = rollD(6);
  var roll2 = rollD(6);
  var target1 = document.querySelector(".img1");
  var target2 = document.querySelector(".img2");
  var newImg1 = "images//dice" + roll1+".png";
  var newImg2 = "images//dice" + roll2+".png";
  target1.setAttribute("src", newImg1);
  target2.setAttribute("src", newImg2);
  determineWinner(roll1, roll2);
}

function determineWinner(first, second){
  var target = document.querySelector("h1");
  if(first > second){
    target.textContent = " 🚩 Player 1 wins!";
  } else if (first < second) {
    target.textContent = "Player 2 wins! 🚩 ";
  } else {
    target.textContent = " 🚩 Draw!!! 🚩 ";
  }
}

roll2D6();
