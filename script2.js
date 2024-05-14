//swiper testimonios
const swiper = new Swiper('.js-testimonios-slider', {
grabCursor: true,
spaceBetween:30,
pagination:{
    el: '.js-testimonios-pagination',
    clickable: true
},
breakpoints:{
    767:{
        slidesPerView: 2
    }
}
});

//feedback form

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
    btn.onclick = ()=>{
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = ()=>{
        widget.style.display = "block";
        post.style.display = "none";
        }
        return false;
    }

    // Obtenemos todos los datos del login
var btnLogin = document.getElementById("btn-login");
var loginForm = document.getElementById("loginForm");
var iconClose = document.querySelector('.icon-close');
var loginRegister = document.querySelector('.login-register');
var loginBox = document.querySelector('.login');
var registerBox = document.querySelector('.register');
var registerLink = document.querySelector('.register-link');
var loginLink = document.querySelector('.login-link');

// Función para mostrar el formulario de login y ocultar el de registro
function showLoginForm() {
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
    loginLink.innerHTML = 'Login';
}

// Función para mostrar el formulario de registro y ocultar el de login
function showRegisterForm() {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
    registerLink.innerHTML = 'Register';
}

// Agregamos un evento de click al botón de login
btnLogin.addEventListener("click", function() {
    // Mostramos el formulario de login al hacer clic en el botón
    loginForm.classList.add("active-popup");
});

// Agregamos un evento de click al icono de cierre
iconClose.addEventListener('click', function() {
    // Ocultamos el formulario de login al hacer clic en el icono de cierre
    loginForm.classList.remove("active-popup");
});

// Agregamos un evento de click al enlace de registro
registerLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos que se ejecute el enlace
    
    if (registerBox.style.display !== 'block') {
        // Mostramos el formulario de registro y ocultamos el de login
        showRegisterForm();
    } else {
        // Mostramos el formulario de login y ocultamos el de registro
        showLoginForm();
    }
});

// Agregamos un evento de click al enlace de login
loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos que se ejecute el enlace
    
    if (loginBox.style.display !== 'block') {
        // Mostramos el formulario de login y ocultamos el de registro
        showLoginForm();
    } else {
        // Mostramos el formulario de registro y ocultamos el de login
        showRegisterForm();
    }
});

//Validador 

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm'); // Selecciona el formulario de registro por su ID
    const loginButton = document.getElementById('loginButton'); // Botón de envío del formulario de inicio de sesión
    const registerButton = document.getElementById('registerButton'); // Botón de envío del formulario de registro

 // Validación del formulario de inicio de sesión
loginButton.addEventListener('click', function(event) {
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');

    // Verificar si el campo de correo electrónico está vacío
    if (emailInput.value.trim() === '') {
        event.preventDefault(); // Evitar el envío del formulario
        alert('Please enter your email.');
        return;
    }

    // Verificar si el campo de contraseña está vacío
    if (passwordInput.value.trim() === '') {
        event.preventDefault(); // Evitar el envío del formulario
        alert('Please enter your password.');
        return;
    }

    // Si todos los campos están completos, remueve la clase activepopup
    loginForm.classList.remove('activepopup');
});


// Validación del formulario de registro
registerButton.addEventListener('click', function(event) {
    const usernameInput = registerForm.querySelector('input[type="text"]');
    const emailInput = registerForm.querySelector('input[type="email"]');
    const passwordInput = registerForm.querySelector('input[type="password"]');
    const agreeCheckbox = registerForm.querySelector('input[type="checkbox"]');

    // Verificar si el campo de nombre de usuario está vacío
    if (usernameInput.value.trim() === '') {
        event.preventDefault(); // Evitar el envío del formulario
        alert('Please enter your username.');
        return;
    }

    // Verificar si el campo de correo electrónico está vacío
    if (emailInput.value.trim() === '') {
        event.preventDefault(); // Evitar el envío del formulario
        alert('Please enter your email.');
        return;
    }

    // Verificar si el campo de contraseña está vacío
    if (passwordInput.value.trim() === '') {
        event.preventDefault(); // Evitar el envío del formulario
        alert('Please enter your password.');
        return;
    }

    // Verificar si el checkbox de "I Agree to terms & conditions" está marcado
    if (!agreeCheckbox.checked) {
        event.preventDefault(); // Evitar el envío del formulario
        alert('Please agree to terms & conditions.');
        return;
    }

// Si todos los campos están completos, remueve la clase activepopup
registerForm.classList.remove('activepopup');
});
});
