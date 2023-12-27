const desktop = window.matchMedia('(min-width: 1200px)');
let swiper;

const createSwiper = () => {
  if (desktop.matches) {
    swiper = new window.Swiper('[data-swiper="advantages-swiper"]', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3.585,
      spaceBetween: 30,
      allowTouchMove: false,
      centeredSlides: true,
      initialSlide: 2,
      navigation: {
        nextEl: '[data-button="advantages-next"]',
        prevEl: '[data-button="advantages-prev"]',
      },
    });
  }
};

const onResize = () => {
  if (desktop.matches && (!swiper || swiper.destroyed)) {
    createSwiper();
  }
  if (!desktop.matches && swiper && !swiper.destroyed) {
    swiper.destroy(true);
  }
};

const initAdvantagesSwiper = () => {
  window.addEventListener('resize', onResize);
};

export {initAdvantagesSwiper, createSwiper};
