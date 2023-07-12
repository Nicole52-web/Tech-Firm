let Navbar = document.querySelector('.navbar');
let BxMenu = document.querySelector('.bx-menu');

BxMenu.onclick = () =>{
    Navbar.classList.toggle('active')
};

var swiper = new Swiper(".home-slid", {
    slidesPerView:1,
    spaceBetween:10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination:{
      el:".swiper-pagination",
      clickable:true,
    },
});
