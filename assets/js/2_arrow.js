// Transforma la siguiente función a una arrow function de una línea. Este ejercicio
// debe quedar en un archivo llamado `2_arrow.js`  

// =====FUNCION ORIGINAL=====
let suma = function(a, b){
return a + b
}

// =====FUNCION FLECHA=====
let sumar = (a, b) => a + b;

console.log(sumar(10, 5));