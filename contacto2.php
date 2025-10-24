<?php
require_once 'conexion.php';
$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $telefono = $_POST['phone'] ?? '';
    $mensaje_texto = $_POST['message'] ?? '';

    // Validaciones básicas
    if (empty($nombre) || empty($email) || empty($mensaje_texto)) {
        $mensaje = "<span style='color:red;'>Por favor, completa todos los campos obligatorios.</span>";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mensaje = "<span style='color:red;'>El correo electrónico no es válido.</span>";
    } else {
        // Guardar en la base de datos
        $stmt = $conexion->prepare("INSERT INTO mensajes_contacto (nombre_usuario, email, telefono, mensaje) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $nombre, $email, $telefono, $mensaje_texto);

        if ($stmt->execute()) {
            $mensaje = "<span style='color:green;'>Mensaje enviado correctamente. ¡Gracias por contactarnos!</span>";
        } else {
            $mensaje = "<span style='color:red;'>Error al guardar el mensaje: " . $stmt->error . "</span>";
        }
        $stmt->close();
    }
    $conexion->close();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="css/contacto.css">
    <link rel="icon" href="imagenes/iconoecoturismo.jpg">
</head>
<body>
    <div class="container">
        <div class="form">
            <div class="contact-info">
                <h3 class="tittle">Pongámonos en contacto</h3>
                <p class="text">Escríbenos y te buscamos la mejor opción para tu página.</p>
                <div class="info">
                    <div class="information">
                        <img src="imagenes/maps-and-location.png" class="icon" alt="">
                        <p>Dosquebradas - Pereira</p>
                    </div>
                    <div class="information">
                        <img src="imagenes/correo-electronico.png" class="icon" alt="">
                        <a href="mailto:proyectoecoturismo2@gmail.com">proyectoecoturismo2@gmail.com</a>
                    </div>
                    <div class="information">
                        <img src="imagenes/telefono.png" class="icon" alt="">
                        <a href="tel:3134152020">3134152020</a>
                    </div>
                    <div class="information copyright">
                        <p>&copy; 2025 RisaraldaEcoTurismo</p>
                    </div>
                </div>
                <div class="social-media">
                    <p>Conéctate con nosotros:</p>
                    <div class="social-icon">
                        <a href="https://www.facebook.com/share/1Bf6vo7qJA/?mibextid=wwXIfr">
                            <img src="imagenes/iconofb.png" width="30px" alt="">
                        </a>
                        <a href="https://wa.link/tuxrjn">
                            <img src="imagenes/iconowp.png" width="30px" alt="">
                        </a>
                        <a href="#">
                            <img src="imagenes/iconoig.png" width="30px" alt="">
                        </a>
                        <button id="volver"><a href="pagcentral2.php">Volver</a></button>
                    </div>
                </div>
            </div>
            <div class="contact-form">
                <form action="contacto.php" method="POST">
                    <h3 class="tittle">Contáctanos</h3>
                    <div class="input-container focus">
                        <input type="text" name="name" class="input" required>
                        <label>Nombre de usuario</label>
                        <span>Nombre de usuario</span>
                    </div>
                    <div class="input-container focus">
                        <input type="email" name="email" class="input" required>
                        <label>Correo</label>
                        <span>Correo</span>
                    </div>
                    <div class="input-container focus">
                        <input type="tel" name="phone" class="input">
                        <label>Teléfono</label>
                        <span>Teléfono</span>
                    </div>
                    <div class="input-container textarea focus">
                        <textarea name="message" class="input" required></textarea>
                        <label>Mensaje</label>
                        <span>Mensaje</span>
                    </div>
                    <input type="submit" value="Enviar" class="btn">
                    <?php if (!empty($mensaje)): ?>
                        <div style="margin-top:10px;"><?= $mensaje ?></div>
                    <?php endif; ?>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
