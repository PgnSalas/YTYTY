/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/btn.js":
/*!*******************************!*\
  !*** ./src/js/modules/btn.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ "./src/js/modules/check.js");


const btn = () => {
  const exer = document.querySelector('.exer'),
        exerBtn = document.querySelector('.content__exer_btn'),
        exerCheck = document.querySelectorAll('.content__check'),
        exerClose = document.querySelector('.exer__close'),
        exer_2 = document.querySelector('.exer-2'),
        exerClose_2 = document.querySelector('.exer__close-2'),
        exerCheck_2 = document.querySelectorAll('.content__check-2'),
        exerBtn_2 = document.querySelector('.content__exer_btn-2'),
        exer_3 = document.querySelector('.exer-3'),
        exerBtn_3 = document.querySelector('.content__exer_btn-3'),
        exerClose_3 = document.querySelector('.exer__close-3'),
        exerCheck_3 = document.querySelectorAll('.content__check-3'),
        testBtn = document.querySelector('.content__test_btn'),
        testClose = document.querySelector('.test__close'),
        test = document.querySelector('.test'),
        headerBtn = document.querySelector('.header__btn'),
        answer = document.querySelector('.answerTest'),
        answerText = document.querySelector('.content__answer_text'),
        answerClose = document.querySelector('.answer__close'),
        answerBtn = document.querySelector('.content__answer_btn'),
        answerBody = document.querySelector('.answer__body'),
        right = document.querySelector('.rightNumbers'),
        materialBtn = document.querySelector('.materials__btn'),
        scroll = calcScroll();

  function hidePoint() {
    if (testBtn.classList.contains('content__test_btn')) {
      exerCheck.forEach(point => {
        if (point.classList.contains('active__check')) {
          point.classList.remove('active__check');
        }
      });
    }
  }

  function openNextModul(btn) {
    let score = 0;
    right.textContent = 0;
    btn.addEventListener('click', () => {
      test.style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    });
    testBtn.addEventListener('click', () => {
      hidePoint();
      right.textContent = '';
      score = 0;
      document.body.style.overflow = 'hidden';
      test.style.display = 'none';
      document.body.style.marginRight = `${scroll}px`;
      console.log(scroll);
      exer.style.display = 'block';
    });
    exerBtn.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
      exer.style.display = 'none';
      exer_2.style.display = 'block';
      exerCheck.forEach((check, i) => {
        console.log('good');

        if (i == 0 && check.classList.contains('active__check')) {
          score++;
          right.textContent = score;
          console.log(score);
        }
      });
    });
    exerBtn_2.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
      exer_2.style.display = 'none';
      exer_3.style.display = 'block';
      exerCheck_2.forEach((check, i) => {
        console.log('good');

        if (i == 0 && check.classList.contains('active__check')) {
          score++;
          right.textContent = score;
          console.log(score);
        }
      });
    });
    exerBtn_3.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
      exer_3.style.display = 'none';
      exerCheck_3.forEach((check, i) => {
        console.log('good');

        if (i == 0 && check.classList.contains('active__check')) {
          score++;
          right.textContent = score;
          console.log(score);
        }

        if (score == 0) {
          right.textContent = 0;
        }
      });
      let num = score;

      if (score == 3) {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        answer.style.display = 'block';
        answerText.textContent = 'Это великолепный результат! У вас есть все шансы стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт';
        answerBtn.addEventListener('click', () => {
          answer.style.display = 'none';
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
        });
      } else if (score == 2) {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        answer.style.display = 'block';
        answerText.textContent = ' Это хороший результат! У вас есть все шансы стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт';
        answerBtn.addEventListener('click', () => {
          answer.style.display = 'none';
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
        });
      } else if (score == 1 || score == 0) {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        answer.style.display = 'block'; // answerBody.style.cssText = 'max-width: 600px; min-height: 270px; padding: 40px;';

        answerText.textContent = 'Ты можешь лучше! Попробуй пройти еще раз!';
        answerBtn.addEventListener('click', () => {
          answer.style.display = 'none';
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
        });
      }
    });
  }

  openNextModul(headerBtn);
  openNextModul(materialBtn);

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  function closeModal(closeBtn, closeModal, closeParent, style) {
    closeBtn.addEventListener('click', () => {
      closeModal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
    closeParent.addEventListener('click', e => {
      if (e.target && e.target.classList.contains('test')) {
        closeModal.style.display = style;
        document.body.style.marginRight = `0px`;

        if (style == 'none') {
          document.body.style.overflow = '';
        }
      }
    });
  }

  closeModal(testClose, test, test, 'none');
  closeModal(exerClose, exer, exer, 'block');
  closeModal(exerClose_2, exer_2, exer_2, 'block');
  closeModal(exerClose_3, exer_3, exer_3, 'block');
  closeModal(answerClose, answer, answer, 'none');
};

/* harmony default export */ __webpack_exports__["default"] = (btn);

