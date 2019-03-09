//variables......................................
var total = 0;
var wins = 0;
var losses = 0;

//variable for each crystal....................................
var crystal1 = Math.floor(Math.random() *11 + 1);
var crystal2 = Math.floor(Math.random() *11 + 1);
var crystal3 = Math.floor(Math.random() *11 + 1);
var crystal4 = Math.floor(Math.random() *11 + 1);

//create random number (target number).....................................
var target = Math.floor(Math.random()* 101 + 19);
console.log("The target number is " + target);

//Display random number in the dom..............................
$("#totalNumber").html("<h2>Target: " + target + "</h2>");
 

//create on click event for crystal counter...................
$(".crystal1").click(function() {
  total += crystal1;
  console.log("Current total is " + total);
  if (total === target) {
    win();
  }  if (total > target) 
  { lose();
  }
  });
  console.log("blue= " + crystal1);

$(".crystal2").click(function() {
  total += crystal2;
  console.log("Current total is " + total);
  if (total === target) {
    win();
  }  if (total > target) 
  { lose();
  }
  });
  console.log("red= " + crystal2);

$(".crystal3").click(function() {
  total += crystal3;
  console.log("Current total is " + total);
  if (total === target) {
    win();
  }  if (total > target) 
  { lose();
  }
  });
  console.log("star= " + crystal3);

$(".crystal4").click(function() {
  total += crystal4;
  console.log("Current total is " + total);
  if (total === target) {
    win();
  }  if (total > target) 
  { lose();
  }
  });
  console.log("green= " + crystal4);

//...........win/loss function.............
function win() {
  alert("You WIN!");
  reset();
  wins++;
  $("#winBox").append("");
  $("#winBox").html(" <h2>Wins: " + wins + "</h2>");
}

function lose() {
  alert("You LOSE!");
  reset();
  losses++;
  $("#lossBox").append("");
  $("#lossBox").html(" <h2>Losses: " + losses + "</h2>");
}



//game reset
function reset() {
  total= 0;
  target = Math.floor(Math.random()* 101 + 19);
  console.log("The target number is " + target);
  $("#totalNumber").html("<h2>Target: " + target + "</h2>");
}

console.log("current total is " + total);


