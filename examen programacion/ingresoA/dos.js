/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let seguir;
  let marca;
  let precio;
  let peso;
  let tipo;
  let pesoTotal = 0;
  let MarcaMasCara;
  let flag = 0;
  let MarcaMasLiviano;
  let flag2 = 0;
  let pesoMasLiviano;
  do {
    marca = prompt("Ingrese la marca");
    while(marca == ""){
      marca = prompt("Error! Ingrese la marca");
    }
    precio = parseFloat(prompt("Ingrese el precio"));
    while(precio <= 0 || isNaN(precio)){
      precio = parseFloat(prompt("Error! Ingrese un precio valido(mayor a 0)"));
    }
    peso = parseFloat(prompt("Ingrese el peso"));
    while(peso <= 0 || isNaN(peso)){
      peso = parseFloat(prompt("Ingrese un peso valido(mayor a 0)"));
    }
    pesoTotal += peso;
    tipo = prompt("Ingrese el tipo(liquido o solido)");
    while(tipo != "solido" && tipo != "liquido"){
      tipo = prompt("Ingrese un tipo valido(liquido o solido)");
    }

    if(tipo == "liquido"){
      if(flag == 0 )
      {
      MarcaMasCara = marca;
      }
      else if(marca > MarcaMasCara){
      MarcaMasCara = marca;
      }
}
if(tipo == "solido"){
  if(flag2 == 0)
  {
  MarcaMasLiviano = marca;
  pesoMasLiviano = peso;
  }
 else if(peso < pesoMasLiviano)
  {
  pesoMasLiviano = peso;
  MarcaMasLiviano = marca;
  }
}
  seguir = prompt("Quiere continuar?");
 
  }while(seguir == "s");

  console.log("El peso total de la compra es: " + pesoTotal + " kilogramos");
  console.log("La marca del mas Caro de liquidos es: " + MarcaMasCara);
  console.log("La marca del mas liviano de solidos es: " + MarcaMasLiviano);

}
