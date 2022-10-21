/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/btn.js":
/*!*******************************!*\
  !*** ./src/js/modules/btn.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ "./src/js/modules/check.js");


const btn = () => {
  function btnNext(selectorBtn, modul, closeModal, perantClose) {
    const btn = document.querySelectorAll(selectorBtn),
          close = document.querySelector(closeModal),
          perant = document.querySelector(perantClose),
          modulOpen = document.querySelector(modul),
          windows = document.querySelectorAll('[data-modal]'),
          points = document.querySelectorAll('.content__check'),
          fail = document.querySelector('.fail'),
          exer = document.querySelector('.exer'),
          exerBody = document.querySelector('.exer__body');
    btn.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        windows.forEach(item => {
          item.style.display = 'none';
        });

        function hidePoint() {
          if (btn.classList.contains('content__test_btn') || btn.classList.contains('content__fail_btn')) {
            points.forEach((point, i) => {
              point.classList.remove('active__check');
            });
          }
        }

        hidePoint();
        (0,_check__WEBPACK_IMPORTED_MODULE_0__["default"])('.content__exer_point', '.content__check', 'active__check', '.content__exer_points');

        if (btn.classList.contains('content__exer_btn')) {
          points.forEach((point, i) => {
            let pon = 0;

            if (i == 0 && point.classList.contains('active__check')) {
              modulOpen.style.display = 'block'; // exer.style.display = 'none';
              // console.log('good');
            } else if (point.classList.contains('active__check')) {
              pon += 1;
              modulOpen.style.display = 'none';
              fail.style.display = 'block';
            } else if (pon == 0) {
              exer.style.display = 'block'; // if (exerBody.children.length < 3) {
              //     createDiv(exer);
              // }  
            }
          });
        } else {
          modulOpen.style.display = 'block';
        }

        if (btn.classList.contains('content__fail_btn')) {
          console.log('safe');
          exer.style.display = 'block';
          fail.style.display = 'none';
          points.forEach((point, i) => {// point.classList.remove('active__check');
          });
        }
      });
    });

    function createDiv(ex) {
      let trabl = document.createElement('div');
      trabl.classList.add('text__div');
      trabl.textContent = 'Выберите хотябы один вариант ответа!';
      const timeText = setTimeout(function () {
        div.textContent = '';
      }, 3000);
      exerBody.append(trabl);
      ex.style.display = 'none';
    }

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modulOpen.style.display = 'none';
    });
  }

  btnNext('.header__btn', '.test', '.test__close', '.test');
  btnNext('.content__test_btn', '.exer', '.exer__close', '.exer');
  btnNext('.content__exer_btn', '.right', '.right__close', '.right');
  btnNext('.content__right_btn', '.answer', '.answer__close', '.answer');
  btnNext('.content__fail_btn', '.fail', '.fail__close', '.fail'); // btnNext('.content__answer_btn');
};

/* harmony default export */ __webpack_exports__["default"] = (btn);

/***/ }),

/***/ "./src/js/modules/check.js":
/*!*********************************!*\
  !*** ./src/js/modules/check.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const check = (selectorCheck, bgCheck, classActive, selectorParent) => {
  const checkLine = document.querySelectorAll(selectorCheck),
        bg = document.querySelectorAll(bgCheck);
  let number = 0; // function checkInp(line, bg, num) {

  checkLine.forEach((item, i) => {
    item.addEventListener('click', e => {
      bg.forEach((bag, j) => {
        if (number == 0) {
          if (i == j) {
            bag.classList.add(classActive);
            number += 1; // closeCheck(bg, number, checkLine);

            console.log(number);
          }
        }
      });
    });
  }); // }
  // checkInp(checkLine, bg, number);
  // function closeCheck(bg, num, per, ) {

  checkLine.forEach((line, i) => {
    line.addEventListener('click', e => {
      if (e.target && e.target.classList.contains(classActive)) {
        bg.forEach((bag, j) => {
          if (i == j) {
            bag.classList.remove(classActive);
            number -= 1;
          }
        });
      }
    });
  }); // }
};

/* harmony default export */ __webpack_exports__["default"] = (check);

/***/ }),

