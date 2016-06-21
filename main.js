function myclock (){

	var D = new Date()
	var h= D.getHours()
	var m= D.getMinutes()
	var s= D.getSeconds()


// adding a cero to minutes and seconds 
	m=checkTime(m)
	s=checkTime(s)

	function checkTime(i)
	{
		if (i<10)
		{ i="0" + i}
		return i
	}

	// document.getElementById("clock").innerHTML=h +":"+ m +":"+ s
	document.getElementById("hours").innerHTML = h 
	document.getElementById("minutes").innerHTML = m  
	document.getElementById("seconds").innerHTML = s

	

//-----------------------changing the colors ODD / EVEN ---------------------------------------------
	// The modular operator (%) returns the division remainder.
	// every even number has 0 as remainder ___ x % 2 ___
	// every odd numner has 1 as a remainder

		if (s % 2 == 0){
		    console.log("even") // EVEN
		    document.getElementById("seconds").style.color="#222"
		}else{
   			console.log("odd") // EVEN
   			document.getElementById("seconds").style.color="#ccc"
		}
}



//-----------------------changing the color background every 5 minutos apply random  ---------------------------------------------
	
function bgcolors(){
		var D = new Date()
		var m= D.getMinutes()
		var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

		if (m % 5 ==0){
			document.body.style.backgroundColor = randomColor
			console.log("cinco")
		}else{
			document.body.style.backgroundColor = "#fff"
		}
}
	

	//-----------------------changing the color text every hour  ---------------------------------------------

function textcolors(){
		
			var D = new Date()
			var m= D.getMinutes()
			var colors = ['red', 'green', 'blue', 'orange', 'yellow']

			if (m == 0){
				document.getElementById("text").style.color = colors[Math.floor(Math.random() * colors.length)]
			}

		}

	



window.onload = function(){
		setInterval(myclock,1)
		setInterval(bgcolors,1000)
		setInterval(textcolors,1000)
}

