var timeLeftElement = document.getElementById("vi-cdown_timeLeft");
var documentTitle = document.title;

var getTimeLeft = function() {
	var timeLeft = timeLeftElement.innerHTML;

	document.title = timeLeft + " | " + documentTitle;
}

if ((timeLeftElement !== null) && (timeLeftElement.children.length == 0)) {
	window.setInterval(getTimeLeft, 1000);
}