/***/ "./src/js/modules/media.js":
/*!*********************************!*\
  !*** ./src/js/modules/media.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const media = selectorItem => {
  const costCenter = document.querySelectorAll('.cost__cost'),
        costTime = document.querySelectorAll('.cost__time'),
        costItem = document.querySelectorAll('.cost__item'),
        test = document.querySelector('.test'),
        costBottom = document.querySelector('.cost__block-bottom'),
        mod = document.querySelectorAll('.cost__mod'),
        jsBtnBlock = document.querySelectorAll('.cost__js_btn-block'),
        svg = document.querySelectorAll('.cost__js_btn-block svg');
  let arr = [];
  let icoArr = [];
  mod.forEach((block, i) => {
    block.style.display = 'none';
  });

  if (document.documentElement.clientWidth < 811) {
    let costCenterArr = [];
    costCenter.forEach((item, i) => {
      costCenterArr.push(item);
    });

    function createBtn(item, time, center, ar, icoArr, jsBtn, svg) {
      // console.log(center);
      time.forEach((t, i) => {
        t.remove();
      }); // console.log(center);

      center.forEach((cen, i) => {
        // console.log(cen);
        cen.remove();
      });
      item.forEach((ite, j) => {
        if (j == 0 || j == 8) {} else {
          let btn = document.createElement('div');
          btn.classList.add('cost__js_btn');
          btn.textContent = 'Cтоимость и время обучения';
          ite.append(btn);
          jsBtn.forEach((btnB, l) => {
            if (j == l + 1) {
              btnB.append(btn);
            }
          });
          ar.push(btn); // changeBtn(ar);

          createModul(ar, mod, svg, jsBtn);
        }
      });
    }

    createBtn(costItem, costTime, costCenterArr, arr, icoArr, jsBtnBlock, svg);

    function createModul(arr, mod, sv, perantBtn) {
      perantBtn.forEach((block, i) => {
        block.addEventListener('click', e => {
          if (e.target && e.target.classList.contains('genSvg') || e.target && e.target.classList.contains('cost__js_btn')) {
            mod.forEach((m, j) => {
              // m.style.display = 'none';
              if (i == j) {
                if (m.style.display == 'none') {
                  m.style.display = 'block';
                  m.style.zIndex = '130';
                  sv.forEach((svg, r) => {
                    if (i == r) {
                      svg.classList.add('svg');
                      svg.style.cssText = 'transform: rotate(-180deg); top: 30%;';
                    }
                  });
                  arr.forEach((btn, k) => {
                    if (i == k) {
                      btn.style.cssText = 'border: 2px solid #38BFF2; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom: 0px; background: #fff;';
                    }
                  });
                } else {
                  m.style.display = 'none';
                  m.style.zIndex = '120';
                  sv.forEach((svg, r) => {
                    if (i == r) {
                      svg.classList.remove('svg');
                      svg.style.cssText = 'transform: rotate(90deg + 90deg); top: 50%; transform: translateY(-50%);';
                    }
                  });
                  arr.forEach((btn, k) => {
                    if (i == k) {
                      btn.style.cssText = 'border: 2px solid #F15525; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; background: #fff;';
                    }
                  });
                }
              }
            });
          }
        });
      });
    }
  }

  if (document.documentElement.clientWidth < 426) {
    function changeBtn(arr) {
      arr.forEach((btn, i) => {
        btn.textContent = 'Стоимость и время';
      });
    }

    changeBtn(arr);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

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
/* harmony import */ var _modules_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/media */ "./src/js/modules/media.js");
/* harmony import */ var _modules_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/btn */ "./src/js/modules/btn.js");
/* harmony import */ var _modules_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/check */ "./src/js/modules/check.js");




window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.hamburger', '.menu__close', '.menu', '.menu__overlay', 'menu__active', '.menu__link');
  (0,_modules_media__WEBPACK_IMPORTED_MODULE_1__["default"])('.box__cost_img');
  (0,_modules_btn__WEBPACK_IMPORTED_MODULE_2__["default"])(); // menu('.btn', '.menu__close', '.test', '.menu__overlay')

  (0,_modules_check__WEBPACK_IMPORTED_MODULE_3__["default"])('.content__exer_point', '.content__check', 'active__check', '.content__exer_points');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map