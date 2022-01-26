function Player(turn) {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollOne = function() {
  if(this.roll === 1) {
    this.tempScore = 0;
    alert("you rolled a 1, your score is wiped!");
  } else  {
    this.tempScore += this.roll;
  }
};

Player.prototype.singleRoll = function()  {
  this.roll = rollDice();
  rollOne();
};

Player.prototype.hold = function()  {
  this.totalScore += this.tempScore;
  this.tempScore = 0;

  alert(this.playerName + ", your turn is over!");
};

Player.prototype.winnerCheck = function ()  {
  if (this.totalScore >= 100)
    alert(this.playerName + ", you are the winner!");
};

let rollDice = function() {
  return Math.floor(6*Math.random())+1;
}

Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.playerName ="";
}


//UI logic
let playerName1 = "";
let playerName2 = "";


let clearValues =function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

$(document).ready(function(){
    let player1 = new Player(true);
    let player2 = new Player(false);

  $("button#start").click( function()  {
    // event.preventDefault;
    player1.playerName = $(".player1Name").val();
    player2.playerName = $(".player2Name").val();
    $(".player-container").show();
    $(".container").hide();
     
  });

  $("button#player1Roll").click(function(event){
    player1.singleRoll();
    $("#diceRoll1").text(player1.roll);
    $("#roundTotal1").text(player1.tempScore);
  });
});
