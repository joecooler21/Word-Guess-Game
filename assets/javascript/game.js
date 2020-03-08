// initialize game

var movie = pickMovie();
var oldStr, newStr = "";
var gameText = document.getElementsByClassName("gText");
var blankText = hideMovie(movie);
gameText[0].textContent = blankText;
resetText();
var guesses = 5;
var used = "";
var wins = 0;
var losses = 0;
var usedFound = false;

document.addEventListener("keypress", startGame);



function startGame() {


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
                
                if (guesses > 0)
                    guesses--;

                if (guesses <= 0) { // check to see if user is out of guesses
                    losses++;
                    gameText[4].textContent = "Losses: " + losses;
                    resetGame();
                    return (0);
                }
                gameText[1].textContent = "Guesses left: " + guesses;
                usedFound = false;
                

                for (let i = 0; i <= used.length - 1; i++) { // check to see if wrong guess characters have been registered
                    if (used[i] === letter.toUpperCase()) {
                        usedFound = true;
                    }
                }
                if (!usedFound) {
                    used += " " + letter.toUpperCase();
                    gameText[2].textContent = "Characters used:" + used;
                }
            }

        }
    }


}

function resetGame() {
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

function pickMovie() {
    var movList = ["the big lebowski", "dazed and confused", "goodfellas", "pulp fiction", "reservoir dogs", "casino", "the usual suspects", "office space", "forrest gump", "the shawshank redemption", "fight club", "seven"]
    var rNum = Math.floor((Math.random() * 12) + 0);
    return movList[rNum];
}

function hideMovie(movieName) {
    var empty = "";

    for (var i = 0; i <= movieName.length - 1; i++) {
        if (movieName[i] === " ") {
            empty += " ";
        } else

            empty += "_";
    }

    return empty;
}