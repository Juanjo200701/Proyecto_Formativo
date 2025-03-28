let variable = document.getElementById('contenido');
variable.style.backgroundColor = '#242A2F';
document.getElementById('catalogo-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.getElementById('barralateral').classList.toggle('visible');
    document.getElementById('contenido').classList.toggle('shifted');
});
let carga = document.getElementById('body');
window.onload = function(){
    carga.style.opacity = '1';
    carga.style.transition = '2s'
}