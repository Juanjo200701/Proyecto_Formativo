document.addEventListener('DOMContentLoaded', () => {
    const botonesFavorito = document.querySelectorAll('.favorito');
    const listaFavoritos = document.getElementById('favoritos-list');

    // Cargar favoritos desde localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Mostrar favoritos en la lista
    const mostrarFavoritos = () => {
        listaFavoritos.innerHTML = '';
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
                }
            });

            li.appendChild(botonEliminar); // Agregar el botón al elemento de la lista
            listaFavoritos.appendChild(li); // Agregar el elemento a la lista
        });
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
                // alert(`${lugar} se ha guardado en tus favoritos.`);
            } else {
                // Si el lugar ya está en favoritos, eliminarlo
                favoritos.splice(index, 1);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                mostrarFavoritos();
                // alert(`${lugar} se ha eliminado de tus favoritos.`);
            }
        });
    });

    // Mostrar los favoritos al cargar la página
    mostrarFavoritos();
});