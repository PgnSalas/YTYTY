import menu from './modules/menu';
import media from './modules/media';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    menu('.hamburger', '.menu__close', '.menu', '.menu__overlay', 'menu__active', '.menu__link');
    media('.education__item');
});

