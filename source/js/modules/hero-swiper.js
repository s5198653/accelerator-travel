const initHeroSwiper = () =>
  new window.Swiper('[data-swiper="hero-swiper"]', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
      320: {
        allowTouchMove: true,
      },
    },
  });

export {initHeroSwiper};
