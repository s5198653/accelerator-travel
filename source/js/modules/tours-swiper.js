const initToursSwiper = () =>
  new window.Swiper('[data-swiper="tours-swiper"]', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 3,
    navigation: {
      nextEl: '[data-button="tours-next"]',
      prevEl: '[data-button="tours-prev"]',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });

export {initToursSwiper};
