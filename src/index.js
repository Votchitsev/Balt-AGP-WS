const dropDownButton = document.querySelector('.header-menu-item > a');
const dropDownElement = document.querySelector('.header-menu-dropdown-list');

dropDownButton.addEventListener('mouseenter', () => {
  dropDownElement.classList.add('active');
});

dropDownButton.addEventListener('mouseleave', () => {
  dropDownElement.classList.remove('active');
});

dropDownElement.addEventListener('mouseenter', (element) => {
  element.target.classList.add('active');
})

dropDownElement.addEventListener('mouseleave', (element) => {
  element.target.classList.remove('active');
})