let Navbar = document.querySelector('.navbar');
let Bxmenu = document.querySelector('.bx-menu');

Bxmenu.onclick = () =>{
    Navbar.classList.toggle('active')
}

var swiper = new Swiper(".home-slid", {
    slidesPerView:1,
    spaceBetween:10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination:{
      el:"swiper-pagination",
      clickable:true,
    }
});
