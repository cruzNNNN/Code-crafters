document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMensaje = document.getElementById("mensajeError");

    // Validación del nombre de usuario
    if (username === "") {
        errorMensaje.textContent = "Por favor, introduce un nombre de usuario.";
        return;
    }

    // Validación del correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMensaje.textContent = "Por favor, introduce un correo electrónico válido.";
        return;
    }

    // Validación de la contraseña
    if (password === "" || password.length < 6) {
        errorMensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    // Si llegamos aquí, significa que todos los campos son válidos
    errorMensaje.textContent = "";
    alert("Formulario enviado correctamente.");
});
