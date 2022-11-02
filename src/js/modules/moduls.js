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