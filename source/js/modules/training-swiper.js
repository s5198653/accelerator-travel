const initTrainingSwiper = () =>
  new window.Swiper('[data-swiper="training-swiper"]', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    initialSlide: 3,
    navigation: {
      nextEl: '[data-button="training-next"]',
      prevEl: '[data-button="training-prev"]',
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,

        allowTouchMove: false,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 2,
        allowTouchMove: true,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 4,
        allowTouchMove: true,
      },
    },
  });

export {initTrainingSwiper};
