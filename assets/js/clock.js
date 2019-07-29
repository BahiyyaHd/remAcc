setInterval(drawClock, 1000);
function drawClock() {
	var t = new Date();
	var	hh = ("0"+t.getHours()).slice(-2);
	var mm = ("0"+t.getMinutes()).slice(-2);
	var ss = ("0"+t.getSeconds()).slice(-2);
	var timeStr = hh + ":" + mm + ":" + ss;
	document.getElementById("clock").innerHTML = timeStr;
}