/***/ }),

/***/ "./src/js/modules/check.js":
/*!*********************************!*\
  !*** ./src/js/modules/check.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const check = (selectorCheck, bgCheck, classActive, selectorParent, rightNumber) => {
  const checkLine = document.querySelectorAll(selectorCheck),
        bg = document.querySelectorAll(bgCheck),
        parent = document.querySelector(selectorParent),
        right = document.querySelector(rightNumber),
        exer = document.querySelector('.exer'),
        exerStyle = window.getComputedStyle(exer),
        check = document.querySelectorAll('.checkbox'); //   console.log(exerStyle);

  let corrent = 0;
  let score = 0;
  const quizData = [{
    correct: 'a'
  }, {
    correct: 'b'
  }, {
    correct: 'c'
  }];
  checkLine.forEach((item, i) => {
    item.addEventListener('click', e => {
      bg.forEach((bg, j) => {
        bg.classList.remove(classActive);

        if (i == j) {
          if (bg.classList.contains(classActive)) {
            bg.classList.remove(classActive);
          } else {
            bg.classList.add(classActive); // if (bg.id === 'a') {
            //     score++;
            // } else {
            //     score = score;
            // }
            // console.log(score);
            // console.log(right);
            // right.textContent = score;
          }
        }
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (check);

/***/ }),

/***/ "./src/js/modules/media.js":
/*!*********************************!*\
  !*** ./src/js/modules/media.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const media = selectorItem => {
  const costCenter = document.querySelectorAll('.cost__cost'),
        costTime = document.querySelectorAll('.cost__time'),
        costItem = document.querySelectorAll('.cost__item'),
        test = document.querySelector('.test'),
        costBottom = document.querySelector('.cost__block-bottom'),
        mod = document.querySelectorAll('.cost__mod'),
        jsBtnBlock = document.querySelectorAll('.cost__js_btn-block'),
        svg = document.querySelectorAll('.cost__js_btn-block svg'),
        total = document.querySelector('.cost__total'),
        modTotal = document.querySelector('.mod__total'),
        svgTotal = document.querySelector('.cost__total svg');
  let arr = [];
  let icoArr = [];
  mod.forEach((block, i) => {
    block.style.display = 'none';
  });
  modTotal.style.display = 'none';

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

    function totalCreateBtn(tot, mod, svg, parent) {
      let btnTotal = document.createElement('div');
      btnTotal.classList.add('cost__js_btn');
      btnTotal.textContent = 'Итого';
      tot.append(btnTotal);
      tot.addEventListener('click', e => {
        if (e.target && e.target.classList.contains('svgTotal') || e.target && e.target.classList.contains('cost__js_btn')) {
          if (mod.style.display == 'none') {
            mod.style.display = 'block';
            btnTotal.style.cssText = 'border: 2px solid #38BFF2; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom: 0px; background: #fff;';
            svg.classList.add('svgTot');
            svg.style.cssText = 'transform: rotate(-180deg); top: 30%;';
          } else {
            mod.style.display = 'none';
            svg.classList.remove('svgTot');
            svg.style.cssText = 'transform: rotate(90deg + 90deg); top: 50%;';
            btnTotal.style.cssText = 'border: 2px solid #F15525; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; background: #fff;';
          }
        }
      });
    }

    totalCreateBtn(total, modTotal, svgTotal, jsBtnBlock);
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

"use strict";
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

/***/ }),

