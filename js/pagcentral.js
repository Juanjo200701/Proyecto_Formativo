let variable = document.getElementById('contenido');
variable.style.backgroundColor = '#242A2F';
document.getElementById('catalogo-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.getElementById('barralateral').classList.toggle('visible');
    document.getElementById('contenido').classList.toggle('shifted');
});