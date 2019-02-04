var time = 3;
var t;

function myClock(){
	var green =  document.getElementsByClassName("green");
	var timer = document.getElementById("time");
	var button = document.getElementById("next");

	var inner = timer.innerHTML = time;
	var expire = document.getElementById("expired");
    var id = document.getElementById("container-image");
	time-= 1;
	t = setTimeout(myClock, 1000)
	if(time == -1){
    id.style.pointerEvents = "none";
	
	timer.style.display = "none";
	expire.style.display = "block";
	button.style.display = "block";	
	clearTimeout(t)
	
   
    
    
	
	
	}
}


function greenButton(greenId){
    var green = document.getElementById(greenId);
    var id=   document.getElementById("container-image");
	var button = document.getElementById("next"); 
      var timer = document.getElementById("time");
    if(green.style.display ="none"){
      green.style.display ="block";
      } if (  green.style.display ="block"){
		 button.style.display  = "block";
		 button.classList.toggle("next-center");
         id.style.pointerEvents = "none";
		
         clearTimeout(t);
         timer.style.display ="none";
      }
 }  
 
 
    function redButton(a){
        var red = document.getElementsByClassName("red");
        var green = document.getElementById("green");
         var id = document.getElementById("container-image");
           var timer = document.getElementById("time");
          var button = document.getElementById("next"); 
        for(var i = 0; i < red.length; i++){
           red[i].style.display = "none";
             id.style.pointerEvents = "none";
             green.style.display = "block";
			  button.classList.toggle("button-green-auto")
		 button.classList.toggle("next-center");
             clearTimeout(t);
             timer.style.display ="none";
        }
        var ar = [a];
      var b =  red[ar].style.display ="block";
       
}


function totalScore(){
	 var inner = document.getElementById("inner");
	 var green =  document.getElementById("green");
	 if(green.style.display = "block"){
		 inner.innerHTML = 1;
	 }
	
	
}



