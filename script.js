$(document).ready(function() {

  $("body").css({
    "background-color": "#f2f2f2",
    "margin": "0",
    "padding": "0",
    "border": "none"
  });

  var heading = document.createElement("h1");
  heading.innerHTML = "Sketch Pad";
  heading.style.textAlign = "center";
  heading.style.color = "#2f2f2f";

  $("body").append(heading);

  var container = document.createElement("div");
  container.className = "container";
  container.style.width = "512px";
  container.style.height = "512px";
  container.style.margin = "auto";
  container.style.border = "2px solid darkgrey";

  $("body").append(container);

  for (var i = 0; i < 256; i++) {
    var div = document.createElement("div");
    div.className = "innerDiv";
    $(".container").append(div);
  }

  $(".innerDiv").css({
    "background-color": "#fff",
    "width": "32px",
    "height": "32px",
    "float": "right"
    });

  $(".innerDiv").mouseenter(function() {
    $(this).css("background-color", "#000");
  });

  $("body").append("<br>");

  var reset = document.createElement("button");
  reset.innerHTML = "Reset";
  reset.className = "reset";
  reset.style.display = "block";
  reset.style.margin = "auto";
  $("body").append(reset);

  $(".reset").click(function() {
    $(".container").empty();
	var userInput = prompt("Enter number of squares per side to make your grid (enter between 2 and 64):");
	if (isNaN(userInput)) {
		alert("Error: Your input is not a number!");
	}
	else if (userInput <2 || userInput > 64) {
		alert("Error: Input out of range!");
	}
	else {
		var squareWidth = 512 / userInput;
		var iter = userInput * userInput;
		for (var i = 0; i < iter; i++) {
			var div2 = document.createElement("div");
			div2.className = "innerDiv2";
			$(".container").append(div2);
		}
		$(".innerDiv2").css({
			"width": squareWidth+"px",
			"height": squareWidth+"px",
			"float": "right",
			"background-color": "#fff"
		});
		$(".innerDiv2").mouseenter(function() {
			$(this).css("background-color", "#000");
		});
	}
  });
});
