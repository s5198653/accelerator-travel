import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {Burger} from './modules/burger';
import {runVideo} from './modules/run-video';
import {initHeroSwiper} from './modules/hero-swiper';
import {initToursSwiper} from './modules/tours-swiper';
import {initTrainingSwiper} from './modules/training-swiper';
import {initReviewsSwiper} from './modules/reviews-swiper';
import {initAdvantagesSwiper, createSwiper} from './modules/advantages-swiper';
import {initGallerySwiper} from './modules/gallery';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();

    const form = new Form();
    window.form = form;
    form.init();
    runVideo();
    initHeroSwiper();
    initToursSwiper();
    initTrainingSwiper();
    initReviewsSwiper();
    createSwiper();
    initAdvantagesSwiper();
    initGallerySwiper();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
