// Аккордион с преимуществами

const elAccordions = document.querySelectorAll('.accordion__item');


elAccordions.forEach((item, index) => {
  item.addEventListener('click', function () {
    this.classList.toggle('accordion__item_active');

    const elContentAccordion = this.querySelector('.accordion__content');
    const contentAccordionHeight = elContentAccordion.scrollHeight;

    elContentAccordion.style.maxHeight = elContentAccordion.classList.contains('accordion__content_active')
      ? null
      : contentAccordionHeight + 'px';

    elContentAccordion.classList.toggle('accordion__content_active');

    const headerAccordionNumber = this.querySelector('.accordion__header span');

    if (index < 10) {
      this.classList.contains('accordion__item_active')
        ? headerAccordionNumber.textContent = index + 1 + '. '
        : headerAccordionNumber.textContent = '';
    }

    // Аккордион FAQ

    const elAccordionHeaders = this.querySelector('.section-faq__header');
    elAccordionHeaders.classList.toggle('active');
  });
});


// Кнопка "Показать ещё"

const elShowMore = document.querySelector('.section-portfolio__btn'),
  elItemsAll = document.querySelectorAll('.section-portfolio__item');

let items = 3;

elShowMore.addEventListener('click', () => {
  items += 3;

  const arrayItems = [...elItemsAll],
    visibleItems = arrayItems.slice(0, items);

  visibleItems.forEach(element => {
    element.classList.add('is-visible');
  });

  if (items >= elItemsAll.length) {
    elShowMore.style.display = 'none';
  }
});

// Плавная прокрутка якорнык ссылок

const elAnchors = document.querySelectorAll('.header__item a');

elAnchors.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    const blockID = item.getAttribute('href');

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

