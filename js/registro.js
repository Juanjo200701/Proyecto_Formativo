document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    if (nombre === '' || email === '' || password === '' || password2 === '') {
        alert('Por favor, diligencie todos los campos');
    }else if (password !== password2){
        alert('Las contraseñas no coinciden');
    }
     else{
        alert('Bienvenido ' + nombre);
        window.location.href = 'pagcentral2.html';
    }
});
// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
// });
let boton = document.getElementById('mostrarContraseña');
boton.addEventListener('click', function() {
    let password = document.getElementById('password');
    // let password2 = document.getElementById('password2');
    if (password.type === 'password') {
        password.type = 'text';
        boton.style.backgroundImage = 'url(../imagenes/ojo.png)';
    } else {
        password.type = 'password';
        boton.style.backgroundImage = 'url(../imagenes/cerrar-ojo.png)';
    }
});
let boton2 = document.getElementById('mostrarContraseña2');
boton2.addEventListener('click', function() {
    let password2 = document.getElementById('password2');
    if (password2.type === 'password') {
        password2.type = 'text';
        boton2.style.backgroundImage = 'url(../imagenes/ojo.png)';
    } else {
        password2.type = 'password';
        boton2.style.backgroundImage = 'url(../imagenes/cerrar-ojo.png)';
    }
});
let formulario = document.getElementById('formulario');
window.onload = function() {
    formulario.style.opacity = '1';
    formulario.style.transition = '2s'
}