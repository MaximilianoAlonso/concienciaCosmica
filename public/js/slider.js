const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints:{
    768:{
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024:{
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1440:{
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 