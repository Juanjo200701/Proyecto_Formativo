<?php



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <link rel="icon" href="imagenes/iconoecoturismo.jpg">
    <title>Login</title>
</head>
<body>
    <video autoplay loop muted id="video_background" preload="auto" volume="50"/>
  <source src="/imagenes/Videofondo4.mp4" type="video/mp4" />
</video>
    <header>
        <h1>Risaralda EcoTurismo</h1>
    </header>
    </div>
    <div class="contenedor">
        <div class="login">
            <form id="formulario">
                <label for="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" required>
                
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
                <button id="mostrarContraseña"></button>
                <p><strong>¿Todavía no tienes cuenta?</strong><br><a href="registro.html">Regístrate</a></p>
                
                <button id="btn" type="submit">Iniciar sesión</button>
            </form>
        </div>
        <footer>
            <p>© 2025 Risaralda EcoTurismo</p>
        </footer>
    </div>
    <script type="text/javascript" src="js/login.js"></script>
</body>
</html>