import Header from './header-widget/header-widget';

document.addEventListener('DOMContentLoaded', () => {
  const header = new Header(document.querySelector('header'));
  header.addDropDownMenuListeners();
  header.addToggleAnimationListeners();
  header.addToogleListener();
});
