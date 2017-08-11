//javascript for Crystals Collector game

var crystCol = {
	score: 0,
	crystVal: [1, 2, 4, 6],
	wins: 0,
	losses: 0,
	isStarted: false};

var targetNum = Math.floor((Math.random() * 120) + 19);
var glamVal;
var fireVal;
var oreVal;
var waterVal;

console.log("peanut");

function startGame() {crystCol.isStarted = true;
	glamVal = Math.floor((Math.random() * 12) + 1);
	fireVal = Math.floor((Math.random() * 12) + 1);
	oreVal = Math.floor((Math.random() * 12) + 1);
	waterVal = Math.floor((Math.random() * 12) + 1);
	console.log(crystCol.isStarted);
};

function clearMessage() {$("#message").html("");}

function winMessage() {$("#message").html("You Won!");
	setTimeout(clearMessage, 1000);}

function loseMessage() {$("#message").html("You Lost!");
	setTimeout(clearMessage, 1000);}

function winGame() {crystCol.wins++;
	$("#winCtr").html(crystCol.wins);
	winMessage();
	crystCol.score = 0;
	$("#score").html(crystCol.score);
	startGame();
	targetNum = Math.floor((Math.random() * 120) + 19);
	$("#targetNum").html(targetNum);
}

function loseGame() {crystCol.losses++;
	$("#lossCtr").html(crystCol.losses);
	loseMessage();
	crystCol.score = 0;
	$("#score").html(crystCol.score);
	startGame();
	targetNum = Math.floor((Math.random() * 120) + 19);
	$("#targetNum").html(targetNum);
}

function upScore() {$("#score").html(crystCol.score);
	if (crystCol.score == targetNum) {winGame();}
	else if (crystCol.score > targetNum) {loseGame();}
};


$(document).ready(function() {
	$("#targetNum").html(targetNum);
	$(".crystImg").click(function() {if (crystCol.isStarted == false) {startGame();}});
	$("#glamImg").click(function() {crystCol.score += glamVal;
		upScore();});
	$("#fireImg").click(function() {crystCol.score += fireVal;
		upScore();});
	$("#oreImg").click(function() {crystCol.score += oreVal;
		upScore();});
	$("#waterImg").click(function() {crystCol.score += waterVal;
		upScore();});
});
