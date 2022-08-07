/* Класс Header описывает и добавляет обработчики событий на элементы верхнего меню сайта:
*  1. Выпадающий список;
*  2. Aнимацию бургер-меню.
*/

export default class Header {
  constructor() {
    this.dropDownButton = document.querySelector('.header-menu-item > a');
    this.dropDownElement = document.querySelector('.header-menu-dropdown-list');
    this.toggle = document.querySelector('#toggle');
    this.toggleElements = document.querySelectorAll('.toggle-element');
    this.miniMenu = document.querySelector('.header-mini-menu');
    this.miniMenuCloseElement = document.querySelector('.mini-menu-close-element');

    this.toggleElements[1].style.marginLeft = 'auto';
    this.addToogleListener();
  }

  addDropDownMenuListeners() {
    this.dropDownButton.addEventListener('mouseenter', () => {
      this.dropDownElement.classList.add('active');
    });

    this.dropDownButton.addEventListener('mouseleave', () => {
      this.dropDownElement.classList.remove('active');
    });

    this.dropDownElement.addEventListener('mouseenter', (element) => {
      element.target.classList.add('active');
    });

    this.dropDownElement.addEventListener('mouseleave', (element) => {
      element.target.classList.remove('active');
    });
  }

  addToggleAnimationListeners() {
    const secondElOfToggle = document.querySelectorAll('.toggle-element')[1];

    this.toggle.addEventListener('mouseenter', () => {
      secondElOfToggle.style.marginLeft = '0';
    });

    this.toggle.addEventListener('mouseleave', () => {
      secondElOfToggle.style.marginLeft = 'auto';
    });
  }

  addToogleListener() {
    this.toggle.addEventListener('click', (element) => {
      element.preventDefault();
      this.miniMenu.style.display = 'flex';
    });

    this.miniMenuCloseElement.addEventListener('click', () => {
      this.miniMenu.style.display = 'none';
    });
  }
}
