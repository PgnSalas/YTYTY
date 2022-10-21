import menu from './modules/menu';
import media from './modules/media';
import btn from './modules/btn';
import check from './modules/check';
 
window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    menu('.hamburger', '.menu__close', '.menu', '.menu__overlay', 'menu__active', '.menu__link');
    media('.box__cost_img');
    btn();
    // menu('.btn', '.menu__close', '.test', '.menu__overlay')
    check('.content__exer_point', '.content__check', 'active__check', '.content__exer_points');
});

