let carga = document.getElementById('body');
window.onload = function(){
    carga.style.opacity = '1';
    carga.style.transition = '2s';
}
document.addEventListener('DOMContentLoaded', () => {
    const lugaresLink = document.getElementById('lugares-link');
    const menuDesplegable = document.getElementById('menu-desplegable');

    // Evento para mostrar/ocultar el menú desplegable
    lugaresLink.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace recargue la página
        menuDesplegable.classList.toggle('visible');
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menuDesplegable.contains(event.target) && event.target !== lugaresLink) {
            menuDesplegable.classList.remove('visible');
        }
    });
});