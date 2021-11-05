function grid() {
    const f = [];
    let x = document.getElementById("box");
    for (let i = 0; i < 3; i++) {
        x.append(f[i]);
        for (let j = 0; j < 3; j++) {
            x.append(f[i][j]);
        }
    }return f;
}
let y = 0;
function click(i,j) {
    if (y == 0) {
        innerHTML = "X";
        y = 1;
    } else {
         innerHTML = "O";
        y = 0;

    } return
}
































// Functions Turn "X" or "O"//












function turnd3() {

    if (y == 0) {
        d3 = document.getElementById("d3").innerHTML = "X";

        y = 1;
    } else {
        d3 = document.getElementById("d3").innerHTML = "O";

        y = 0;
    }
}

function turnd4() {

    if (y == 0) {
        d4 = document.getElementById("d4").innerHTML = "X";

        y = 1;
    } else {
        d4 = document.getElementById("d4").innerHTML = "O";

        y = 0;
    }
}

function turnd5() {

    if (y == 0) {
        d5 = document.getElementById("d5").innerHTML = "X";

        y = 1;
    } else {
        d5 = document.getElementById("d5").innerHTML = "O";

        y = 0;
    }
}

function turnd6() {

    if (y == 0) {
        d6 = document.getElementById("d6").innerHTML = "X";

        y = 1;
    } else {
        d6 = document.getElementById("d6").innerHTML = "O";

        y = 0;
    }
}

function turnd7() {

    if (y == 0) {
        d7 = document.getElementById("d7").innerHTML = "X";

        y = 1;
    } else {
        d7 = document.getElementById("d7").innerHTML = "O";

        y = 0;
    }
}

function turnd8() {

    if (y == 0) {
        d8 = document.getElementById("d8").innerHTML = "X";

        y = 1;
    } else {
        d8 = document.getElementById("d8").innerHTML = "O";

        y = 0;
    }
}

function turnd9() {

    if (y == 0) {
        d9 = document.getElementById("d9").innerHTML = "X";

        y = 1;
    } else {
        d9 = document.getElementById("d9").innerHTML = "O";

        y = 0;
    }
}

// Function win conditions//
function wincondition() {
    let d1, d2, d3, d4, d5, d6, d7, d8, d9;
    d1 = document.getElementById("d1").innerHTML;
    d2 = document.getElementById("d2").innerHTML;
    d3 = document.getElementById("d3").innerHTML;
    d4 = document.getElementById("d4").innerHTML;
    d5 = document.getElementById("d5").innerHTML;
    d6 = document.getElementById("d6").innerHTML;
    d7 = document.getElementById("d7").innerHTML;
    d8 = document.getElementById("d8").innerHTML;
    d9 = document.getElementById("d9").innerHTML;
                   // X win//
    if (d1 == "X" && d2 == "X" && d3 == "X") {
        alert("player X win ");
        reset();
        y=0;
    } else if (d1 == "X" && d4 == "X" && d7 == "X") {
        alert("player X win ");
        reset();
        y=0;
    } else if (d1 == "X" && d5 == "X" && d9 == "X") {
        alert("player X win ");
        reset();
        y=0;
    } else if (d2 == "X" && d5 == "X" && d8 == "X") {
        alert("player X win ");
        reset();
        y=0;
    } else if (d3 == "X" && d6 == "X" && d9 == "X") {
        alert("player X win ");
        reset();
        y=0;
    } else if (d4 == "X" && d5 == "X" && d6 == "X") {
        alert("player X win ");
        reset();
        y=0;
    } else if (d7 == "X" && d8 == "X" && d9 == "X") {
        alert("player X win ");
        reset();
        y=0;
    } else if (d3 == "X" && d5 == "X" && d7 == "X") {
        alert("player X win ");
        reset();
        y=0;
    }
    //O win//
    else if (d1 == "O" && d2 == "O" && d3 == "O") {
        alert("player O win ");
        reset();
        y=0;
    } else if (d1 == "O" && d4 == "O" && d7 == "O") {
        alert("player O win ");
        reset();
        y=0;
    } else if (d1 == "O" && d5 == "O" && d9 == "O") {
        alert("player O win ");
        reset();
        y=0;
    } else if (d2 == "O" && d5 == "O" && d8 == "O") {
        alert("player O win ");
        reset();
        y=0;
    } else if (d3 == "O" && d6 == "O" && d9 == "O") {
        alert("player O win ");
        reset();
        y=0;
    } else if (d4 == "O" && d5 == "O" && d6 == "O") {
        alert("player O win ");
        reset();
        y=0;
    } else if (d7 == "O" && d8 == "O" && d9 == "O") {
        alert("player O win ");
        reset();
        y=0;
    } else if (d3 == "O" && d5 == "O" && d7 == "O") {
        alert("player O win ");
        reset();
        y=0;
    } else if ((d1 == "X" || d1 == "O") && (d2 == "X" || d2 == "O") && (d3 == "X" || d3 == "O") && (d4 == "X" || d4 == "O") && (d5 == "X" || d5 == "O") &&
        (d6 == "X" || d6 == "O") && (d7 == "X" || d7 == "O") && (d8 == "X" || d8 == "O") && (d9 == "X" || d9 == "O")) {
        alert("Tie game");
        reset();

    }

}

//reset function//
function reset() {
    document.getElementById("d1").innerHTML = null;
    document.getElementById("d2").innerHTML = null;
    document.getElementById("d3").innerHTML = null;
    document.getElementById("d4").innerHTML = null;
    document.getElementById("d5").innerHTML = null;
    document.getElementById("d6").innerHTML = null;
    document.getElementById("d7").innerHTML = null;
    document.getElementById("d8").innerHTML = null;
    document.getElementById("d9").innerHTML = null;

}
function newgame(){
    reset();
    y=0;
}




