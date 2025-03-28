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
setTimeout(() => {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden'); // Mostrar el popup
}, 5000); // 30 segundos

// Manejar los botones del popup
document.getElementById('register').addEventListener('click', () => {
    alert('Redirigiendo a la página de registro...');
    // Aquí puedes redirigir a la página de registro
    window.location.href = '/registro.html';
});

document.getElementById('login').addEventListener('click', () => {
    alert('Redirigiendo a la página de inicio de sesión...');
    // Aquí puedes redirigir a la página de inicio de sesión
    window.location.href = '/login.html';
});

document.getElementById('guest').addEventListener('click', () => {
    // alert('Continuando como invitado...');
    // Ocultar el popup
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
});