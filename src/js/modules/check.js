

const check = (selectorCheck, bgCheck, classActive, selectorParent, rightNumber) => {
    const checkLine = document.querySelectorAll(selectorCheck),
          bg = document.querySelectorAll(bgCheck),
          parent = document.querySelector(selectorParent),
          right = document.querySelector(rightNumber),
          exer = document.querySelector('.exer'),
          exerStyle = window.getComputedStyle(exer),
          check = document.querySelectorAll('.checkbox');


        //   console.log(exerStyle);

    let corrent = 0;
    let score = 0;

    const quizData = [
        {
            correct: 'a',
        },
        {
            correct: 'b',
        },
        {
            correct: 'c',
        }
    ];

    checkLine.forEach((item, i) => {
        item.addEventListener('click', (e) => {
                bg.forEach((bg, j) => {
                    bg.classList.remove(classActive);
                    if (i == j) {
                        if (bg.classList.contains(classActive)) {
                            bg.classList.remove(classActive);
                        } else {
                            bg.classList.add(classActive);
                            // if (bg.id === 'a') {
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


export default check;