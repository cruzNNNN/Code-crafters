const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelector(".pw_hide");

// Función para mostrar el formulario
function showForm() {
    home.classList.add("show");
}

// Función para ocultar el formulario
function hideForm() {
    home.classList.remove("show");
}

// Escuchar clic en el botón de abrir formulario
formOpenBtn.addEventListener("click", showForm);

// Escuchar clic en el botón de cerrar formulario
formCloseBtn.addEventListener("click", hideForm);