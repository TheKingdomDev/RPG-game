console.log("linked");

//Dungeons and Dragons RPG Game

$(document).ready(function() {

//Set each champion as an object

var df = {
	name: "Bron Stouthammer",
	health: 180,
	power: 12,
	counterAttack: 4,
	healthId: "fighterHP"
}

var her = {
	name: "Evelyn Nightshade",
	health: 145,
	power: 14,
	counterAttack: 5,
	healthId: "RangerHP"
}

var hw = {
	name: "Zav Raan",
	health: 120,
	power: 16,
	counterAttack: 6,
	healthId: "wizardHP"
}

var gb = {
	name: "Rask Strongjaw",
	health: 185,
	power: 13,
	counterAttack: 4,
	healthId: "barbarianHP"
}

var hr = {
	name: "Shade Pimwhistle",
	health: 140,
	power: 15,
	counterAttack: 5,
	healthId: "rogueHP"
}

var ed = {
	name: "Soora Admenor",
	health: 135,
	power: 14,
	counterAttack: 4,
	healthId: "druidHP"
}

//Global Variables

var championHealth;
var defenderHealth;
var champtionPower;
var defenderPower;
var isChampionChosen;
var isDefenderChosen;
var championId;
var defenderId;
var championLoses;
var defenderLoses;
var attack;
var counterAttack;

//create a function to Initialize the game

init();

function init() {
	
	//set the state of the game so that no champion is selected and the champions are at the top of the screen

	isChampionChosen = false;
	isDefenderChosen = false;
	championLoses = false;
	defenderLoses = false;
	attack = 0;

	//Set each champion to the default selection look

	$(".character").prependTo(".start").addClass("character").removeClass("champion enemy defender");
		

	//Set the message box to be empty

	$("#messageBox").html(" ");


	//input the name and health value for each champion

	$("#dfName").html(df.name);
	$("#fighterHP").html(parseInt(df.health));

	$("#herName").html(her.name);
	$("#rangerHP").html(parseInt(her.health));

	$("#hwName").html(hw.name);
	$("#wizardHP").html(parseInt(hw.health));

	$("#gbName").html(gb.name);
	$("#barbarianHP").html(parseInt(gb.health));

	$("#hrName").html(hr.name);
	$("#rogueHP").html(parseInt(hr.health));

	$("#edName").html(ed.name);
	$("#druidHP").html(parseInt(ed.health));

}

//Create an on click function for the player to select a chamption
$(".character").on("click", function () {
		//append the character to the selectedChampion location
		$(this).appendTo("#selectedChampion");

		//change the css to show that the selected character is your champion
		$(this).addClass("champion");
		//Call the function that creates the enemies

		//hide the select your champion div
		$("#selectRem").hide();

		$(".character").addClass("enemy");

			//create an on click function for the player to select the first opponent
			$(".character").on("click", function () {
			//append the character to the defender location
			$(this).appendTo("#defenderLocation");

			//change the css to show that the selected character is the defender
			$(this).addClass("defender");
			

		

		});

});










//couldnt get this working
// var makeDefender = function() {
// 	var enemies = $(".character");
// 	enemies.removeClass(".character").addClass(".enemy");
// 	enemies.appendTo("#enemyToAttack");
// }
	

	//append the rest of the characters to the enemyToAttack location

	


//Create a function when then attack button is pressed to apply the champion attack power and defender counter attack power
	//make sure the attack power grows with each attack
	//make checks to see if the player is at 0 health
	//make checks to see if the defender is at 0 health


//Create a reset function to call init()

$("#resetButton").on("click", function() {
	init();
});










});