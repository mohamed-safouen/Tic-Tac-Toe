let tab = document.getElementById("table");
let f = new Array(9);
let Player = document.getElementById("Player_turn");
z = document.getElementsByClassName("box");

function grid() {
    for (let i = 0; i < f.length - 1; i++) {
        f[i] = [];
        tab.innerHTML += '<div class="box" onclick="turn()" ></div>';
        z[i].id = "div" + i;
        mydiv = document.getElementById("div" + i);
        mydiv.append(f[i])

    }
}

let y = 0;
Player.innerHTML = "This is X Turn";

function turn(i) {
    if (y == 0) {
        Player.innerHTML = "This is O Turn";
        f[i] = "X";
        document.getElementById("div" + i).innerHTML = f[i];
        y = 1;
    } else {
        Player.innerHTML = "This is X Turn";
        f[i] = "O";
        mydiv.innerHTML = f[i];
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
            Player.innerHTML = "Player X win";
        } else {
            alert("O win");
            Player.innerHTML = "Player O win";
        }
    } else {
        alert("Tie Game");
        Player.innerHTML = "It's Toe Game";
    }
}

//reset function//

function newgame() {
    f = new Array(8);
    y = 0;
    Player.innerHTML = "This os X Turn";
}




