
 var hr;
 var mins;
 var secs;
 var meridiem;

var x = document.getElementById("clock");
var formatButton = document.getElementById("format");
var format = false;

function printTime(){
	var d = new Date();
	hr = d.getHours();
	mins = d.getMinutes();
	secs = d.getSeconds();


	if(hr >= 12){meridiem = " PM";}
  else{meridiem = " AM";}

   formatButton.onclick = function(){format = !format}
    if(format === false){if(hr >= 13 && hr <= 24){hr-=12;}}
    
    if(hr < 10 ){
    	hr = "0" + hr;
    }
    if(mins < 10 ){
      mins = "0" + mins;

    }
     if(secs < 10 ){
    	secs = "0" + secs;
    }

     var clock = hr +":" + mins + ":" + secs + meridiem;

	 x.innerText = clock;
}



setInterval(printTime, 1000);


