function inicializarFavoritos() {
    // Obtener todos los botones de favoritos
    const botonesFavoritos = document.querySelectorAll('.boton-favorito');
    
    // Cargar favoritos guardados
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    botonesFavoritos.forEach(boton => {
        const lugar = boton.dataset.lugar;
        
        // Establecer estado inicial del botón
        if (favoritosGuardados.includes(lugar)) {
            boton.textContent = '❤️';
            boton.classList.add('favorito-activo');
        }
        
        boton.addEventListener('click', function() {
            toggleFavorito(lugar, boton);
        });
    });
}

function toggleFavorito(lugar, boton) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    if (favoritos.includes(lugar)) {
        // Remover de favoritos
        favoritos = favoritos.filter(fav => fav !== lugar);
        boton.textContent = '🤍';
        boton.classList.remove('favorito-activo');
    } else {
        // Agregar a favoritos
        favoritos.push(lugar);
        boton.textContent = '❤️';
        boton.classList.add('favorito-activo');
    }
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', inicializarFavoritos);