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
                x[k].style.background = " rgba(0, 0, 0, 0.3)";
                wincondition()
            } else {
                Player.innerHTML = "This is X Turn";
                document.getElementById(f[k]).appendChild(circle);
                f[k] = "O";
                circle.append("O")
                y = 0;
                x[k].style.background = " rgba(0, 0, 0, 0.3)";
                wincondition()
            }

            return f[k];


        })

    }
}


// Function win conditions//

function wincondition() {

    if ((f[0] == 'X' && f[1] == 'X' && f[2] == 'X') || (f[0] == 'X' && f[3] == 'X' && f[6] == 'X') || (f[0] == 'X' && f[4] == 'X' && f[8] == 'X') ||
        (f[3] == 'X' && f[4] == 'X' && f[5] == 'X') || (f[6] == 'X' && f[7] == 'X' && f[8] == 'X') || (f[1] == 'X' && f[4] == 'X' && f[7] == 'X') ||
        (f[2] == 'X' && f[5] == 'X' && f[8] == 'X') || (f[2] == 'X' && f[4] == 'X' && f[6] == 'X')) {
        Player.innerHTML = "Player X win";
        alert("x win");
        newgame()
    } else if ((f[0] == 'O' && f[1] == 'O' && f[2] == 'O') || (f[0] == 'O' && f[3] == 'O' && f[6] == 'O') || (f[0] == 'O' && f[4] == 'O' && f[8] == 'O') ||
        (f[3] == 'O' && f[4] == 'O' && f[5] == 'O') || (f[6] == 'O' && f[7] == 'O' && f[8] == 'O') || (f[1] == 'O' && f[4] == 'O' && f[7] == 'O') ||
        (f[2] == 'O' && f[5] == 'O' && f[8] == 'O') || (f[2] == 'O' && f[4] == 'O' && f[6] == 'O')) {
        Player.innerHTML = "Player O win";
        alert("O win");
        newgame()
    } else if ((f[0] == 'X' || f[0] == 'O') && (f[1] == 'X' || f[1] == 'O') && (f[2] == 'X' || f[2] == 'O') &&
        (f[3] == 'X' || f[3] == 'O') && (f[4] == 'X' || f[4] == 'O') && (f[5] == 'X' || f[5] == 'O') &&
        (f[6] == 'X' || f[6] == 'O') && (f[7] == 'X' || f[7] == 'O') && (f[8] == 'X' || f[8] == 'O')) {
        Player.innerHTML = "Tie Game";
        alert("Tie Game");
        newgame()
    }

}

//reset function//

function newgame() {
    for (let k = 0; k < x.length; k++) {
        f = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        document.getElementById(f[k]).innerHTML = "";
        y = 0;
        Player.innerHTML = "This is X Turn";
        x[k].style.background = " rgba(0, 0, 0, 0.0)";
    }
}




