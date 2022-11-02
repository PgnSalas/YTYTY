import check from './check';

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

    function openNextModul (btn) {
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
                answer.style.display = 'block';
                // answerBody.style.cssText = 'max-width: 600px; min-height: 270px; padding: 40px;';
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
        closeParent.addEventListener('click', (e) => {
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


export default btn;
