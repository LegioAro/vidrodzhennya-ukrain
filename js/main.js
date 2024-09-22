function burgerHandle() {
  const burger = document.querySelector('.burger');
  const burgerBtn = document.querySelector('.burger__btn');
  // const body = document.querySelector('body');

  if (burgerBtn && burger) {
    burgerBtn.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      burgerBtn.classList.toggle('burger__btn--active');
      // body.classList.toggle('body--lock');
    });
  }
}

burgerHandle();

//header

function headerScroll() {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0 && !header.classList.contains('header--scroll')) {
    header.classList.add('header--scroll');
  } else if (window.pageYOffset <= 0 && header.classList.contains('header--scroll')) {
    header.classList.remove('header--scroll');
  }
}
headerScroll();

window.addEventListener('scroll', function () {
  headerScroll();
});

//resize

isResize('.header__nav', '.header__content', '.burger', 768);
isResize('.who__img-block', '.who__wrapper', '.who__mob', 768, 'first');

window.addEventListener('resize', () => {
  isResize('.header__nav', '.header__content', '.burger', 768);
  isResize('.who__img-block', '.who__wrapper', '.who__mob', 768, 'first');
});

//sliders

const swiper1 = new Swiper('.cover__slider', {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
    speed: 5000,
  },
  autoplay: {
    delay: 3000,
  },
});

const swiper2 = new Swiper('.sponsors__slider', {
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },

  navigation: {
    prevEl: '.sponsors__slider-arrow--prev',
    nextEl: '.sponsors__slider-arrow--next',
  },
});

const swiper3 = new Swiper('.documents__slider', {
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },

  navigation: {
    prevEl: '.documents__slider-arrow--prev',
    nextEl: '.documents__slider-arrow--next',
  },
});

const swiper4 = new Swiper('.slider', {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
    speed: 5000,
  },
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.dots',
    type: 'bullets',
    bulletClass: 'dots__item',
    bulletActiveClass: 'active',
  },
});
