<?php
session_start();
require_once 'conexion.php';

// Verifica que el usuario esté logueado
if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.php");
    exit;
}

$usuario_id = $_SESSION['usuario_id'];

// Consulta los datos del usuario
$stmt = $conexion->prepare("SELECT username, email FROM usuarios WHERE id = ?");
$stmt->bind_param("i", $usuario_id);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows === 1) {
    $usuario = $resultado->fetch_assoc();
} else {
    echo "Usuario no encontrado.";
    exit;
}
$stmt->close();
$conexion->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/pagcentral2.css">
    <link rel="icon" href="imagenes/iconoecoturismo.jpg">
    <title>Risaralda Ecoturismo</title>
</head>
<body id="body">
    <header>
        <div class="header-container">
            <div class="titulos">
                <img src="imagenes/iconoecoturismo.jpg" width="70px" alt="">
                <h2 class="risaralda">RisaraldaEcoTurismo</h2>
            </div>
            <nav class="navbar">
                <a class="catalogo" href="comentarios.php" id="catalogo-link">Reseñas</a>
                <a class="contacto" href="contacto2.php">Contacto</a>
                <a href="#" id="lugares-link">Lugares</a>
                <div class="menu-desplegable" id="menu-desplegable">
                    <a href="paraisosacuaticos2.html">🤽 Paraísos Acuáticos</a>
                    <a href="lugaresmontañosos2.html">⛰️ Parques y Más...</a>
                    <a href="territoriosdelcafe2.html">🍵 Territorios del café</a>
                </div>
                <div class="perfil-container">
                    <a href="#" id="perfil-link">👤 Perfil</a>
                    <div class="perfil-menu" id="perfil-menu">
                        <div class="perfil-info">
                            <?php if (isset($usuario)): ?>
                                <p id="perfil-username"><?php echo htmlspecialchars($usuario['username']); ?></p>
                                <p id="perfil-email"><?php echo htmlspecialchars($usuario['email']); ?></p>
                            <?php else: ?>
                                <p id="perfil-username">Usuario no encontrado</p>
                            <?php endif; ?>
                        </div>
                        <div class="perfil-opciones">
                            <a id="configuracion" href="configuracion.php">⚙️ Configuracion</a>
                            <a href="logout.php" id="cerrar-sesion"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 48 48"><g fill="none" stroke="#2c3e50" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M23.9917 6H6V42H24"/><path d="M33 33L42 24L33 15"/><path d="M16 23.9917H42"/></g></svg> Cerrar Sesión</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <main id="contenido">
        <div class="slider-container">
            <div class="intro-text">
                <h1>Bienvenidos a RisaraldaEcoTurismo</h1>
                <p>Encuentre en un solo lugar información detallada sobre los atractivos ecoturísticos de Risaralda, clasificados por temática y con recursos útiles para planificar su visita.</p>
                </div>
            <div class="slider">
                <div class="slide slide1">
                    <img src="imagenes/termales.jpg" alt="imagen 1">
                </div>
                <div class="slide slide2">
                    <img src="imagenes/laguna-2.png" alt="imagen 2">
                </div>
                <div class="slide slide3">
                    <img src="imagenes/consota-4.webp" alt="imagen 3">
                </div>
            </div>
        </div>
    </main>
    <footer>
        <p>© 2025 Risaralda EcoTurismo</p>
        <br>
        <a href="cookies2.html">Cookies</a> |
        <a href="terminosdeuso2.html">Términos de uso</a> |
        <a href="politicas2.html">Políticas de privacidad</a>
    </footer>
    <script src="js/pagcentral2.js"></script>
</body>
</html>