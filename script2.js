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
