/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let lugar;
	let temporada;
	let cantPersonas;
	let respuesta;
	do{
		nombre = prompt("Ingrese titular");
		lugar = prompt("Ingrese lugar");
		temporada = prompt("Ingrese titular");
		cantPersonas = prompt("Ingrese titular");
		
	
		parseInt(cantPersonas);
		
		while(lugar != "bariloche" || lugar != "cataratas" || lugar != "salta"){
		lugar = prompt("Error, ingrese lugar correcto: ");
		}
		
		while(cantPersonas <= 0){
		cantPersonas = prompt("error, ingrese:");
		}
		while (temporada != "otoño" || temporada!= "verano" || temporada!= "primavera" || temporada!= "invierno" )
		{
		temporada= prompt("error, reingrese")
		}
		
		respuesta = prompt("Quiere continuar?");
		}while(respuesta == "s");
		
}
