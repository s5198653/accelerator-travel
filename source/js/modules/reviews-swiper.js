const initReviewsSwiper = () =>
  new window.Swiper('[data-swiper="reviews-swiper"]', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '[data-button="reviews-next"]',
      prevEl: '[data-button="reviews-prev"]',
    },
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });

export {initReviewsSwiper};
