let tab = document.getElementById("table");
let f = new Array(9);
let Player = document.getElementById("Player_turn");

z = document.createElement("div");

let id = 0;

function grid() {
    for (let i = 0; i < f.length; i++) {
        z = document.createElement("div");
        z.setAttribute("id", id);
        z.setAttribute("class", "box")
        f[i] = id;
        id++;
        tab.append(z);

    }
}

x = document.getElementsByClassName("box");
Player.innerHTML = "This is X Turn";
let y = 0;

function player() {
    for (let k = 0; k < x.length; k++) {
        let cross = document.createElement("img");
        cross.src = "x.png";
        let circle = document.createElement("img");
        circle.src = "o.png";
        x[k].addEventListener("click", function () {

            if (y == 0) {
                Player.innerHTML = "This is O Turn";
                document.getElementById(f[k]).appendChild(cross);
                f[k] = "X";
                cross.append("X")
                y = 1;

            } else {
                Player.innerHTML = "This is X Turn";
                document.getElementById(f[k]).appendChild(circle);
                f[k] = "O";
                circle.append("O")
                y = 0;

            }
            return f[k];


        })
    }
}


// Function win conditions//

let winner = ""
const win = function wincondition() {
    for (let k = 0; k < x.length; k++) {
        if ((winner == f[0] == f[1] == f[2]) || (winner == f[0] == f[3] == f[6]) || (winner == f[0] == f[4] == f[8]) ||
            (winner == f[3] == f[4] == f[5]) || (winner == f[6] == f[7] == f[8]) || (winner == f[1] == f[4] == f[7]) ||
            (winner == f[2] == f[5] == f[8]) || (winner == f[2] == f[4] == f[6])) {
            if (winner == "X") {
                alert("X win");
                Player.innerHTML = "Player X win";
                winner.style.background = "red";
            } else {
                alert("O win");
                Player.innerHTML = "Player O win";
                winner.style.background = "red";

            }
        } else {
            alert("Tie Game");
            Player.innerHTML = "It's Tie Game";

        }

    }
}

//reset function//

function newgame() {
    for (let k = 0; k < x.length; k++) {
        f = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        document.getElementById(f[k]).innerHTML = "";
        y = 0;
        Player.innerHTML = "This is X Turn";
    }
}




