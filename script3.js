// Selecciona los contenedores de vista previa y las cajas de vista previa
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
// Añade un evento clic a cada producto
document.querySelectorAll('.products-container .product').forEach((product, index) =>{
    product.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        // Añade la clase 'active' a la caja de vista previa correspondiente al índice del producto
        previewBox[index].classList.add('active');
         // Si el producto tiene un precio de oferta, actualiza el precio en la vista previa
        let ofertaPrice = product.querySelector('.oferta-price');
        if (ofertaPrice) {
            // Actualiza el precio en la vista previa y le aplica el estilizado
        let previewPrice = previewBox[index].querySelector('.price');
        previewPrice.innerText = ofertaPrice.innerText;
        previewPrice.style.color = '#f00';
        }
    };
});
// Añade un evento clic para cerrar cada caja de vista previa
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});

// Agregar carrito

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Agrega los event listeners a los elementos de la pagina
cargarEventListeners();

function cargarEventListeners () {

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}
// Funcion que se ejecuta al hacer click en el boton de carrito
function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
        // Cerrar el preview del producto
        preveiwContainer.style.display = 'none';
        // Sacar la clase 'active' de todos los previews
        previewBox.forEach(preview => {
            preview.classList.remove('active');
        });
    }
}
// Lee los datos del elemento seleccionado y los agrega al carrito. (data target y data id para diferenciar entre el script del index y este)
function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.price').textContent,
        id: elemento.querySelector('a').getAttribute('data-target')
    }
    insertarCarrito(infoElemento);
}
// Inserta el elemento en el carrito de compras
function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100% >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="$(elemento.id)">X </a>
        </td>
    `;

    lista.appendChild(row);

}
// Elimina un elemento del carrito de compras 
function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-target');
    }
}
// Vaciar el carrito 
function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
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

// Función para mostrar mensajes de error
function showError(message, element) {
    element.innerHTML = message;
    element.style.display = 'block';
}

// Agregamos un evento de click al botón de login
btnLogin.addEventListener("click", function() {
    // Mostramos el formulario de login al hacer clic en el botón
    loginForm.classList.add("active-popup");
});

// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility(passwordField, toggleButton) {
    var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    toggleButton.classList.toggle('active');
}

// Agrega eventos de clic a los iconos de "ojo" en ambos formularios
document.getElementById('loginTogglePassword').addEventListener('click', function() {
    togglePasswordVisibility(document.getElementById('loginPassword'), this);
});

document.getElementById('registerTogglePassword').addEventListener('click', function() {
    togglePasswordVisibility(document.getElementById('registerPassword'), this);
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

// Validador 

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm'); // Selecciona el formulario de registro por su ID
    const loginButton = document.getElementById('loginButton'); // Botón de envío del formulario de inicio de sesión
    const registerButton = document.getElementById('registerButton'); // Botón de envío del formulario de registro

        // Función para mostrar mensajes de error
        function showError(message, element) {
            element.innerHTML = message;
            element.style.display = 'block';
        }

// Función para restablecer los campos del formulario
function resetFormFields(form) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = ''; // Limpiar el valor del campo
        input.classList.remove('not-empty'); // Eliminar la clase 'not-empty' si está presente
    });

    //Ocultar los mensajes de error del formulario
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => {
        errorMessage.innerHTML = ''; //limpiar el contenido del mensaje error
        errorMessage.style.display = 'none'; //ocultar el mensaje de error
    });
}

    // Validación del formulario de inicio de sesión
    loginButton.addEventListener('click', function(event) {
        const emailInput = loginForm.querySelector('input[type="email"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');
        const emailValue = emailInput.value.trim();
        

        // Verificar si el campo de correo electrónico está vacío
        if (emailValue === '') {
            event.preventDefault(); // Evitar el envío del formulario
            showError('Please enter your email.', document.getElementById('loginErrorMessage'));
            return false;
        }

        // Verificar si el campo de correo electrónico tiene un formato válido
        if (!isValidEmail(emailValue)) {
            event.preventDefault(); // Evitar el envío del formulario
            showError('Invalid email format.', document.getElementById('loginErrorMessage'));
            return false;
        }

        // Verificar si el campo de contraseña está vacío
        if (passwordInput.value.trim() === '') {
            event.preventDefault(); // Evitar el envío del formulario
            showError('Please enter your password.', document.getElementById('loginErrorMessage'));
            return false;
} 
        // Si todos los campos están completos, remueve la clase activepopup
        loginForm.classList.remove('active-popup');

        //Restablecer los campos del formulario
        resetFormFields(loginForm);
    });

    // Validación del formulario de registro
    registerButton.addEventListener('click', function(event) {
        const usernameInput = registerForm.querySelector('input[type="text"]');
        const emailInput = registerForm.querySelector('input[type="email"]');
        const passwordInput = registerForm.querySelector('input[type="password"]');
        const emailValue = emailInput.value.trim();
        const agreeCheckbox = registerForm.querySelector('input[type="checkbox"]');

        // Verificar si el campo de nombre de usuario está vacío
        if (usernameInput.value.trim() === '') {
            event.preventDefault(); // Evitar el envío del formulario
        showError('Please enter your username.', document.getElementById('registerErrorMessage'));
        return false;
        }

        // Verificar si el campo de correo electrónico está vacío
        if (emailValue === '') {
            event.preventDefault(); // Evitar el envío del formulario
        showError('Please enter your email.', document.getElementById('registerErrorMessage'));
        return false;
        }

        // Verificar si el campo de correo electrónico tiene un formato válido
        if (!isValidEmail(emailValue)) {
            event.preventDefault(); // Evitar el envío del formulario
        showError('Invalid email format.', document.getElementById('registerErrorMessage'));
        return false;
        }

        // Verificar si el campo de contraseña está vacío
        if (passwordInput.value.trim() === '') {
            event.preventDefault(); // Evitar el envío del formulario
        showError('Please enter your password.', document.getElementById('registerErrorMessage'));
        return false;
        }

        // Verificar si el checkbox de "I Agree to terms & conditions" está marcado
        if (!agreeCheckbox.checked) {
            event.preventDefault(); // Evitar el envío del formulario
        showError('Please agree to terms & conditions.', document.getElementById('registerErrorMessage'));
        return false;
        }

        // Si todos los campos están completos, remueve la clase activepopup
        loginForm.classList.remove('active-popup');

        //Restablecer los campos del formulario
        resetFormFields(registerForm);
    });
});

// Agregar eventos de entrada para controlar la posición de las etiquetas
function addInputEvents(input) {
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            input.classList.add('not-empty');
        } else {
            input.classList.remove('not-empty');
        }
    });
}

const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(addInputEvents);

const passwordInputs = document.querySelectorAll('input[type="password"]');
passwordInputs.forEach(addInputEvents);

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}