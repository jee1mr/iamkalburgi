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
	
	if ( diffEpoch / 31556926 > 0 ) {
		years = Math.round(diffEpoch / 31556926);
		diffEpoch %= 31556926;
		if (diffEpoch / 2629743 > 0 ) {
			months = Math.round(diffEpoch / 2629743); 
			diffEpoch %= 2629743;
			if ( diffEpoch / 604800 > 0 ) {
				weeks = Math.round(diffEpoch / 604800);
				diffEpoch %= 604800;
				if ( diffEpoch / 86400 > 0 ) {
					days = Math.round(diffEpoch / 86400);
					diffEpoch %= 86400;
					if ( diffEpoch / 3600 > 0 ) {
						hours = Math.round(diffEpoch / 3600);
						diffEpoch %= 3600;
					}
					if ( diffEpoch / 60){
						minutes = Math.round(diffEpoch / 60);
						diffEpoch %= 60;
					}
						seconds = Math.round(diffEpoch);
				}
			}
		}
	}

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
						sanitize(minutes, " minute") + seconds + " seconds"; 
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