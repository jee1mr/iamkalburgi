var DabholkarTime = document.getElementById('DabholkarTime');
var PansareTime = document.getElementById('PansareTime');
var KalburgiTime = document.getElementById('KalburgiTime');
var DabholkarDate = "August 20 2013"; 
var PansareDate = "February 20 2015";
var KalburgiDate = "August 30 2015";

var calculateTime = function(element, date) {
	var deathDateEpoch = new Date(date).getTime()/1000.00;
	var currentDateEpoch = new Date().getTime()/1000.00;

	var diffEpoch = currentDateEpoch - deathDateEpoch;
	var years, months, weeks, days, hours, seconds; 
	
	years = Math.floor(diffEpoch / 31556926);
	diffEpoch %= 31556926;

	months = Math.floor(diffEpoch / 2629743); 
	diffEpoch %= 2629743;

	weeks = Math.floor(diffEpoch / 604800);
	diffEpoch %= 604800;

	days = Math.floor(diffEpoch / 86400);
	diffEpoch %= 86400;

	hours = Math.floor(diffEpoch / 3600);
	diffEpoch %= 3600;

	minutes = Math.floor(diffEpoch / 60);
	diffEpoch %= 60;

	seconds = Math.round(diffEpoch);

	var sanitize = function(val , key) {
		if ( val == 0 )
			return "";
		else if ( val > 1 )
			return val + key + "s ";
		else
			return val + key + " "; 
	};

	element.innerHTML = sanitize(years," year") + sanitize(months," month") + 
						sanitize(weeks," week") + sanitize(days," day")	  + 
						sanitize(hours," hour") + sanitize(minutes, " minute") + 
						seconds + " seconds"; 
};

window.setInterval(function() {
	calculateTime(DabholkarTime, DabholkarDate);
	calculateTime(PansareTime, PansareDate);
	calculateTime(KalburgiTime, KalburgiDate);
},1000);


$(document).ready(function(){
	$(".first").fadeIn(1000);
	$(".middle").fadeIn(3000);
	$(".last").fadeIn(4000);
	$(".message").fadeIn(5000);	
});