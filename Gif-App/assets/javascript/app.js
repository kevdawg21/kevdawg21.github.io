var movies = ["2001", "2012", "300", "inception", "dunkirk", "contagion",
  "amadeus", "citizenfour", "interstellar", "patton", "rounders", "gravity", "the martian"];

function loadMovieGif() {
	 	movie = $(this).attr("data-name");
	 	console.log(movie);
	 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	    movie + "&api_key=dc6zaTOxFJmzC&limit=10";
	    $.ajax({
	          url: queryURL,
	          method: "GET"
	        })
	    .done(function(response) {
	        console.log(response);
	        var results = response.data;
	        for (var i = 0; i < results.length; i++) {
	        	stillUrl = results[i].images.fixed_height_still.url
	        	playUrl = results[i].images.fixed_height.url
	            var movDiv = $("<div>");
	            var p = $("<p>").text("Rating: " + results[i].rating);
	            var movImg = $("<img>");
	            movImg.addClass("movieGif");
	            movImg.attr("data-state", "still");
	            movImg.attr("data-still", results[i].images.fixed_height_still.url);
	            movImg.attr("data-play", results[i].images.fixed_height.url);
	            movImg.attr("src", results[i].images.fixed_height_still.url);
	            movDiv.append(p);
	            movDiv.append(movImg);
	            $("#giphys").prepend(movDiv);
	    	}
	    });
};

function playGif() {
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-play"));
        $(this).attr("data-state", "play");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
};
	           

function displayBtns() {
	$("#btnmenu").empty();
	for (var i = 0; i < movies.length; i++) {
	    var btn = $('<button class="movbtn">').text(movies[i]).attr("data-name", movies[i]);
	    $("#btnmenu").append(btn);
	    $("#newmovie").val("");
	}
};

$("#submitbtn").on("click", function(e) {
	e.preventDefault();
	var input = $("#newmovie").val().trim();
	var dupeCheck = movies.includes(input);
	if (!dupeCheck) {
		if (input.length == 0) {$("#newmovie").val("");
		} else {
			movies.push(input);
			displayBtns();
		}
	} else {
		$("#newmovie").val("");
	}

});

$(document).on("click", ".movbtn", loadMovieGif);
$(document).on("click", ".movieGif", playGif);

displayBtns();