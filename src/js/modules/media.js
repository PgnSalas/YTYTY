const media = (selectorItem) => {
    const wind = window.matchMedia('(max-width: 550px)');
    // // const back = window.matchMedia('(min-width: 1001px)');
    const educationItem = document.querySelectorAll(selectorItem);

    function chaange (e) {
        if (wind.matches) {
            console.log('hello');
        }
    }

}


export default media;