/***/ "./src/js/modules/moduls.js":
/*!**********************************!*\
  !*** ./src/js/modules/moduls.js ***!
  \**********************************/
/***/ (function() {

// const moduls = () => {
//     function createQuiz () {
//         function openModul(selectorBtn, selectorModul, closeModal, selectorParent) {
//             const btn = document.querySelector(selectorBtn),
//                   modul = document.querySelector(selectorModul),
//                   close = document.querySelector(closeModal),
//                   parent = document.querySelector(selectorParent);
//                let windows = document.querySelectorAll('[data-modal]');
//             btn.addEventListener('click', () => {
//                 windows.forEach(item=> {
//                     item.style.display = 'none';
//                 });
//                 modul.style.display = 'block';
//             });
//             if (btn.classList.contains('.content__test_btn')) {
//                 loadQuiz();
//             }
//             parent.addEventListener('click', (e) => {
//                 if (e.target && e.target.classList.contains('test')) {
//                     modul.style.display = 'none';
//                 }
//             });
//             close.addEventListener('click', () => {
//                 modul.style.display = 'none';
//             });
//         }
//         openModul('.header__btn', '.test', '.test__close', '.test');
//         openModul('.content__test_btn', '.quiz-container', '.test__close', '.quiz-container');
//         const quizData = [
//             {
//                 numberQuestion: "ЗАДАНИЕ №1",
//                 question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
//                 a: 'Да, сумма явно неверная',
//                 b: 'Нет, такая сумма вполне могла получиться',
//                 c: 'Не знаю, не получается решить',
//                 correct: 'a',
//             },
//             {
//                 numberQuestion: "ЗАДАНИЕ №2",
//                 question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
//                 a: 'Нет, такая сумма вполне могла получиться',
//                 b: 'Да, сумма явно неверная',
//                 c: 'Не знаю, не получается решить',
//                 correct: 'b',
//             },
//             {
//                 numberQuestion: "ЗАДАНИЕ №3",
//                 question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
//                 a: 'Нет, такая сумма вполне могла получиться',
//                 b: 'Не знаю, не получается решить',
//                 c: 'Да, сумма явно неверная',
//                 correct: 'c',
//             }
//         ];
//             const quiz = document.querySelector('#quiz');
//             const answerEls = document.querySelectorAll('.answer');
//             const listQuiz = document.querySelector('.list');
//             const questionEl = document.querySelector('#question');
//             const a_text = document.querySelector('#a_text');
//             const b_text = document.querySelector('#b_text');
//             const c_text = document.querySelector('#c_text');
//             const submit = document.querySelector('#submit');
//             const check = document.querySelectorAll('.content__check');
//             const numberQuest = document.querySelector('.questionNumber');
//             const rightNumb = document.querySelector('.rightNumbers');
//             const answerTest = document.querySelector('.answerTest');
//             const answerBtn = document.querySelector('.content__answer_btn-block');
//             let currentQuiz = 0;
//             let score = 0;
//             loadQuiz();
//             function loadQuiz() {
//                 deselectAnswers();
//                 const currentQuizData = quizData[currentQuiz];
//                 questionEl.innerText = currentQuizData.question;
//                 a_text.innerText = currentQuizData.a;
//                 b_text.innerText = currentQuizData.b;
//                 c_text.innerText = currentQuizData.c;
//                 numberQuest.innerText = currentQuizData.numberQuestion;
//             }
//             function deselectAnswers() {
//                 answerEls.forEach(answerEl => answerEl.classList.remove('input__active'));
//                 // questionEl.innerText = '';
//                 // a_text.innerText = '';
//                 // b_text.innerText = '';
//                 // c_text.innerText = '';
//                 // numberQuest.innerText = '';
//             }
//             function getSelected() {
//                 let answer;
//                 answerEls.forEach(answerEl => {
//                     if (answerEl.classList.contains('input__active')) {
//                         answer = answerEl.id;
//                     }
//                 });
//                 return answer;
//             }
//             submit.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 const answer = getSelected();
//                 check.forEach((item, i) => {
//                     item.classList.remove('active__check');
//                 });
//                 if (answer) {
//                     if (answer === quizData[currentQuiz].correct) {
//                         score++;
//                     }
//                     currentQuiz++;
//                     if (currentQuiz < quizData.length) {
//                         loadQuiz();
//                     } else {
//                         // answerTest.style.display = 'block';
//                         quiz.innerHTML = `
//                         <div class="answer__body test__body">
//             <div class="answer__content content__answer">
//                 <div class="content__answer_ex">
//                     Набрано <span class="rightNumbers">${score}/${quizData.length}</span>
//                 </div>
//                 <div class="content__answer_text ">
//                     Это великолепный результат! У вас есть все шансы стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт
//                 </div>
//                 <div class="content__answer_btn-block">
//                     <button id="submit" class="content__answer_btn btn">
//                         Начать учиться бесплатно
//                     </button>
//                 </div>
//                 <div class="answer__close">
//                     <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#BCBCBC" d="M0 13.633L13.633 0l.974.974L.974 14.607z"/><path fill="#BCBCBC" d="M13.633 14.606L0 .973.974 0l13.633 13.633z"/></svg>
//                 </div>
//             </div>
//         </div>
//                         `;
//                         // openModul('.content__answer_btn', )
//                         // answerTest.style.display = 'block';
//                         // rightNumb.innerHTML = `${score}/${quizData.length}`;
//                         // openModul('.content__answer_btn', 'body', '.answer__close', '.answer');
//                     }
//                 }
//             });
//     }
//     createQuiz();
// }
// export default moduls;

/***/ }),

