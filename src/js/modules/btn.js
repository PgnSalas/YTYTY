import check from './check';

const btn = () => {

    function btnNext (selectorBtn, modul, closeModal, perantClose) {
        const btn = document.querySelectorAll(selectorBtn),
            close = document.querySelector(closeModal),
            perant = document.querySelector(perantClose),
            modulOpen  = document.querySelector(modul),
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

                check('.content__exer_point', '.content__check', 'active__check', '.content__exer_points');

                if (btn.classList.contains('content__exer_btn')) {
                    points.forEach((point, i) => {
                        let pon = 0;
                        if (i == 0 && point.classList.contains('active__check')) {
                            modulOpen.style.display = 'block';
                            // exer.style.display = 'none';
                            // console.log('good');
                        } else if (point.classList.contains('active__check')) {
                            pon += 1;
                            modulOpen.style.display = 'none';
                            fail.style.display = 'block';
                        } 
                        else if (pon == 0){
                            exer.style.display = 'block'; 
                            // if (exerBody.children.length < 3) {
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
                    points.forEach((point, i) => {
                        // point.classList.remove('active__check');
                    });
                }
            });
        });

        function createDiv(ex){
            let trabl = document.createElement('div');
            trabl.classList.add('text__div');
            trabl.textContent = 'Выберите хотябы один вариант ответа!'
           const timeText = setTimeout(function (){
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
    btnNext('.content__fail_btn', '.fail', '.fail__close', '.fail');
    // btnNext('.content__answer_btn');
};

export default btn;
