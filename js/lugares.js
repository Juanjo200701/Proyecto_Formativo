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
            listaFavoritos.appendChild(li);
        });
    };

    // Alternar un lugar en favoritos (agregar o eliminar)
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