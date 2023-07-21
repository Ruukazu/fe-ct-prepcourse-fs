/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   ultpos = array.length -1;
   return(array[ultpos]);
   

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   ultimo = array.length;
   return(ultimo);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map( (num) => { return num + 1 } ); 
   return(masUno)
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.push(elemento); 
   return(array)
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.unshift(elemento); 
   return(array)
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   palabras = palabras.join(" "); 
   return(palabras)
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for(i = 0; i < array.length; i++){
      console.log(i);
       if(array[i]===elemento){
        console.log(true);
          return(true);
       }
       
       
    }return(false);
      
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   suma = 0; 
   for(i = 0; i < arrayOfNums.length; i++){

       suma = suma + arrayOfNums[i];
           
        }
        return(suma);
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   suma = 0; 
   for(i = 0; i < resultadosTest.length; i++){     
       suma = suma + resultadosTest[i];

        }
        prom = suma/resultadosTest.length
        return(prom);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos 
   // los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, 
   // simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   console.log(arguments.length);
   if(arguments.length===0){
     return(0);  
  }else{
   producto = 1; 
   for(i = 0; i < arguments.length; i++){ 
      producto = producto * arguments[i]; 
       }
       console.log(producto);
       return(producto);
       
         
     }

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de 
   // elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   nuevoarray = [];
   for(var i = 0; i < array.length; i++){
      if(array[i ]> 18){
         nuevoarray.push(array[i]);
   }
   
   }

      return(nuevoarray.length);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican 
   // como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, 
   // retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y 
   // "Es dia laboral" en caso contrario.
   // Tu numeroDeDia:
     if(numeroDeDia >=2  && numeroDeDia <=6){
       console.log("Es dia laboral")
       return("Es dia laboral");
      }else if(numeroDeDia === 7 || numeroDeDia === 1){
       console.log("Es fin de semana")
       return("Es fin de semana");  
     }else{
      console.log("No es dia de la semana")
      return("No es dia de la semana");
     }
 
 
 }

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var primernumero = String(num)[0];
   if(primernumero == 9){
      return true;
   }else if (primernumero !== 9){
      return false;
}
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
  
    var firstElement = array[0];
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] !== firstElement) {
        return false;       }
    }
    return true; 
}
function mesesDelAño(array) {
   const meses = [];
   for (var i = 0; i < array.length; i++) {
     if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
       meses.push(array[i]);
     }
   }
 
   if (meses.length === 3) {
     return meses;
   } else {
     return "No se encontraron los meses pedidos";
   }
 }

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   numeroseis = 6;
   tabladel6 = [];
   for(var i = 0; i <= 10; i++){
         producto = numeroseis * i;
         tabladel6.push(producto);
      }
   console.log(tabladel6);
   return(tabladel6);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoarr = [];
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         nuevoarr.push(array[i]);
      }
    }
    console.log(nuevoarr);
    return nuevoarr; 
 
 
 }

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var suma = 0;
   var nuevoarr = [];
 
   for (var i = 0; i < 10; i++) {
     num = num + 2;
     nuevoarr.push(num);
     suma = suma + num;
 
     if (suma === (i + 1) * 2) {
       return "Se interrumpió la ejecución";
     }
   }
 
   return nuevoarr;
 }

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   suma = 0;
   var nuevoarr = [];

   for (var i = 0; i < 10;  i++) {
      if (i === 5) {
         continue;
      }
      num = num + 2;
      nuevoarr.push(num);
      
    }
    console.log(nuevoarr);
    return nuevoarr; 
 
 
 
 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
