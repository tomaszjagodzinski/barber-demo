window.addEventListener('DOMContentLoaded', (event) => {

    window.addEventListener('scroll', () => {
        let interactive_elements = document.querySelectorAll('.interactive-element');
        let window_width = window.innerWidth;
        let window_height = window.innerHeight;
        let window_top = document.body.scrollTop - 200;
      
        if (document.body.clientWidth <= 600) {
          window_top = document.body.scrollTop - 150;
        }
      
        let window_bottom = window_top + window_height;
      
        for (const inter_element of interactive_elements) {
          let element_height = inter_element.clientHeight;
          let element_top = document.body.scrollTop + inter_element.getBoundingClientRect().top;
          let element_bottom = element_top + element_height - 500;
      
          if (element_bottom >= window_top && element_top <= window_bottom) {
            inter_element.classList.add('visible');
          }
        }
      });
    //skrypt odpowiedzialny za menu
    const menuMobile = document.querySelector('#menu-mobile');
    const overlay = document.querySelector('#overlay');

    const show = (elem) => {
        return function() {
            elem.classList.add('visible');
            elem.classList.remove('hidden');
        }
    }

    const hide = (elem) => {
        return function() {
            elem.classList.add('hidden');
            elem.classList.remove('visible');
        }
    }

    document.querySelector('#toggle-menu').addEventListener('click', show(overlay));
    document.querySelector('#toggle-menu').addEventListener('click', show(menuMobile));

    document.querySelector('#menu-mobile').addEventListener('click', hide(overlay));
    document.querySelector('#menu-mobile').addEventListener('click', hide(menuMobile));

    
});