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
