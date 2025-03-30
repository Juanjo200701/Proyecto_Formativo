document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    if (nombre === '' || email === '' || password === '' || password2 === '') {
        alert('Por favor, diligencie todos los campos');
    } else{
        alert('Bienvenido ' + nombre);
        window.location.href = 'pagcentral.html';
    }
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (password !== password2) {
        alert('Las contraseñas no coinciden');
    }else{
        alert('Bienvenido ' + nombre);
        window.location.href = 'pagcentral.html';
    }
});
let boton = document.getElementById('mostrarContraseña');
boton.addEventListener('click', function() {
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    if (password.type === 'password' && password2.type === 'password') {
        password.type = 'text';
        password2.type = 'text';
        boton.style.backgroundImage = 'url(../imagenes/ojo.png)';

    } else {
        password.type = 'password';
        password2.type = 'password';
        boton.style.backgroundImage = 'url(../imagenes/cerrar-ojo.png)';
    }
});
let formulario = document.getElementById('formulario');
window.onload = function() {
    formulario.style.opacity = '1';
    formulario.style.transition = '2s'
}