function convertirCelsius(){
	var celsius = document.getElementById('farenheit').value;
	var res =9/5*(celsius)+32;
	document.getElementById('respuesta').innerHTML=res;
}

