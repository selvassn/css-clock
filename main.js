(function($){
	
	function getTime(){
		
		var currDate = new Date(),
			currHour = currDate.getHours(),
			currMin = currDate.getMinutes(),
			currSec = currDate.getSeconds();
			
			//To calculate degrees
			secDeg = currSec * 360 / 60,
            minDeg = (currMin + currSec / 60) * 360 / 60,
            hourDeg = (currHour + currMin / 60 + currSec / 60 / 60) * 360 / 12;
		
		$("#digital").text(currHour +":"+ currMin +":"+ currSec);
		$("#hour").css({"transform" : "rotate(" + hourDeg +"deg"});
		$("#min").css({"transform" : "rotate(" + minDeg +"deg"});
		$("#sec").css({"transform" : "rotate(" + secDeg +"deg"});
		
	}
	
	
	$(function() {
		setInterval(getTime,1000);
	});
	
	
})(jQuery)