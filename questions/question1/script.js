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


function greenButton(principal){
   
    var id=   document.getElementById(principal);
	 var green = id.getElementsByClassName("green")[0];
	var buttonGreen = document.getElementById("button-green"); 
      var timer = document.getElementById("time");
    if(green.style.display ="none"){
      green.style.display ="block";
      } if (  green.style.display ="block"){
		 
		 buttonGreen.classList.toggle("button-green-auto");
         id.style.pointerEvents = "none";
		
         clearTimeout(t);
         timer.style.display ="none";
      }
 }  
 
 
    function redButton(a, principal, greenId){
		 var id = document.getElementById(principal);
		
        var red = id.getElementsByClassName("red");
		
        var green = document.getElementById(greenId);
        
           var timer = document.getElementById("time");
          var buttonGreen = document.getElementById("button-green"); 
        for(var i = 0; i < red.length; i++){
           red[i].style.display = "none";
           
             green.style.display = "block";
		 buttonGreen.classList.toggle("button-green-auto");
			id.style.pointerEvents = "none";
             clearTimeout(t);
             timer.style.display ="none";
        }
		
        var ar = [a];
      var b =  red[ar].style.display ="block";
    
}


function totalScore(){
	 var inner1 = document.getElementById("inner");
	
	 var inner2 = document.getElementById("inner2");
	 var innerTotal = document.getElementById("innerTotal");
	 var green =  document.getElementById("green");
	var green2 =  document.getElementById("green2");
	 if(green.style.display = "block"){
		 inner1.innerHTML = 1;
	 }
	if(green2.style.display = "block"){
		 inner2.innerHTML = 2;
	 }
	innerTotal.innerHTML =  inner1.innerHTML.length + inner2.innerHTML.length;
}



