var timeLeftElement = document.getElementById("vi-cdown_timeLeft");
var documentTitle = document.title;

var getTimeLeft = function() {
	var timeLeft;

	var children = timeLeftElement.children;

	if (children.length == 6) {
		timeLeft = children[0].innerHTML + children[1].innerHTML + " " + children[2].innerHTML + children[3].innerHTML + " " + children[4].innerHTML + children[5].innerHTML;
	}
	else {
		timeLeft = timeLeftElement.innerHTML;
	}

	document.title = timeLeft + " | " + documentTitle;
}

if (timeLeftElement !== null) {
	window.setInterval(getTimeLeft, 1000);
}