<?php
include("conexion.php"); 
session_start();

if (!isset($_SESSION['usuario_id'])) {
    echo "<script>alert('Debes iniciar sesión para dejar una reseña'); window.location='login.php';</script>";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario_id = $_SESSION['usuario_id']; // aquí también
    $comentario = trim($_POST['message']);

    if (!empty($comentario)) {
        $sql = "INSERT INTO reseñas (usuario_id, comentario) VALUES (?, ?)";
        $stmt = $conexion->prepare($sql);

        $stmt->bind_param("is", $usuario_id, $comentario);

        if ($stmt->execute()) {
            echo "<script>alert('¡Gracias por tu reseña!'); window.location='comentarios.php';</script>";
        } else {
            echo "<script>alert('Error al guardar la reseña');</script>";
        }
    } else {
        echo "<script>alert('El comentario no puede estar vacío');</script>";
    }
}
?>
