function dados(){
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*6 + 1);
    return randomNumber;
}

function randomDice(){
    var dado1 = dados();
    var dado2 = dados();
    var h1Text = document.querySelector(".container h1");


    if (dado1 === 1){
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    } else if (dado1 === 2){
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    } else if (dado1 === 3){
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    } else if (dado1 === 4){
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    } else if (dado1 === 5){
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    } else if (dado1 === 6){
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
  
    if (dado2 === 1){
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    } else if (dado2 === 2){
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    } else if (dado2 === 3){
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    } else if (dado2 === 4){
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    } else if (dado2 === 5){
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    } else if (dado2 === 6){
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }

    if (dado1 > dado2){
        h1Text.innerHTML = "🏆 Player 1 wins!";
    } else if (dado2 > dado1){
        h1Text.innerHTML = "Player 2 wins! 🏆";
    } else{
        h1Text.innerHTML = "It's a draw!";
    }
}

