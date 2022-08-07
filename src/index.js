import Header from './js/header-widget/header-widget';

const header = new Header(document.querySelector('header'));
header.addDropDownMenuListeners();
header.addToggleAnimationListeners();
header.addToogleListener();
