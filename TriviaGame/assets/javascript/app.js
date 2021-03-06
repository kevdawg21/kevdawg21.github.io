

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
