const overlay = (btnOnTop, body) => {
    const up = document.querySelector(btnOnTop);
    const mainBody = document.querySelector(body);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1400) { // когда пролистали больше чем 1600 работает условие
            up.style.display = 'block';
        } else {
            up.style.display = 'none';
        }
    });
}

export default overlay;