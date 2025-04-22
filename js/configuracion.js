document.addEventListener('DOMContentLoaded', function() {
    // Menu navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.config-section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.dataset.section;
            
            // Update active menu item
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Show selected section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // document.addEventListener('DOMContentLoaded', function() {
        // ...existing menu navigation code...
    
        // Load favorites with more detailed information
        const favoritesList = document.getElementById('favorites-list');
        const favorites = JSON.parse(localStorage.getItem('favoritos')) || []; // Changed to match the key used in favoritos.js
    
        if (favorites.length === 0) {
            favoritesList.innerHTML = '<p class="no-favorites">No tienes lugares favoritos guardados.</p>';
        } else {
            favoritesList.innerHTML = favorites.map(fav => `
                <div class="favorite-item">
                    <h3>${fav}</h3>
                    <button class="btn-remove" onclick="removeFavorite('${fav}')">
                        🗑️
                    </button>
                </div>
            `).join('');
        }
    
        // Function to remove favorite
        window.removeFavorite = function(favName) {
            let favorites = JSON.parse(localStorage.getItem('favoritos')) || [];
            favorites = favorites.filter(fav => fav !== favName);
            localStorage.setItem('favoritos', JSON.stringify(favorites));
            
            // Refresh the favorites list without reloading the page
            const favoritesList = document.getElementById('favorites-list');
            if (favorites.length === 0) {
                favoritesList.innerHTML = '<p class="no-favorites">No tienes lugares favoritos guardados.</p>';
            } else {
                favoritesList.innerHTML = favorites.map(fav => `
                    <div class="favorite-item">
                        <h3>${fav}</h3>
                        <button class="btn-remove" onclick="removeFavorite('${fav}')">
                            🗑️
                        </button>
                    </div>
                `).join('');
            }
        };
    
        // ...existing password form code...

    // Password change form
    const passwordForm = document.getElementById('password-form');
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            alert('Las contraseñas nuevas no coinciden');
            return;
        }

        // Aquí iría la lógica de cambio de contraseña con backend
        // alert('Función no disponible - Requiere implementación de backend');
        passwordForm.reset();
    });
});

// Function to remove favorite
function removeFavorite(favName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(fav => fav !== favName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    location.reload();
}