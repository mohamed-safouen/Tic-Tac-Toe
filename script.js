let tab = document.getElementById("table");
let f = new Array(3);
let Player = document.getElementById("Player_turn");
let cross=document.createElement("div");
cross.setAttribute("id","X");
let circle=document.createElement("div");
circle.setAttribute("id","O");
z = document.createElement("span");

let id =0;
function grid() {
    for (let i = 0; i < f.length; i++) {
        f[i] = [];
        for (let j=0;j<f.length;j++) {
            z = document.createElement("span");
            f[i][j] = id;
            z.setAttribute("id", id);
            id++;
            tab.append(z);
        }
        }
    return z;

}
let y = 0;
Player.innerHTML = "This is X Turn";
function turn(i,j) {
     if (y == 0) {
         Player.innerHTML = "This is O Turn";
         document.getElementById(f[i][j]).innerHTML = "X";
         f[i][j] = "X";
         y = 1;
     } else {
         Player.innerHTML = "This is X Turn";
         document.getElementById(f[i][j]).innerHTML = "O";
         f[i][j] = "O";
         y = 0;
     }

return f[i][j];

}



// Function win conditions//
let winner = "";
function wincondition(i,j) {

    if ((winner == f[0][0] == f[0][1] == f[0][2]) || (winner == f[0][0] == f[1][0] == f[2][0]) || (winner == f[0][0] == f[1][1] == f[2][2]) ||
        (winner == f[1][0] == f[1][1] == f[1][2]) || (winner == f[2][0] == f[2][1] == f[2][2]) || (winner == f[0][1] == f[1][1] == f[2][1]) ||
        (winner == f[0][2] == f[1][2] == f[2][2]) || (winner == f[0][2] == f[1][1] == f[2][0])) {
        if (winner == "X") {
            alert("X win");
            Player.innerHTML = "Player X win";
        } else {
            alert("O win");
            Player.innerHTML = "Player O win";
        }
    } else {
        alert("Tie Game");
        Player.innerHTML = "It's Tie Game";
    }
}
//reset function//

function newgame() {
    f = new Array(8);
    y = 0;
    Player.innerHTML = "This is X Turn";
}




