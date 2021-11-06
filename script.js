let tab = document.getElementById("table");
const f=[];
let y = 0;
let z=document.getElementsByClassName("box");
function grid() {
    for (let i = 1; i < 9; i++) {
        tab.innerHTML += '<div class="box"></div>';
    }
    for (let i = 0; i < 3; i++) {
        f[i] = [];
        for (let j = 0; j < 3; j++) {
            f[i][j] = [];


        }
    }

}

function turn(i,j) {
    if (y == 0) {
        f[i][j].innerHTML = "X";
        y = 1;
    } else {
        f[i][j].innerHTML = "O";
        y = 0;
    }

}





// Function win conditions//
function wincondition() {
}

//reset function//
function reset() {

}
function newgame(){
    reset();
    y=0;
}




