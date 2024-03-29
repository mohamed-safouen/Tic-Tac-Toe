let tab = document.getElementById("table");
let f = new Array(9);
let Player = document.getElementById("Player_turn");
let win=document.getElementById("winner");

z = document.createElement("div");

const GAME_SIZE = 3;

function initGame() {
  reset()
  initGrid()
  player()
}

function initGrid() {
  for (let i = 0; i < f.length; i++) {
    const z = document.createElement("div");
    z.setAttribute("id", `box-${i}`);
    z.setAttribute("class", "box")
    f[i] = i;
    tab.append(z);
  }
}

x = document.getElementsByClassName("box");
Player.innerHTML = "X";
Player.style.color = "#f92f60";



let pO = {
  name: "O",
  y: 1,
  imageSrc: "cercle",
  color: "#3ba8d7",
};

let pX = {
  name: "X",
  y: 0,
  imageSrc: "close",
  color: "#f92f60",
};

function switchP(player) {
  return player.y ? pX : pO;
}


let p = pX

function createPlayerBoxImage(player) {
  let e = document.createElement("div");
  e.classList.add(`${player.imageSrc}`);
 
  return e;
}


function player() {
  for (let k = 0; k < x.length; k++) {
    x[k].addEventListener("click", function () {
      let image = createPlayerBoxImage(p)
      document.getElementById(`box-${f[k]}`).appendChild(image);
      f[k] = p.name;
      x[k].style.background = " rgba(0, 0, 0, 0.1)";
      wincondition();
      p = switchP(p);
      Player.innerHTML = ` ${p.name}`;
      Player.style.color = ` ${p.color}`;
      
    })
  }
}


// Function win conditions//

function wincondition() {
  let r = winner(f)
  if (r==="X") {
      swal({
        title: "Player X Win",
        button: "Back!",
      });
      initGame()
  } else if (r === "O") {
    swal({
      title: "Player O Win",
      button: "Back!",
    });
    document.getElementsByClassName("swal-title").style.color = "#3ba8d7";
    initGame()
  } else if (r === "T") {
    swal({
      title: "Tie Game",
      button: "Back!",
    });
    initGame()
  }
}

function winner(f) {
  let all = [...getLines(f), ...getCols(f), ...getDiags(f)];
  for(let i = 0; i<all.length; i++){
    let alignement = all[i];
    if(isWinner(alignement)) {
      return alignement[0]
    }
  }
  return gameFull(f) ? "T" : "C"
}

function gameFull(f) {
  for ( let i = 0; i< f.length; i++) {
    let v = f[i];
    if (v !== "X" && v !== 'O') {
      return false
    }
  }
  return true
}

function isWinner(al) {
  let firstValue = al[0]
  for (let i = 1; i < al.length; i++) {
    if (al[i] !== firstValue) {
      return false
    }
  }

  return true
}

function getLines(f) {
  let lines = []
  let currentLine = []
  f.forEach(v => {
    currentLine.push(v)
    if (currentLine.length === GAME_SIZE) {
      lines.push(currentLine);
      currentLine = []
    }
  })
  return lines;
}

function getCols(f) {
  let lines = getLines(f)
  let cols = []
  for(let i =0; i< GAME_SIZE; i++) {
    let col = lines.map(l => l[i])
    cols.push(col)
  }
  return cols
}

function getDiags(f) {
  let d1 = [];
  let d2 = [];
 let lines = getLines(f)
 for(let i = 0; i<lines.length;i++) {
   d1.push(lines[i][i])
   d2.push(lines[i][GAME_SIZE-i-1])
 }
  return [d1, d2]
}

function reset() {
  let t = document.getElementById("table")
  t.innerHTML = ""
  win.innerHTML= ""
  win.style.visibility="hidden"
}


