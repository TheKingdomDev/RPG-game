console.log("linked");

//Dungeons and Dragons RPG Game

$(document).ready(function() {

//Set each champion as a data object

$("df").data({
	name: "Bron Stouthammer",
	health: 180,
	power: 12,
	counterAttack: 4,
	healthId: "fighterHP"
});

$("her").data({
	"name": "Evelyn Nightshade",
	"health": 145,
	"power": 14,
	"counterAttack": 5,
	"healthId": "RangerHP"
});

$("hw").data({
	"name": "Zav Raan",
	"health": 120,
	"power": 16,
	"counterAttack": 6,
	"healthId": "wizardHP"
});

$("gb").data({
	"name": "Rask Strongjaw",
	"health": 185,
	"power": 13,
	"counterAttack": 4,
	"healthId": "barbarianHP"
});

$("hr").data({
	"name": "Tryn Shade Pimwhistle",
	"health": 140,
	"power": 15,
	"counterAttack": 5,
	"healthId": "rogueHP"
});

$("ed").data({
	"name": "Soora Admenor",
	"health": 135,
	"power": 14,
	"counterAttack": 4,
	"healthId": "druidHP"
});

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

	$(".character")
		.css("display", "inline")
		.removeClass(".defender")
		.prependTo(".start")
		.css("background-color", "green")
		.css("color", "black");

	//Set the message box to be empty

	$("#messageBox").html(" ");


	//input the name and health value for each champion

	$("#dfName").html($("#df").data(name));
	$("#fighterHP").html($("#df").data("health"));

	$("#herName").html($("#her").data("name"));
	$("#RangerHP").html($("#her").data("health"));

	$("#hwName").html($("#hw").data("name"));
	$("#wizardHP").html($("#hw").data("health"));

	$("#gbName").html($("#gb").data("name"));
	$("#barbarianHP").html($("#gb").data("health"));

	$("#hrName").html($("#hr").data("name"));
	$("#rogueHP").html($("#hr").data("health"));

	$("#edName").html($("#ed").data("name"));
	$("#druidHP").html($("#ed").data("health"));


}










});