let carga = document.getElementById('body');
window.onload = function(){
    carga.style.opacity = '1';
    carga.style.transition = '2s'
}
setTimeout(()=>{
    let pregunta = document.getElementById('pregunta');
    pregunta.style.opacity = '1';
},6000);
boton_si = document.getElementById('si');
boton_no = document.getElementById('no');
boton_si.addEventListener('click',function(){
    pregunta.style.opacity = '0';
    pregunta.style.transition = '1s';
});
boton_no.addEventListener('click',function(){
    let popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    pregunta.style.opacity = '0';
});
// Manejar los botones del popup
document.getElementById('register').addEventListener('click', () => {
    alert('Redirigiendo a la página de registro...');
    // Aquí puedes redirigir a la página de registro
    window.location.href = '/registro.html';
});

document.getElementById('login').addEventListener('click', () => {
    // alert('Redirigiendo a la página de inicio de sesión...');
    // Aquí puedes redirigir a la página de inicio de sesión
    window.location.href = '/login.html';
});

document.getElementById('guest').addEventListener('click', () => {
    // alert('Continuando como invitado...');
    // Ocultar el popup
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
});