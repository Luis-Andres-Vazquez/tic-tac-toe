
// will change
let p1_score = 0;
let p2_score = 0;
let count = 0;
let p1 = 'none';
let p2 = 'none';
var winner = false;
let moves_p1 = [];
let moves_p2 = [];
let booli = true;

// obtaining every square from the board
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s5 = document.getElementById("s5");
let s6 = document.getElementById("s6");
let s7 = document.getElementById("s7");
let s8 = document.getElementById("s8");
let s9 = document.getElementById("s9");

//arrays and objects
var obj = {"s1":s1, "s2":s2,"s3":s3,"s4":s4,"s5":s5,"s6":s6,"s7":s7, "s8":s8,"s9":s9};
const wins = [['s1','s2','s3'],['s4','s5','s6'],['s7','s8','s9'],['s1','s4','s7'],['s2','s5','s8'],['s3','s6','s9'],['s1','s5','s9'],['s3','s5','s7']];

const p1_score_span = document.getElementById("p1-score");
const p2_score_span = document.getElementById("p2-score");
let piece1x_btn = document.getElementById("p1x");
let piece1o_btn = document.getElementById("p1o");
let piece2x_span = document.getElementById("p2x");
let piece2o_span = document.getElementById("p2o");
let title_div = document.getElementById('luck');


//functions

function main(){
  //defining player items
  piece1x_btn.addEventListener("click",function(){
    p1 = "X";
    p2 = "O";
    piece1x_btn.classList.add('p1-light-up');
    piece2o_span.classList.add('p2-light-up');

    disable();
  })
  piece1o_btn.addEventListener("click",function(){
    p1 = "O";
    p2 = "X";
    piece1o_btn.classList.add('p1-light-up');
    piece2x_span.classList.add('p2-light-up');
    disable();
  })
  detect_move();
  }

function disable(){
  // disables the ability to select item once a piece is chosen
  piece1x_btn.disabled = true;
  piece1o_btn.disabled = true;
}

function detect_move() {
  //detecting where the user clicks
  s1.addEventListener('click',() => move("s1"));
  s2.addEventListener('click',() => move("s2"));
  s3.addEventListener('click',() => move("s3"));
  s4.addEventListener('click',() => move("s4"));
  s5.addEventListener('click',() => move("s5"));
  s6.addEventListener('click',() => move("s6"));
  s7.addEventListener('click',() => move("s7"));
  s8.addEventListener('click',() => move("s8"));
  s9.addEventListener('click',() => move("s9"));
}

  // alternating turns and checking if someone won
function move(square) {
  console.log(obj)
  if (p1==="none" || winner===true) {} // do nothing if they haven't chosen their item or won
  else if (!(square in obj)) {}
  else if (count%2=== 0) {
    count++;
    obj[square].innerHTML = p1;
    delete obj[square];
    moves_p1.push(square);
    win(moves_p1,"Player 1");
  }
  else {
    count++;
    obj[square].innerHTML = p2;
    delete obj[square];
    moves_p2.push(square);
    win(moves_p2,"Player 2");
  }
}

//To make sure that all elements are included
let check = (arr, target) => target.every(v => arr.includes(v));

function win(player_move,player) {
  console.log(player_move)
  for (i=0; i<wins.length; i++){
    console.log(i)
    if (check(player_move, wins[i])){ // checks if the user made a winning move
      title_div.innerHTML = `${player} WINS!!!`
      winner = true;
      if (player === "Player 1") {
        p1_score++;
        p1_score_span.innerHTML = p1_score;
      }
      else {
        p2_score++;
        p2_score_span.innerHTML = p2_score;
      }
    }
  }
}

//play-again button
function again() { // clears all squares
  for (i=1; i<10; i++){
    square = `s${i}`;
    document.getElementById(square).innerHTML = " _ ";
    obj[square] = document.getElementById(square);
  }
 moves_p1 = [];
 moves_p2 = [];
 winner = false;
 piece1x_btn.disabled = false;
 piece1o_btn.disabled = false;
 title_div.innerHTML = "Keep going you two got this!!!";

 piece1o_btn.classList.remove('p1-light-up');
 piece2o_span.classList.remove('p2-light-up');
 piece1x_btn.classList.remove('p1-light-up');
 piece2x_span.classList.remove('p2-light-up');
}

// restart button
function restart() {
  again();
  p1_score_span.innerHTML = 0;
  p2_score_span.innerHTML = 0;
  title_div.innerHTML = "Player 1 please choose your item again.";
  p1 = 'none';
  p2 = 'none';

}

main();
