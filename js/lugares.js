document.addEventListener('DOMContentLoaded', () => {
    const botonesFavorito = document.querySelectorAll('.favorito');
    const listaFavoritos = document.getElementById('favoritos-list');
    const contadorFavoritos = document.getElementById('contador-favoritos');
    const popupFavoritos = document.getElementById('popup-favoritos');
    const botonMostrarFavoritos = document.getElementById('mostrar-favoritos');
    const botonCerrarPopup = document.getElementById('cerrar-popup');
    const mensajeVacio = document.getElementById('mensaje-vacio');

    // Cargar favoritos desde localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Mostrar favoritos en la lista
    const mostrarFavoritos = () => {
        listaFavoritos.innerHTML = ''; // Limpia la lista de favoritos
        if (favoritos.length === 0) {
            mensajeVacio.classList.remove('hidden'); // Mostrar el mensaje si no hay favoritos
        } else {
            mensajeVacio.classList.add('hidden'); // Ocultar el mensaje si hay favoritos
            favoritos.forEach((lugar) => {
                const li = document.createElement('li');
                li.textContent = lugar;

                // Crear botón de eliminar con ícono de basura
                const botonEliminar = document.createElement('button');
                botonEliminar.innerHTML = '🗑️'; // Ícono de basura
                botonEliminar.classList.add('eliminar-favorito');
                botonEliminar.addEventListener('click', () => {
                    const index = favoritos.indexOf(lugar);
                    if (index !== -1) {
                        favoritos.splice(index, 1); // Eliminar el lugar de la lista
                        localStorage.setItem('favoritos', JSON.stringify(favoritos)); // Actualizar localStorage
                        mostrarFavoritos(); // Actualizar la lista en la página
                        actualizarEstadoBotones(); // Actualizar los botones
                        actualizarContador(); // Actualizar el contador
                    }
                });

                li.appendChild(botonEliminar); // Agregar el botón al elemento de la lista
                listaFavoritos.appendChild(li); // Agregar el elemento a la lista
            });
        }
    };

    // Actualizar el estado de los botones al cargar la página
    const actualizarEstadoBotones = () => {
        botonesFavorito.forEach((boton) => {
            const lugar = boton.getAttribute('data-lugar');
            if (favoritos.includes(lugar)) {
                boton.textContent = '❤️'; // Cambiar el ícono a "corazón lleno"
            } else {
                boton.textContent = '🤍'; // Cambiar el ícono a "corazón vacío"
            }
        });
    };

    // Actualizar el contador de favoritos
    const actualizarContador = () => {
        contadorFavoritos.textContent = favoritos.length;
    };

    // Alternar un lugar en favoritos (agregar o eliminar desde las tarjetas)
    botonesFavorito.forEach((boton) => {
        boton.addEventListener('click', () => {
            const lugar = boton.getAttribute('data-lugar');
            const index = favoritos.indexOf(lugar);

            if (index === -1) {
                // Si el lugar no está en favoritos, agregarlo
                favoritos.push(lugar);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                mostrarFavoritos();
                boton.textContent = '❤️'; // Cambiar el ícono a "corazón lleno"
            } else {
                // Si el lugar ya está en favoritos, eliminarlo
                favoritos.splice(index, 1);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                mostrarFavoritos();
                boton.textContent = '🤍'; // Cambiar el ícono a "corazón vacío"
            }
            actualizarContador(); // Actualizar el contador
        });
    });

    // Mostrar el popup de favoritos
    botonMostrarFavoritos.addEventListener('click', () => {
        popupFavoritos.classList.remove('hidden');
    });

    // Cerrar el popup de favoritos
    botonCerrarPopup.addEventListener('click', () => {
        popupFavoritos.classList.add('hidden');
    });

    // Inicializar la página
    mostrarFavoritos();
    actualizarEstadoBotones();
    actualizarContador();
});