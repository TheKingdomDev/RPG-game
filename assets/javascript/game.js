// console.log("linked");

//Dungeons and Dragons RPG Game

$(document).ready(function() {

//Set each champion as an object



	var	df = {
		name: "Bron Stouthammer",
		health: 180,
		power: 12,
		counterAttackPower: 4,
		healthId: "fighterHP"
	}

	var her = {
		name: "Brom Nightshade",
		health: 145,
		power: 14,
		counterAttackPower: 5,
		healthId: "RangerHP"
	}

	var gb = {
		name: "Rask Strongjaw",
		health: 185,
		power: 13,
		counterAttackPower: 4,
		healthId: "barbarianHP"
	}

	var hr = {
		name: "Shade Pimwhistle",
		health: 140,
		power: 15,
		counterAttackPower: 5,
		healthId: "rogueHP"
	}


//========Global Variables=======//

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
var origvalue;



//========Functions=======//



//create a function to Initialize the game

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

	$("#enemyStyle").hide();


	//input the name and health value for each champion

	$("#dfName").html(df.name);
	$("#fighterHP").html(parseInt(df.health));

	$("#herName").html(her.name);
	$("#rangerHP").html(parseInt(her.health));

	$("#gbName").html(gb.name);
	$("#barbarianHP").html(parseInt(gb.health));

	$("#hrName").html(hr.name);
	$("#rogueHP").html(parseInt(hr.health));

	
}

//Create a function when then attack button is pressed to apply the champion attack power and defender counter attack power

function attackEvent() {
	//make sure the attack power grows with each attack
	//update the champion and defender health
	//show the resluts of the attack in the message box
	//make checks to see if the player is at 0 health add a status for losing in message box
	//make checks to see if the defender is at 0 health and remove them
	if(attacker === null || defender === null) {
		$("#messageBox").append("<p>No enemy to fight.</p>");
	}
	else if(attacker.health > 0 && defender.health > 0) {
		defender.health = defender.health - attacker.power;
		attacker.health = attacker.health - defender.counterAttackPower;

		$(".defender .fighterHP").html(defender.health);
		console.log(defender.health);
		$(".champion .fighterHP").html(attacker.health);
		console.log(attacker.health);
		$("#messageBox").html("<p>You have attacked " + defender.name + "for " + attacker.power + "damage</p><p>" + defender.name + " has attacked you back for " + defender.counterAttackPower + " damage</p>");

	if($(".enemy .character").is(":empty") && defender.health <= 0) {
		$("#messageBox").html("<p>You have won the Arena Battle! Hail, Victor!</p>");

	}
	else if(defender.health <= 0) {
		defenderLoses = true;
		$("#messageBox").html("<p>You have defeated " + defender.name + " you can choose to fight another enemy.</p>");
		$(".defender").remove();
		
	}
	else if(attacker.health <= 0) {
		championLoses = true;
		$("#messageBox").html("<p>You have been defeated, Game Over! Press reset to try again.</p>");
	}


	attacker.power += attack;

	}
}



//========Listeners=======//

//Create an on click function for the player to select a chamption
$(".character").on("click", function () {

	if(!isChampionChosen) {
		//append the character to the selectedChampion location
		$(this).appendTo("#selectedChampion");

		//change the css to show that the selected character is your champion
		$(this).addClass("champion");

		var clickedBtnID = $(this).attr('id');
	
			switch (clickedBtnID) {
		    case "df":
		        attacker = df;
		        break;
		    case "her":
		        attacker = her;
		        break;
		    case "gb":
		        attacker = gb;
		        break;
		    case "hr":
		    	attacker = hr;
			}

				//set base value of attack power and health
				attack = parseInt(attacker.power);
				championHealth = parseInt(attacker.health);

				console.log(attack);
				console.log(championHealth);

		

		//hide the select your champion div
		$("#selectRem").hide();

		$("#enemyStyle").show();
		//Call the function that creates the enemies
		$(".character").addClass("enemy");
		//set the isChampionChosen to true
		isChampionChosen = true;

	}

		//create an on click function for the player to select the first opponent
			$(".character").on("click", function () {

				

			if(!isDefenderChosen) {	
			//append the character to the defender location
			$(this).appendTo("#defenderLocation");

			//change the css to show that the selected character is the defender
			$(this).addClass("defender");

			$(this).removeClass("champion");
		
			//Turn of listener to prevent another click 		
			// $(".character").off("click");

			var clickedBtnID = $(this).attr('id');


			switch (clickedBtnID) {
			    case "df":
			        defender = df;
			        break;
			    case "her":
			        defender = her;
			        break;
			    case "gb":
			        defender = gb;
			        break;
			    case "hr":
			    	defender = hr;
				}


				//set value of defender counter attack power and health	
				counterAttack = parseInt(defender.counterAttackPower);
				defenderHealth = parseInt(defender.health);
				console.log(counterAttack);
				console.log(defenderHealth);

			$("#messageBox").empty();


			isDefenderChosen = false;
			}

		});

});

			
//Create a reset function to call init()

$("#resetButton").on("click", function() {
	init();
});


//Listener for the attack button

$("#attackButton").on("click", attackEvent);






//========Calls=======//

init();









});