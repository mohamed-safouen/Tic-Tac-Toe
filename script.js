let tab = document.getElementById("table");
let f = new Array();
let Player = document.getElementById("Player_turn");
let z = document.createElement("span");
let cross=document.createElement("div");
cross.setAttribute("id","X");
let circle=document.createElement("div");
circle.setAttribute("id","O");

function grid() {
    for (let i = 0; i < 3; i++) {
        f[i] = [];
        for (let j=0;j<3;j++) {
            f[i][j] = [];
            z = document.createElement("span");
            tab.append(z);

        }
    }
    return z
}
function click(i,j){
    z[i][j].addEventListener("click",function() {
        return turn();
    });
}
let y = 0;
Player.innerHTML = "This is X Turn";
function turn(i,j) {
    if (y == 0) {
        Player.innerHTML = "This is O Turn";
           f[i][j]="X" ;
            y = 1;
        } else {
            Player.innerHTML = "This is X Turn";
            f[i][j] = "O";
            y = 0;
        }
        return (f[i][j]);
    }

// Function win conditions//
let winner = "";
function wincondition(i,j) {

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




