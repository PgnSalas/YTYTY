const media = (selectorItem) => {

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
            });
            // console.log(center);
            center.forEach((cen, i) => {
                // console.log(cen);
                cen.remove();
            });
            item.forEach((ite, j) => {
                if (j == 0 || j == 8) {

                } else {
                    let btn = document.createElement('div');

                    btn.classList.add('cost__js_btn');
                    btn.textContent = 'Cтоимость и время обучения';

                    ite.append(btn);
                    jsBtn.forEach((btnB, l) => {
                        if (j == l + 1) {
                            btnB.append(btn);
                        }
                    });
                    ar.push(btn);

                    // changeBtn(ar);
                    createModul(ar,  mod, svg, jsBtn);
                }
            }); 
        }

        createBtn(costItem, costTime, costCenterArr, arr, icoArr, jsBtnBlock, svg);


        function createModul(arr, mod, sv, perantBtn) {
            perantBtn.forEach((block, i) => {
                block.addEventListener('click', (e) => {
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
                                } else  {
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

            tot.addEventListener('click', (e) => {
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


export default media;