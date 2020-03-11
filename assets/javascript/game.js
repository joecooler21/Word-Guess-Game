// initialize game

var movList = ["friday","boogie nights", "fargo", "groundhog day", "the big lebowski", "dazed and confused", "goodfellas", "pulp fiction", "reservoir dogs", "casino", "the usual suspects", "office space", "forrest gump", "the shawshank redemption", "fight club", "seven"];
var maxMov = movList.length;

var gameState = false;
var movie = pickMovie();
var oldStr, newStr = "";
var gameText = document.getElementsByClassName("gText");
var blankText = hideMovie(movie);

resetText();
var guesses = 5;
var used = "";
var wins = 0;
var losses = 0;
var usedFound = false;
var lastMovie = 0;


var mainText = document.getElementsByClassName ("gBlank");

document.addEventListener("keyup", startGame);

function startGame() {

    if (!gameState)
    {
        mainText[0].style.letterSpacing = "10px";
        gameText[0].textContent = blankText;

        gameState = true;
    }


    document.onkeypress = function (event) {

        var key = event.keyCode
        var letter = event.key;
        var found = false;

        if (key <= 122 && key >= 97) {

            console.log(movie);

            for (let i = 0; i <= movie.length - 1; i++) {
                if (movie[i] === letter) {
                    oldStr = gameText[0].textContent.split("");
                    oldStr[i] = letter.toUpperCase();
                    gameText[0].textContent = oldStr.join("");

                    if (gameText[0].textContent === movie.toUpperCase()) {
                        wins++;
                        gameText[3].textContent = "Wins: " + wins;
                        resetGame();
                        gameText[1].textContent = "Guesses left: " + guesses;
                    }

                    found = true;
                }


            }
            if (!found) { // check to see if char guessed is in movie title

                for (let i = 0; i <= used.length - 1; i++) { // check to see if wrong guess characters have been registered
                    if (used[i] === letter.toUpperCase()) {
                        usedFound = true;
                    }
                }
                if (!usedFound) {
                    used += " " + letter.toUpperCase();
                    gameText[2].textContent = "Characters used:" + used;
                }
                
                if (guesses > 0 && !usedFound)
                    guesses--;

                if (guesses <= 0) { // check to see if user is out of guesses
                    losses++;
                    gameText[4].textContent = "Losses: " + losses;
                    resetGame();
                    return (0);
                }
                gameText[1].textContent = "Guesses left: " + guesses;
                usedFound = false;
                

                
            }

        }
    }


}

function resetGame() { // reset main playing field with new movie, fresh guesses and empty char used field
    movie = pickMovie();
    gameText[0].textContent = hideMovie(movie);
    guesses = 5;
    gameText[1].textContent = "Guesses: " + guesses;
    used = "";
    gameText[2].textContent = "Characters used:";
}

function resetText() {

    gameText[1].textContent = "Guesses left: 5 ";
    gameText[2].textContent = "Characters used: ";
}



function pickMovie() { // pick a random movie from the main movie array to put into play, then remove from array so duplicate aren't played and game ends once list has been exhausted
    if (movList.length > 0) {
        var mov = "";
        var rNum = Math.floor((Math.random() * movList.length) + 0);
        mov = movList[rNum];
        movList.splice(rNum, 1);
        return mov;
    } else
    mainText[0].textContent = "Game Over!";
    gameText[1].textContent = "";
    gameText[2].textContent = "";
}

function hideMovie(movieName) { // return movie title as blank text for main game text field
    var empty = "";

    for (var i = 0; i <= movieName.length - 1; i++) {
        if (movieName[i] === " ") {
            empty += " ";
        } else

            empty += "_";
    }

    return empty;
}