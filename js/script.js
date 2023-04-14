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

// Политика конфиденциальности

const elPrivacyPolicyLink = document.querySelector('.footer__confidentiality a'),
  elBody = document.querySelector('body');

elPrivacyPolicyLink.addEventListener('click', function (event) {
  event.preventDefault();

  const elSectionPrivacy = document.querySelector('.section-privacy'),
    elPrivacyClose = document.querySelector('.section-privacy__close');

  elSectionPrivacy.style.opacity = '1';
  elSectionPrivacy.style.visibility = 'visible';
  elBody.style.overflow = 'hidden';

  elPrivacyClose.addEventListener('click', () => {
    elSectionPrivacy.style.opacity = '0';
    elSectionPrivacy.style.visibility = 'hidden';
    setTimeout(function () {
      elBody.style.overflow = 'auto';
    }, 260);
  });

});

// Обработка персональных данных

const elFormLinks = document.querySelectorAll('.form__link');

elFormLinks.forEach(elFormLink => {
  elFormLink.addEventListener('click', (event) => {
    event.preventDefault();

    const elPersonalData = document.querySelector('.personal-data'),
      elPersonalDataClose = document.querySelector('.personal-data__close');

    elPersonalData.style.opacity = '1';
    elPersonalData.style.visibility = 'visible';
    elBody.style.overflow = 'hidden';

    elPersonalDataClose.addEventListener('click', () => {
      elPersonalData.style.opacity = '0';
      elPersonalData.style.visibility = 'hidden';
      setTimeout(function () {
        elBody.style.overflow = 'auto';
      }, 260);
    });
  });
});

// Модальное окно с формой

const elButtons = document.querySelectorAll('.button');

elButtons.forEach(elButton => {
  elButton.addEventListener('click', () => {

    const elFormModal = document.querySelector('.form-modal'),
      elFormModalClose = document.querySelector('.form-modal__close');

    elFormModal.style.opacity = '1';
    elFormModal.style.visibility = 'visible';
    elBody.style.overflow = 'hidden';

    elFormModalClose.addEventListener('click', () => {
      elFormModal.style.opacity = '0';
      elFormModal.style.visibility = 'hidden';
      setTimeout(function () {
        elBody.style.overflow = 'auto';
      }, 260);
    });

  });
});



