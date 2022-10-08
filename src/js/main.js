import menu from './modules/menu';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    menu('.hamburger', '.menu__close', '.menu', '.menu__overlay', 'menu__active', '.menu__link');
});

