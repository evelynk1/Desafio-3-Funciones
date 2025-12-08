
// Dentro del script agrega el evento para que al hacer click a cada uno de los
// divs, este cambie de color al color negro. Utiliza addEventListener para
// agregar el evento.

let pintar = function(elemento, color = "black") {
elemento.style.backgroundColor = color;
};

azul.addEventListener("click", function() {
pintar(azul);
});

rojo.addEventListener("click", function() {
pintar(rojo);
});

verde.addEventListener("click", function() {
pintar(verde);
});

amarillo.addEventListener("click", function() {
pintar(amarillo);
});

