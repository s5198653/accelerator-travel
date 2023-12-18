const initReviewsSwiper = () =>
  new window.Swiper('[data-swiper="reviews-swiper"]', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 120,
    navigation: {
      nextEl: '[data-button="reviews-next"]',
      prevEl: '[data-button="reviews-prev"]',
    },
    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
      768: {
        spaceBetween: 30,
        allowTouchMove: true,
      },
      320: {
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });

export {initReviewsSwiper};
