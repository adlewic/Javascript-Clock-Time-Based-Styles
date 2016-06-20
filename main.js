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

	t=setTimeout('myclock()', 500)
}


window.onload = function(){
	myclock()
}