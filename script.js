let tab = document.getElementById("table");
let f = new Array(8);
let z = document.getElementsByClassName("box");
let Player = document.getElementById("Player_turn")

function grid() {
    for (let i = 0; i < f.length; i++) {
        tab.innerHTML += '<div class="box"></div>';
    }
}

let y = 0;
Player.innerHTML = "This X Turn";

function turn(i) {
    if (y == 0) {
        Player.innerHTML = "This O Turn";
        f[i] = "X";
        y = 1;
    } else {
        Player.innerHTML = "This X Turn";
        f[i] = "O";
        y = 0;
    }
    return f[i]
}

// Function win conditions//
let winner = "";

function wincondition(i) {

    if ((winner == f[0] == f[1] == f[2]) || (winner == f[0] == f[3] == f[6]) || (winner == f[0] == f[4] == f[8]) ||
        (winner == f[3] == f[4] == f[5]) || (winner == f[6] == f[7] == f[8]) || (winner == f[1] == f[4] == f[7]) ||
        (winner == f[2] == f[5] == f[8]) || (winner == f[2] == f[4] == f[6])) {
        if (winner == "X") {
            alert("X win");
            Player.innerHTML = "This O Turn";
        } else {
            alert("O win");
        }
    } else {
        alert("Toe Game")
    }
}

//reset function//

function newgame() {
    f = [];
    y = 0;
}




