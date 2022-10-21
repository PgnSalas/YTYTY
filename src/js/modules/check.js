const check = (selectorCheck, bgCheck, classActive, selectorParent) => {
    const checkLine = document.querySelectorAll(selectorCheck),
          bg = document.querySelectorAll(bgCheck);

    let number = 0;

    // function checkInp(line, bg, num) {
        checkLine.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                bg.forEach((bag, j) => {
                    if (number == 0) {
                        if (i == j) {
                            bag.classList.add(classActive);
                            number += 1;
                            // closeCheck(bg, number, checkLine);
                            console.log(number);
                        }
                    } 
                });
            });
        });
    // }

    // checkInp(checkLine, bg, number);

    // function closeCheck(bg, num, per, ) {
        checkLine.forEach((line, i) => {
            line.addEventListener('click', (e) => {
                if (e.target && e.target.classList.contains(classActive)) {
                    bg.forEach((bag, j) => {
                        if (i == j) {
                            bag.classList.remove(classActive);
                            number -= 1;
                        }
                    });
                }
            });
        });
    // }
};


export default check;