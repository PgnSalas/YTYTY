const menu = (openSelector, closeSelector, parentSelector, wrapper, activeClass, links) => {
    const openMenu = document.querySelector(openSelector),
          closeMenu = document.querySelector(closeSelector),
          wrap = document.querySelector(wrapper),
          parent = document.querySelector(parentSelector),
          link = document.querySelectorAll(links);

    
    function showModal(menu, parent) {
        menu.addEventListener('click', (e) => {
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

        parent.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.classList.contains('menu__overlay')) {
                parent.classList.remove(activeClass);
            }
        });
    }

    closeModal(closeMenu, parent, wrap, link);
};

export default menu;
