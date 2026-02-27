/* function randomNum1() {
  let randomNumber = Math.random();
  randomNumber = randomNumber * 6;
  return Math.floor(randomNumber + 1);
}
let result = randomNum1();
console.log(result);

function randomNum2() {
  let randomNumber = Math.random();
  randomNumber = randomNumber * 6;
  return Math.floor(randomNumber + 1);
}
let result2 = randomNum2();
console.log(result2);

if (result === result2) {
  document.querySelector("h1").innerHTML = "Its A tie!";
} else if (result > result2) {
  document.querySelector("h1").innerHTML = "Player one win!";
} else {
  document.querySelector("h1").innerHTML = "Player two win!";
}

if (result === 1) {
  document.querySelector(".player1 .item1").classList.remove("hidden");
} else if (result === 2) {
  document.querySelector(".player1 .item2").classList.remove("hidden");
} else if (result === 3) {
  document.querySelector(".player1 .item3").classList.remove("hidden");
} else if (result === 4) {
  document.querySelector(".player1 .item4").classList.remove("hidden");
} else if (result === 5) {
  document.querySelector(".player1 .item5").classList.remove("hidden");
} else if (result === 6) {
  document.querySelector(".player1 .item6").classList.remove("hidden");
}

if (result2 === 1) {
  document.querySelector(".player2 .item1").classList.remove("hidden");
} else if (result2 === 2) {
  document.querySelector(".player2 .item2").classList.remove("hidden");
} else if (result2 === 3) {
  document.querySelector(".player2 .item3").classList.remove("hidden");
} else if (result2 === 4) {
  document.querySelector(".player2 .item4").classList.remove("hidden");
} else if (result2 === 5) {
  document.querySelector(".player2 .item5").classList.remove("hidden");
} else if (result2 === 6) {
  document.querySelector(".player2 .item6").classList.remove("hidden");
}
 */

// =====================================================================================

/* document.querySelector(".player1 .hidden").classList.remove("hidden");
document.querySelector(".player2 .hidden").classList.remove("hidden");

let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector(".player1 img");
let img2 = document.querySelector(".player2 img");

img1.src = "./images/dice-" + randomNum1 + "-fill.svg";
img2.src = "./images/dice-" + randomNum2 + ".svg";

if (randomNum1 === randomNum2) {
  document.querySelector("h1").innerHTML = "Its A tie!";
} else if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player one win!";
} else {
  document.querySelector("h1").innerHTML = "Player two win!";
}
 */

// ===========================================================================================

let player1Name = "Player 1";
let player2Name = "Player 2";

document.querySelectorAll("img")[0].classList.remove("hidden");
document.querySelectorAll("img")[1].classList.remove("hidden");
document.getElementById("names-btn").classList.remove("hidden");

document.getElementById("names-btn").onclick = function () {
  player1Name = prompt("Enetr Player 1 Name.");
  player2Name = prompt("Enetr Player 2 Name.");

  document.getElementById("names-btn").classList.add("hidden");

  document.querySelectorAll("h2")[0].innerHTML = player1Name;
  document.querySelectorAll("h2")[1].innerHTML = player2Name;
};

function rollDice(playerSelector) {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  let image = "./images/dice-" + randomNum + ".svg";

  let img = document.querySelector(playerSelector + " img");
  img.src = image;

  return randomNum;
}

document.getElementById("button").onclick = function () {
  let player1Score = rollDice(".player1");
  let player2Score = rollDice(".player2");

  if (player1Score === player2Score) {
    document.querySelector("h1").innerText = "It's a Tie";
  } else if (player1Score > player2Score) {
    document.querySelector("h1").innerText = player1Name + " Wins!";
  } else {
    document.querySelector("h1").innerText = player2Name + " Wins!";
  }
};
