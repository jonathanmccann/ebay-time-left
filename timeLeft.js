var documentTitle = document.title;
var timerTextElements = document.getElementsByClassName('ux-timer__text');

var getTimeLeft = function(element) {
	var timeLeft = element.innerText.replace("Ends in ", "");

	document.title = timeLeft + " | " + documentTitle;
}

if (timerTextElements[0] !== undefined){
	window.setInterval(getTimeLeft, 1000, timerTextElements[0]);
}