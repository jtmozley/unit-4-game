//number to be displayed for user guess
var targetNumber = 0;

//user counters
var counter = 0;
var wins = 0;
var losses = 0;

//variables for updating wins/losses on the page
var winsText = $("#wins").append("Wins: " + wins);
var loseText = $("#losses").append("Losses: " + losses);

//numbers for assignment to the crystals
var numberOptions = [10, 5, 3, 7];

//for loop creates crystals for page
for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr(
    "src",
    "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"
  );
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
    reset();
    rNumberPrint();
  } else if (counter >= targetNumber) {
    alert("You lose!!");
    reset();
    rNumberPrint();
  }
});

function rNumberPrint() {
  targetNumber = Math.floor(Math.random() * 101) + 19;
  $("#number-to-guess").text(targetNumber);
};

function reset() {
  winsText;
  loseText;
  counter = 0;
  targetNumber;
  //place for code to randomize crystal values
};

rNumberPrint();