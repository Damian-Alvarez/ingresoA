/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let contadorHombres = 0;
	let acumuladorEdad = 0;
	let promedio;
	let flag = 0;
	let mayorTemperatura;
	let mujerMayorTemperatura;
	for(let i = 0;i < 5;i++){


		nombre = prompt("Ingrese nombre");
		while(nombre == ""){
			nombre = prompt("Error! Ingrese el nombre nuevamente");
		}
		edad = parseInt(prompt("Ingrese edad"));
		while(edad <= 0 || isNaN(edad)){
		edad = parseInt(prompt("Error! Ingrese una edad valida"));
		}
		acumuladorEdad += edad
		sexo = prompt(`Ingreso sexo."f" o "m"`);
		while(sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error! Ingrese un sexo valido");

		}
		temperatura = parseFloat(prompt("Ingrese su temperatura"));

		if(sexo == "f"){
			contadorMujeres++;
			}
			if(sexo == "m"){
			contadorHombres++;
			}
	if(sexo == "f"){

		if( flag == 0){
			mayorTemperatura = temperatura;
			mujerMayorTemperatura = nombre;
				flag = 1;
			}else if(temperatura > mayorTemperatura){
				mujerMayorTemperatura = nombre;
				mayorTemperatura = temperatura;
				}
		}
}
	promedio = acumuladorEdad / 5;
	console.log("la cantidad de mujeres es: " + contadorMujeres + " y la cantidad de hombres es: " + contadorHombres);
	console.log("La edad promedio total es: " + promedio);
	console.log("La mujer con mas temperatura es: " + mujerMayorTemperatura);
}
