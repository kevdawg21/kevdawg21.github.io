var qapairs = {

        pair: [
	{
		qu: "What is the closest planet to the sun?",
		oa: "Venus",
		ob: "Mercury",
		oc: "Earth",
		od: "Jupiter",
		an: "B"
	},
	{
		qu: "What planet is closest to the Earth?",
		oa: "Venus",
		ob: "Mercury",
		oc: "Jupiter",
		od: "Mars",
		an: "A"
	},
	{
		qu: "What planet is farthest from the sun?",
		oa: "Mars",
		ob: "Neptune",
		oc: "Saturn",
		od: "Mercury",
		an: "B"
	},
	{
		qu: "What is the closest star to the sun?",
		oa: "Alpha Centauri A",
		ob: "Alpha Centauri B",
		oc: "Proxima Centauri",
		od: "Sirius",
		an: "C"
	},
	{
		qu: "How many planets orbit the sun?",
		oa: "4",
		ob: "8",
		oc: "9",
		od: "13",
		an: "B"
	},
	{
		qu: "Which of the following planets does not have any moons?",
		oa: "Saturn",
		ob: "Mars",
		oc: "Venus",
		od: "Uranus",
		an: "C"
	},
	{
		qu: "Which is the most massive planet orbiting the sun?",
		oa: "Earth",
		ob: "Mars",
		oc: "Jupiter",
		od: "Saturn",
		an: "C"
	},
	{
		qu: "Which is the hottest planet orbiting the sun?",
		oa: "Mercury",
		ob: "Mars",
		oc: "Jupiter",
		od: "Venus",
		an: "D"
	},
	{
		qu: "How far is the moon from the Earth's surface?",
		oa: "247 miles",
		ob: "247,000 miles",
		oc: "2.47 million miles",
		od: "2.47 light years",
		an: "B"
	},
	{
		qu: "Approximately long does it take light from the sun to reach Earth?",
		oa: "82 seconds",
		ob: "8 minutes and 20 seconds",
		oc: "8 hours and 20 minutes",
		od: "820 minutes",
		an: "B"
	}]
};

var correct = 0;
var incorrect = 0;
var isRunning = false;
var timer = {
	maxTime: 30,
	elapsedTime: 0,
	start: function() {
	    if (!isRunning) {
	        intervalId = setInterval(timer.count, 1000);
	        isRunning = true;
	    }
	},
	count: function() {
	    timer.elapsedTime++;
	    currentTime = 30 - timer.elapsedTime;
	    $("#display").html(":" + currentTime);
	    if (currentTime === 0) {timer.stop();
	    	falseAnswer();}
	},
	reset: function() {
		timer.elapsedTime = 0;
		currentTime = 30
		$("#display").html(":" + currentTime);
	},
	stop: function() {
		clearInterval(intervalId);
		isRunning = false;
	}
}

var x = -1;

function newQapair() {x++;
	$("#question").text(qapairs.pair[x].qu);
	$("#oa").text("[A] " + qapairs.pair[x].oa);
	$("#ob").text("[B] " + qapairs.pair[x].ob);
	$("#oc").text("[C] " + qapairs.pair[x].oc);
	$("#od").text("[D] " + qapairs.pair[x].od);
	timer.reset();
	timer.start();
}

function clearAnswers() {
	$("#oa").text("");
	$("#ob").text("");
	$("#oc").text("");
	$("#od").text("");
	correct = 0;
	incorrect = 0;
	isRunning = false;
}

function trueAnswer() {
	correct++;
	timer.stop();
	$("#question").html("Excellent! " + qapairs.pair[x].an + " was the correct answer! You now have answered " + correct + " questions correctly and " + incorrect + " questions incorrectly.")
	if (x === 9) {gameOver(); console.log("x:", x);} else {setTimeout(newQapair, 3000);}
}

function falseAnswer() {
	incorrect++;
	timer.stop();
	$("#question").html("I'm afraid the correct answer was " + qapairs.pair[x].an + ". You now have answered " + correct + " questions correctly and " + incorrect + " questions incorrectly.")
	if (x === 9) {gameOver(); console.log("x:", x);} else {setTimeout(newQapair, 3000);}
}

function gameOver() {
	$("#question").html("The correct answer was " + qapairs.pair[x].an + "." + "<br> GAME OVER! You answered " + correct + " questions correctly and " + incorrect + " questions incorrectly. Click the Launch button to play again!")
	x = -1;
	timer.stop();
	clearAnswers();
}

$("#launch").on("click", function(event) {
	if (!isRunning) {
		newQapair();
	}
})

$("#oa").on("click", function(event) {
	if (isRunning){
		if (this.dataset.let === qapairs.pair[x].an) {trueAnswer();} else {falseAnswer();}
	}
})
$("#ob").on("click", function(event) {
	if (isRunning){
		if (this.dataset.let === qapairs.pair[x].an) {trueAnswer();} else {falseAnswer();}
	}
})
$("#oc").on("click", function(event) {
	if (isRunning){
		if (this.dataset.let === qapairs.pair[x].an) {trueAnswer();} else {falseAnswer();}
	}
})
$("#od").on("click", function(event) {
	if (isRunning){
		if (this.dataset.let === qapairs.pair[x].an) {trueAnswer();} else {falseAnswer();}
	}
})
