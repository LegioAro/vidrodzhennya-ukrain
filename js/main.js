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

const swiper5 = new Swiper('.project-content__gallery', {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
    speed: 5000,
  },

  pagination: {
    el: '.project-content__gallery-pagination-current',
    type: 'fraction',
  },

  navigation: {
    prevEl: '.project-content__gallery-arrow--prev',
    nextEl: '.project-content__gallery-arrow--next',
  },
});

const swiper6 = new Swiper('.acordeon__slider', {
  slidesPerView: 3,

  spaceBetween: 5,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.project-content__gallery-pagination-current',
    type: 'fraction',
  },

  navigation: {
    prevEl: '.project-content__gallery-arrow--prev',
    nextEl: '.project-content__gallery-arrow--next',
  },
});

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 100,
      behavior: 'smooth',
    });
  });
}

function acordeon(group, all = false, classActive = 'active', itemActive = false) {
  const acordeons = document.querySelectorAll(`[data-acordeon-group=${group}]`);

  if (acordeons.length > 0) {
    acordeons.forEach((item) => {
      const btn = item.querySelector('[data-acordeon-btn]');
      btn.addEventListener('click', () => handleItemAcordion(item, all));
    });

    if (itemActive) {
      acordeons[itemActive - 1].querySelector('[data-acordeon-btn]').click();
    }
  }

  function handleItemAcordion(item, all) {
    if (all === true) {
      if (item.classList.contains(classActive)) {
        item.classList.remove(classActive);
      } else {
        acordeons.forEach((acordeon) => acordeon.classList.remove(classActive));
        item.classList.add(classActive);
      }
    } else {
      item.classList.toggle(classActive);
    }
  }
}

acordeon('one', false, 'active');
