var documentTitle = document.title;
var timeLeftElement = document.getElementById("vi-cdown_timeLeft");
var timerTextElements = document.getElementsByClassName('ux-timer__text');

var getTimeLeft = function(timeLeft) {
	document.title = timeLeft + " | " + documentTitle;
}

if (timeLeftElement !== null) {
	window.setInterval(getTimeLeft, 1000, timeLeftElement.innerHTML);
}
else if (timerTextElements[0] !== undefined){
	window.setInterval(getTimeLeft, 1000, timerTextElements[0].innerText.replace("Ends in ", ""));
}