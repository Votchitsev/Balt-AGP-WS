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
      if (window.innerWidth > 970) {
        dropDownElement.classList.add('active');
      }
    });

    dropDownButton.addEventListener('mouseleave', () => {
      if (window.innerWidth > 970) {
        dropDownElement.classList.remove('active');
      }
    });

    dropDownElement.addEventListener('mouseenter', (element) => {
      if (window.innerWidth > 970) {
        element.target.classList.add('active');
      }
    });

    dropDownElement.addEventListener('mouseleave', (element) => {
      if (window.innerWidth > 970) {
        element.target.classList.remove('active');
      }
    });

    dropDownButton.addEventListener('click', () => {
      if (dropDownElement.classList.contains('active')) {
        dropDownElement.classList.remove('active');
      } else {
        dropDownElement.classList.add('active');
      }
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
    const miniMenu = this.element.querySelector('.header-menu-container');
    const miniMenuCloseElement = this.element.querySelector('.mini-menu-close-element');
    const toggle = this.element.querySelector('#toggle');
    const logo = this.element.querySelector('.header-logo');

    toggle.addEventListener('click', (element) => {
      element.preventDefault();
      miniMenu.style.display = 'flex';
      toggle.style.display = 'none';
      logo.style.display = 'none';

      setTimeout(() => {
        miniMenuCloseElement.style.display = 'flex';
      }, 500);
    });

    miniMenuCloseElement.addEventListener('click', () => {
      miniMenu.style.display = 'none';
      toggle.style.display = 'flex';
      miniMenuCloseElement.style.display = 'none';
      logo.style.display = '';
    });
  }
}
