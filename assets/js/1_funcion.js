// Transforma esta declaración de función a una función de expresión. El ejercicio debe
// quedar en un archivo nombrado `1_funcion.js` 

// =====FUNCION ORIGINAL=====
function example(a, b, c){
return a+b+c
}

// =====FUNCION DE EXPRESION=====
const ejemplo = function (a, b, c){

    return a+b+c;
}

console.log(ejemplo(2, 4, 6));