/* Класс Header описывает и добавляет обработчики событий на элементы верхнего меню сайта:
*  1. Выпадающий список;
*  2. Aнимацию бургер-меню.
*/

export default class Header {
  constructor(element) {
    this.element = element;
  }

  addDropDownMenuListeners() {
    const dropDownButton = this.element.querySelector('.header-menu-item > a');
    const dropDownElement = this.element.querySelector('.header-menu-dropdown-list');

    dropDownButton.addEventListener('mouseenter', () => {
      dropDownElement.classList.add('active');
    });

    dropDownButton.addEventListener('mouseleave', () => {
      dropDownElement.classList.remove('active');
    });

    dropDownElement.addEventListener('mouseenter', (element) => {
      element.target.classList.add('active');
    });

    dropDownElement.addEventListener('mouseleave', (element) => {
      element.target.classList.remove('active');
    });
  }

  addToggleAnimationListeners() {
    const secondElOfToggle = document.querySelectorAll('.toggle-element')[1];
    const toggle = this.element.querySelector('#toggle');

    toggle.addEventListener('mouseenter', () => {
      secondElOfToggle.style.marginLeft = '0';
    });

    toggle.addEventListener('mouseleave', () => {
      secondElOfToggle.style.marginLeft = 'auto';
    });
  }

  addToogleListener() {
    const miniMenu = this.element.querySelector('.header-mini-menu');
    const miniMenuCloseElement = this.element.querySelector('.mini-menu-close-element');
    const toggle = this.element.querySelector('#toggle');

    toggle.addEventListener('click', (element) => {
      element.preventDefault();
      miniMenu.style.display = 'flex';
    });

    miniMenuCloseElement.addEventListener('click', () => {
      miniMenu.style.display = 'none';
    });
  }
}
