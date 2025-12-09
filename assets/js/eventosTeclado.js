// Crea una página junto a un script que guarde dentro de una variable global
// un color dependiendo de la letra del teclado presionada. (2 Puntos).
// ○ La letra a guardará el color rosado.
// ○ La letra s guardará el color naranjo.
// ○ La letra d guardará el color celeste.
// ○ Para guardar el color revisa el tip al final del enunciado.
// ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
// color blanco y borde negro.
// ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
// “key” a rosado, naranjo o celeste respectivamente.


// 1. DECLARACIÓN DE LA VARIABLE GLOBAL
var colorGlobal; 

document.addEventListener('keydown', function (event) {
    let cambiar = document.getElementById("key");

    if (event.key === 'a') { 
        colorGlobal = "pink";
    } else if (event.key === 's') {
        
        colorGlobal = "orange";
    } else if (event.key === 'd') {
        
        colorGlobal = "lightblue"; 
    }
    
    cambiar.style.backgroundColor = colorGlobal;

    colorDiv(event.key);
});

// Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
// deberá crear un div nuevo de las mismas dimensiones antes mencionadas
// con los colores morado, gris y café respectivamente. 
let crearDiv = function(color) {
    let nuevo = document.createElement("div");
    nuevo.style.width = "200px";
    nuevo.style.height = "200px";
    nuevo.style.backgroundColor = color;
    nuevo.style.margin = "10px 0 0 0";   
    nuevo.style.border = "2px solid black";
    // Agregar al body o al contenedor
    document.body.appendChild(nuevo);
    
};
let colorDiv = function(tecla) {

    if (tecla === "q") {
        crearDiv("purple");   
    } 
    else if (tecla === "w") {
        crearDiv("gray");      
    } 
    else if (tecla === "e") {
        crearDiv("brown");    
    }
}