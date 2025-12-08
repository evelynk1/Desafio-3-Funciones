// Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función


// =====FUNCION ORIGINAL=====
// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

// =====FUNCION ANONIMA=====
// let ele = document.getElementById("ele1");
// ele.addEventListener("click", function() {
//     ele.style.backgroundColor = "yellow";
// });


// Modifica el código anterior para poder pasarle un color como argumento a la
// función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
// párrafo se debe pasar amarillo como color. 


// =====FUNCION ANONIMA MODIFICADA=====
let ele = document.getElementById("ele1");

let pintar = function(color = "green") {
    ele.style.backgroundColor = color;
};
// VERDE POR DEFECTO
pintar();
// Al hacer clic se cambia a amarillo
ele.addEventListener("click", function() {
    pintar("yellow");
});
