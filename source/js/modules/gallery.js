const initGallerySwiper = () =>
  new window.Swiper('[data-swiper="gallery-swiper"]', {
    slidesPerView: 'auto',
    slidesPerGroup: 2,
    slidesPerGroupSkip: 1,
    centeredSlides: false,
    loopAddBlankSlides: true,
    loop: true,
    speed: 700,
    grabCursor: true,
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