/***/ "./src/js/modules/overlay.js":
/*!***********************************!*\
  !*** ./src/js/modules/overlay.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const overlay = (btnOnTop, body) => {
  const up = document.querySelector(btnOnTop);
  const mainBody = document.querySelector(body);
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1400) {
      // когда пролистали больше чем 1600 работает условие
      up.style.display = 'block';
    } else {
      up.style.display = 'none';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (overlay);

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/media */ "./src/js/modules/media.js");
/* harmony import */ var _modules_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/btn */ "./src/js/modules/btn.js");
/* harmony import */ var _modules_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/check */ "./src/js/modules/check.js");
/* harmony import */ var _modules_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/overlay */ "./src/js/modules/overlay.js");
/* harmony import */ var _modules_moduls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/moduls */ "./src/js/modules/moduls.js");
/* harmony import */ var _modules_moduls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_moduls__WEBPACK_IMPORTED_MODULE_5__);






window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.hamburger', '.menu__close', '.menu', '.menu__overlay', 'menu__active', '.menu__link');
  (0,_modules_media__WEBPACK_IMPORTED_MODULE_1__["default"])('.box__cost_img');
  (0,_modules_btn__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.btn', '.menu__close', '.test', '.menu__overlay');
  (0,_modules_overlay__WEBPACK_IMPORTED_MODULE_4__["default"])('.overlay__link');
  (0,_modules_check__WEBPACK_IMPORTED_MODULE_3__["default"])('.content__exer_point', '.content__check', 'active__check', '.content__exer_points', '.rightNumbers');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map