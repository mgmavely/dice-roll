function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function diceRoll() {

  for (var i = 0; i < 6; i++) {

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector("img.img1").src = "images/dice" + randomNumber1 + ".png";
    document.querySelector("img.img2").src = "images/dice" + randomNumber2 + ".png";
    await sleep(200);
  }

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
  }

}

diceRoll();
