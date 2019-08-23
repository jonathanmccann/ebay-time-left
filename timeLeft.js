var timeLeftElement = document.getElementById("vi-cdown_timeLeft");
var documentTitle = document.title;

var getTimeLeft = function() {
	var timeLeft = timeLeftElement.innerHTML;

	document.title = timeLeft + " | " + documentTitle;
}

if (timeLeftElement !== null) {
	window.setInterval(getTimeLeft, 1000);
}