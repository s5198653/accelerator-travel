const initGallerySwiper = () =>
  new window.Swiper('[data-swiper="gallery-swiper"]', {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 'auto',
    navigation: {
      nextEl: '[data-button="gallery-next"]',
      prevEl: '[data-button="gallery-prev"]',
    },
    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
      768: {
        allowTouchMove: true,
      },
      320: {
        allowTouchMove: true,
      },
    },
  });

export {initGallerySwiper};
