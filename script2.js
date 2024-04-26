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

document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackMessage = document.querySelector('.feedback-message');
    const errorMessage = document.querySelector('.error-message');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const rating = document.querySelector('input[name="rating"]:checked');
        const comment = document.getElementById('comment').value.trim();

        if (rating && comment) {
            // Espacio para guardar el la base de datos
            // Por ahora, solo mostrar el mensaje en la consola y en la pagina
            console.log("Feedback recibido");

            // Mostrar el mensaje de "feedback recibido"
            feedbackMessage.style.display = 'block';

            // Ocultar el mensaje de error
            errorMessage.style.display = 'none';

            // Ocultar el formulario después de enviar el feedback
            feedbackForm.style.display = 'none';
        } else {
            // Mostrar un mensaje de error si no se cumplen los requisitos
            errorMessage.style.display = 'block';
        }
    });
// Función para manejar el clic en las estrellas
const stars = document.querySelectorAll('.stars i');
stars.forEach((star, index) => {
    star.addEventListener('click', function() {
        // Obtener el índice de la estrella clicada
        const clickedIndex = parseInt(this.getAttribute('data-index'));
        
        // Iterar sobre todas las estrellas y marcar las estrellas desde la primera hasta la clicada
        stars.forEach((s, i) => {
            // Marcar las estrellas desde la primera hasta la clicada inclusive
            s.classList.toggle('selected', i <= clickedIndex);
        });
        
        // Marcar el radio correspondiente
        const radio = document.getElementById(`star${clickedIndex + 1}`);
        radio.checked = true;
    });
});
});