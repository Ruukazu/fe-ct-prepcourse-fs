/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var resultado = [];
   for(i in objeto){
      var valor = objeto[i];
      var arreglo = [i, valor];
      resultado.push(arreglo);
   }
   return resultado;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const charCount = {};

   // Recorremos el string.
   for (let i = 0; i < string.length; i++) {
     const char = string[i].toLowerCase(); 
     

     if (charCount[char]) {
       charCount[char]++;
     } else {

       charCount[char] = 1;
     }
   }

   const sortedChars = {};
   Object.keys(charCount).sort().forEach((key) => {
     sortedChars[key] = charCount[key];
   });
 
   return sortedChars;
 }

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusc = "";
   var minusc = "";
 
   for (var i = 0; i < string.length; i++) {
     var caract = string[i];
     if (caract.toUpperCase() === caract) {
      mayusc += caract;
     } else {
      minusc += caract;
     }
   }
 
   return mayusc + minusc;
 
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var frasenuev = "";
   var arreglo = frase.split(" ");
   for(i = 0; i< arreglo.length; i++){
      var palabra = arreglo[i].split("");
      var palabrareversa = palabra.reverse();
      nuevapalabra = palabrareversa.join("")
      if (i === 0) {
         frasenuev = nuevapalabra;
       } else {
         frasenuev = frasenuev + " " + nuevapalabra; 
       }
     }
   
     return frasenuev;
   }

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   const numeroStr = numero.toString();
   const numeroReverso = numeroStr.split("").reverse().join("");
 
   if (numeroStr === numeroReverso) {
     return "Es capicua";
   } else {
     return "No es capicua";
   }
 }
 

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/g, "");
}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   const arregloorden = arrayOfStrings.slice();

   arregloorden.sort((a, b) => a.length - b.length);
 
   console.log(arregloorden);
   return arregloorden;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const intersection = [];

   for (let i = 0; i < array1.length; i++) {
     const currentElement = array1[i];
 
     // Check if the current element is present in array2
     if (array2.includes(currentElement)) {
       // Check if the element is already in the intersection array to avoid duplicates
       if (!intersection.includes(currentElement)) {
         intersection.push(currentElement);
       }
     }
   }
 
   return intersection;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
