function myInformations(){
	var id = document.getElementById("informations-image");
	id.style.display = "block";
}  
	
	
	var time = 5;
 var t;

function myClock(start, container, button, exp){
	var id= document.getElementById(start);
	var id2 =  document.getElementById(container);
	var id3 = document.getElementById(button);
	var expired =  document.getElementById(exp);
	id.innerHTML = time;
	t = setTimeout(function() {myClock(start, container, button, exp)}, 1000);
	time-=1;
	if(time <= 0){
		clearTimeout(t);
		id2.style.pointerEvents = "none";
		id3.classList.toggle("button-green-auto");
		id3.style.background = " hsl(150, 100%, 40%)";
		time = 5;
		expired.style.display = "block";
	}
}

	function totalScore(greenButton){
	var id = document.getElementById("inner");
	var green = document.getElementById(greenButton);
	var id2 = document.getElementById("inner2");	
	if(green.style.display == "block"){
	 id.innerHTML = parseInt(id.innerHTML) + 1;
	} 
}

 
			



function greenButton(principal, button, container){
   
 
	 var green = document.getElementById(principal)
	var buttonGreen = document.getElementById(button); 
	var id= document.getElementById(container); 
	/*var time = document.getElementById("time");*/
    var inner = document.getElementById("inner");  
	  
   
      green.style.display = "block";
       if (  green.style.display = "block"){
		
		  clearTimeout(t);
		  time = 5;
		 
		 buttonGreen.classList.toggle("button-green-auto");
		 buttonGreen.style.background = " hsl(150, 100%, 40%)";
         id.style.pointerEvents = "none";
		
       
      } 
 }  
 
 
    function redButton(a, principal, greenId, button){
		 var id = document.getElementById(principal);
		
        var red = id.getElementsByClassName("red");
		
        var green = document.getElementById(greenId);
        var id2 = document.getElementById("inner2");
        
          var buttonGreen = document.getElementById(button); 
		
        for(var i = 0; i < red.length; i++){
           red[i].style.display = "none";
             clearTimeout(t);
			time = 5;
			  buttonGreen.style.background = " hsl(150, 100%, 40%)";
             green.style.display = "block";
		 buttonGreen.classList.toggle("button-green-auto");
			id.style.pointerEvents = "none";
            
        }
		
        var ar = [a];
      var b =  red[ar].style.display ="block";
    if (red[ar].style.display == "block"){
		 id2.innerHTML = parseInt(id2.innerHTML) + 1;
	}
}

 








