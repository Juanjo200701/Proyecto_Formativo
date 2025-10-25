<?php
session_start();
require_once 'conexion.php';

$mensaje = '';


// Obtener datos del usuario en sesión (username, email, fecha_regsitro)
$user = null;
if (isset($_SESSION['usuario_id'])) {
    $user_id = $_SESSION['usuario_id'];
    $stmt = $conexion->prepare("SELECT username, email, fecha_registro FROM usuarios WHERE id = ?");
    if ($stmt) {
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result && $result->num_rows > 0) {
            $user = $result->fetch_assoc();
        }
        $stmt->close();
    }
}


?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configuración - RisaraldaEcoTurismo</title>
    <link rel="stylesheet" href="css/configuracion.css">
    <link rel="icon" href="imagenes/iconoecoturismo.jpg">
</head>
<body>
    <header>
        <div class="header-container">
            <div class="titulos">
                <img src="imagenes/iconoecoturismo.jpg" width="70px" alt="Logo">
                <h2 class="risaralda">RisaraldaEcoTurismo</h2>
            </div>
            <a href="pagcentral2.php" class="volver">Volver</a>
        </div>
    </header>

    <main class="config-container">
        <div class="config-menu">
            <div class="menu-item active" data-section="perfil">
                <i class="icon">👤</i>
                <span>Perfil</span>
            </div>
            <div class="menu-item" data-section="favoritos">
                <i class="icon">❤️</i>
                <span>Favoritos</span>
            </div>
            <div class="menu-item" data-section="seguridad">
                <i class="icon">🔒</i>
                <span>Cambia Tu Contraseña</span>
            </div>
            <div class="menu-item" data-section="Cerrar Sesión">
                <a href="pagcentral.html" id="cerrar-sesion"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 48 48"><g fill="none" stroke="#2c3e50" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M23.9917 6H6V42H24"/><path d="M33 33L42 24L33 15"/><path d="M16 23.9917H42"/></g></svg> Cerrar Sesión</a>


            </div>
        </div>

        <div class="config-content">
            <!-- Sección Perfil -->
            <section id="perfil" class="config-section active">
                <h2>Información del Perfil</h2>
                <div class="profile-info">
                    <div class="info-group">
                        <label>Nombre de Usuario</label>
                        <?php if ($user): ?>
                                <p id="perfil-username"><?php echo htmlspecialchars($user['username']); ?></p>
                            <?php else: ?>
                                <p id="perfil-username">Usuario no encontrado</p>
                            <?php endif; ?>
                    </div>
                    <div class="info-group">
                        <label>Correo Electrónico</label>
                        <?php if ($user): ?>
                                <p id="perfil-email"><?php echo htmlspecialchars($user['email']); ?></p>
                            <?php else: ?>
                                <p id="perfil-email">Correo no disponible</p>
                            <?php endif; ?>
                    </div>
                    <div class="info-group">
                        <label>Fecha de Registro</label>
                        <?php if ($user && !empty($user['fecha_registro'])): ?>
                            <p id="profile-date"><?php echo htmlspecialchars(date('d/m/Y', strtotime($user['fecha_registro']))); ?></p>
                        <?php else: ?>
                            <p id="profile-date">Fecha no disponible</p>
                        <?php endif; ?>
                    </div>
                </div>
            </section>

            <!-- Sección Favoritos -->
            <section id="favoritos" class="config-section">
                <h2>Lugares Favoritos</h2>
                <div class="favorites-container" id="favorites-list">
                    <!-- Los favoritos se cargarán dinámicamente -->
                </div>
            </section>

            <!-- Sección Seguridad -->
            <section id="seguridad" class="config-section">
                <h2>Cambiar Contraseña</h2>
                <form id="password-form" class="password-change-form">
                    <div class="form-group">
                        <label for="current-password">Contraseña Actual</label>
                        <input type="password" id="current-password" required>
                    </div>
                    <div class="form-group">
                        <label for="new-password">Nueva Contraseña</label>
                        <input type="password" id="new-password" required>
                    </div>
                    <div class="form-group">
                        <label for="confirm-password">Confirmar Nueva Contraseña</label>
                        <input type="password" id="confirm-password" required>
                    </div>
                    <button type="submit" class="btn-cambiar">Cambiar Contraseña</button>
                </form>
            </section>
        </div>
    </main>

    <script src="js/configuracion.js"></script>
</body>
</html>