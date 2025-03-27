document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (nombre === '' || password === '') {
        alert('Por favor, ingrese su nombre de usuario y contraseña');
    } else{
        alert('Bienvenido ' + nombre);
        window.location.href = 'pagcentral.html';
    }

});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});
let boton = document.getElementById('mostrarContraseña');
boton.addEventListener('click', function() {
    let password = document.getElementById('password');
    if (password.type === 'password') {
        password.type = 'text';
        boton.style.backgroundImage = 'url(../imagenes/ojo.png)';

    } else {
        password.type = 'password';
        boton.style.backgroundImage = 'url(../imagenes/cerrar-ojo.png)';
    }
});
let formulario = document.getElementById('formulario');
window.onload = function() {
    formulario.style.opacity = '1';
    formulario.style.transition = '2s'

}