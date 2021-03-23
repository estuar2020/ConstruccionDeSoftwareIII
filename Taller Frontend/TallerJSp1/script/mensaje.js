function mySuma() {  
    var x,y,suma,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;
    suma=parseFloat(x)+parseFloat(y);  
    text= suma;    
    document.getElementById("sumando").innerHTML = text;  
}    
function myResta() {
	var x,y,resta,text;
	x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;
    resta=parseFloat(x)-parseFloat(y);  
    text= resta;    
    document.getElementById("restando").innerHTML = text;  
}	
function myMultiplicacion() {
	var x,y,multiplicacion,text;
	x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;
    multiplicacion=parseFloat(x)*parseFloat(y);  
    text= multiplicacion;    
    document.getElementById("multiplicando").innerHTML = text;  
}	
function myDivision() {
	var x,y,division,text;
	x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;
    division=parseFloat(x)/parseFloat(y);  
    text= division;    
    document.getElementById("dividiendo").innerHTML = text;  
}
function myPotencia() {
	var x,y,potencia,text;
	x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;
    potencia= Math.pow(parseFloat(x),parseFloat(y));  
    text= potencia;    
    document.getElementById("potenciando").innerHTML = text;  
}	
function soloNum(evt){
	if(window.event){
		keynum=evt.keyCode;
	}	
	else{
		keynum=evt.which;
	}

	if(keynum>47&&keynum<58 || keynum==8 || keynum==13){
		return true;
	}	
	else{
		alert("POR FAVOR, INGRESAR SOLO NUMEROS.");
		return false;
	}	
}	
function campoVacio(){
	var  x, y;
	x=document.getElementById("num1").value;
	y=document.getElementById("num2").value;
	  if (x.length==0 || y.length==0){
		window.alert("LOS CAMPOS ESTAN VACIOS, FAVOR LLENARLOS")
	}
}	  