//number to be displayed for user guess
var targetNumber = 0;

//user counters
var counter = 0;
var wins = 0;
var losses = 0;

//variables for updating wins/losses on the page
var winsText = $("#wins");
var loseText = $("#losses");

//for loop creates crystals for page
for (var i = 0; i < 4; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr(
    "src",
    "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"
  );
  //creates random number between 1-12 for each crystal value
  imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
  $("#crystals").append(imageCrystal);
}

//on click add the clicked crystal value to the counter
$(".crystal-image").on("click", function() {
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);
  //adds to the global counter.
  counter += crystalValue;

  //alert user on click of total click count
  alert("New score: " + counter);

  //on win add 1 to win count and reset game
  if (counter === targetNumber) {
    alert("You win!");
    wins++;
    reset();
    rNumberPrint();
    //on lose add 1 to lose count and reset game
  } else if (counter >= targetNumber) {
    alert("You lose!!");
    losses++;
    reset();
    rNumberPrint();
  }
});

//generate random target number and print it and win/lose to page
function rNumberPrint() {
  targetNumber = Math.floor(Math.random() * 101) + 19;
  $("#number-to-guess").text(targetNumber);
  winsText.text("Wins: " + wins);
  loseText.text("Losses: " + losses);
}

//updates win/loss and reset counter
function reset() {
  winsText.text("Wins: " + wins);
  loseText.text("Losses: " + losses);
  counter = 0;
}

//execute function at page load
rNumberPrint();
