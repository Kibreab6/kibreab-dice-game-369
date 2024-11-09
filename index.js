var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImage1 = `./images/dice${randomNumber1}.png`;
document.querySelector(".abebe").setAttribute("src", diceImage1);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = `./images/dice${randomNumber2}.png`;
document.querySelector(".damte").setAttribute("src", diceImage2);
if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}else {
    document.querySelector("h1").innerHTML = "Draws!";
}
/*

function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function diceImageChange() {
    const dicePlayer1 = randomNumber();
    const dicePlayer2 = randomNumber();
    change(dicePlayer1,dicePlayer2);

    document.querySelector(".abebe").setAttribute("src", ./images/dice${dicePlayer1}.png);
    document.querySelector(".damte").setAttribute("src", ./images/dice${dicePlayer2}.png);
}
function change(dicePlayer1, dicePlayer2 ) {
var title = document.querySelector("h1");
if(dicePlayer1>dicePlayer2) {
    title.innerHTML ="Player1 Wins";
} else if(dicePlayer1<dicePlayer2) {
    title.innerHTML = "Player2 wins";
} else {
    title.innerHTML = "Draw!";
}
}
diceImageChange();
*/
