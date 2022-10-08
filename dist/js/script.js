/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const menu = (openSelector, closeSelector, parentSelector, wrapper, activeClass, links) => {
  const openMenu = document.querySelector(openSelector),
        closeMenu = document.querySelector(closeSelector),
        wrap = document.querySelector(wrapper),
        parent = document.querySelector(parentSelector),
        link = document.querySelectorAll(links);

  function showModal(menu, parent) {
    menu.addEventListener('click', e => {
      parent.classList.add(activeClass);
    });
  }

  showModal(openMenu, parent);

  function closeModal(close, parent, wrap, link) {
    link.forEach((item, i) => {
      item.addEventListener('click', () => {
        parent.classList.remove(activeClass);
      });
    });
    close.addEventListener('click', () => {
      parent.classList.remove(activeClass);
    });
    console.log(wrap);
    parent.addEventListener('click', e => {
      const target = e.target;

      if (target && target.classList.contains('menu__overlay')) {
        parent.classList.remove(activeClass);
      }
    });
  }

  closeModal(closeMenu, parent, wrap, link);
};

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.hamburger', '.menu__close', '.menu', '.menu__overlay', 'menu__active', '.menu__link');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map