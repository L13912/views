//Мелкие скрипты на открытие модалок

const showHeroModal = window.document.querySelector('.showHeroModal');
showHeroModal.addEventListener('click', function () {
  const heroModal = window.document.querySelector('.heroModal');
  heroModal.classList.remove('none');
});

const heroModalSave = window.document.querySelector('.heroModal button');
heroModalSave.addEventListener('click', function () {
  const heroModal = window.document.querySelector('.heroModal');
  heroModal.classList.add('none');
});