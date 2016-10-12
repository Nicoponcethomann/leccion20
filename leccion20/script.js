// Ejercicio 1 
function promediar(a,b,c){
	return (a+b+c)/3;
}

function Promedio(a,b,c, callback){
	return promediar(a,b,c);
}

//otra alternativa

function callbackPromedio(a,b,c,callback){
	var promedio = (a+b+c)/3;

	return callback (promedio);
}

// Ejercicio 2
var incremento=1;

function segundero(){ 
	document.getElementById("titulo").innerHTML = incremento++; 
	}

setInterval(segundero , 1000);
