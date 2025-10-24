<?php
require_once 'conexion.php';
$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $telefono = $_POST['phone'] ?? '';
    $mensaje_texto = $_POST['message'] ?? '';

    if (empty($nombre) || empty($email) || empty($mensaje_texto)) {
        $mensaje = "<span style='color:red;'>Por favor, completa todos los campos obligatorios.</span>";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mensaje = "<span style='color:red;'>El correo electrónico no es válido.</span>";
    } else {
        $stmt = $conexion->prepare("INSERT INTO mensajes_contacto (nombre_usuario, email, telefono, mensaje) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $nombre, $email, $telefono, $mensaje_texto);

        if ($stmt->execute()) {
            $mensaje = "<span style='color:green;'>¡Mensaje enviado correctamente! Te contactaremos pronto.</span>";
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
    <title>Contacto Enviado</title>
    <link rel="stylesheet" href="css/contacto.css">
    <link rel="icon" href="imagenes/iconoecoturismo.jpg">
</head>
<body>
    <div class="container">
        <div class="form">
            <div class="contact-info">
                <h3 class="tittle">Gracias por contactarnos</h3>
                <p class="text"><?= $mensaje ?></p>
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
                </div>
                <div class="social-media">
                    <p>Conéctate con nosotros:</p>
                    <div class="social-icon">
                        <a href="pagcentral2.php"><button id="volver">Volver al inicio</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
