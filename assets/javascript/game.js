


// give the div id "randomNumber" a random value between 1 and 100 at start of the game.
var randomNum;
var wins;
var losses;


random_result = Math.floor(Math.random() * 69) + 30;

   console.log(random_result);

$("#randomNumber").html(0 + random_result);

for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);
        var crystal = $(".crystalElement").attr({
            "class":"crystalColor",
            "data-random": random

        });
      $(".crystalColor").append(crystal);
}

$(".crystalColor").on('click', function (){
        console.log($(this).attr('data-random'));
});
// $("#ramdomNumber").on("click", "#random-button", function() {

    // ... we generate a random number
    // var randomNum = Math.floor(Math.random() * 100) + 1;

// }


// When you click on the image of each crystal you should get 
// fixed value between 1 and 10 per crystal that will add up to the value generated at the game
// start.  Each click of these crystals multiply by an increment of 1 each time pressed
// These fixed values per crystal will change randomely when 
// the game is refreshed.  


// When the value per crystal is equaled to the value of randomNumber generated
// your Wins will increase by one.

// When your value per crystal does not equal and goes more than the value of the 
// randomNumber value you lose and losses will increase by one.


