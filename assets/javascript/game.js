// initialize game

document.addEventListener ("keypress", startGame);

function startGame () {

        
    }

    
    // do some stuff here
}

function resetText () {
    var gameText  = document.getElementsByClassName ("gText");

    gameText[0].textContent = "_ _ _ _ _ _ _ _";
    gameText[1].textContent = "Guesses left: 0 ";
    gameText[2].textContent = "Characters used: ";
}

function pickMovie () {
    var movList = ["Goodfellas", "Pulp Fiction", "Reservoir Dogs", "Casino", "The Usual Suspects", "Office Space", "Forrest Gump", "The Shawshank Redemption", "Fight Club", "Seven"]
    var rNum = Math.floor((Math.random() * 9) + 0);
    return movList[rNum];
}