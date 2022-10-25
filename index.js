//Dice 1

var randomnummber1 = Math.random();


randomnummber1 = randomnummber1 * 6;

randomnummber1 = Math.floor(randomnummber1) + 1;



if (randomnummber1 == 1) {


    document.querySelector(".img1").setAttribute("src", "images/dice1.png",);

}

if (randomnummber1 == 2) {


    document.querySelector(".img1").setAttribute("src", "images/dice2.png",);

}

if (randomnummber1 == 3) {


    document.querySelector(".img1").setAttribute("src", "images/dice3.png",);

}

if (randomnummber1 == 4) {


    document.querySelector(".img1").setAttribute("src", "images/dice4.png",);

}

if (randomnummber1 == 5) {


    document.querySelector(".img1").setAttribute("src", "images/dice5.png",);

}

if (randomnummber1 == 6) {


    document.querySelector(".img1").setAttribute("src", "images/dice6.png",);

}


//Dice 2

var randomnummber2 = Math.random();


randomnummber2 = randomnummber2 * 6;

randomnummber2 = Math.floor(randomnummber2) + 1;



if (randomnummber2 == 1) {


    document.querySelector(".img2").setAttribute("src", "images/dice1.png",);

}

if (randomnummber2 == 2) {


    document.querySelector(".img2").setAttribute("src", "images/dice2.png",);

}

if (randomnummber2 == 3) {


    document.querySelector(".img2").setAttribute("src", "images/dice3.png",);

}

if (randomnummber2 == 4) {


    document.querySelector(".img2").setAttribute("src", "images/dice4.png",);

}

if (randomnummber2 == 5) {


    document.querySelector(".img2").setAttribute("src", "images/dice5.png",);

}

if (randomnummber2 == 6) {


    document.querySelector(".img2").setAttribute("src", "images/dice6.png",);

}


if (randomnummber1 == randomnummber2) {

    document.querySelector("h1").innerHTML = "Draw";

}

if (randomnummber1 > randomnummber2) {

    document.querySelector("h1").innerHTML = "🎈Player 1 wins!";
}

if (randomnummber1 < randomnummber2) {

    document.querySelector("h1").innerHTML = "Player 2 wins!🎈";
}