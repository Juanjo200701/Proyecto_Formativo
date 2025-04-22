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
// Add this to your existing JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const perfilLink = document.getElementById('perfil-link');
    const perfilMenu = document.getElementById('perfil-menu');

    perfilLink.addEventListener('click', function(e) {
        e.preventDefault();
        perfilMenu.classList.toggle('visible');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!perfilLink.contains(e.target) && !perfilMenu.contains(e.target)) {
            perfilMenu.classList.remove('visible');
        }
    });
});