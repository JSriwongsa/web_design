const menuToggle = document.querySelectorAll('[data-open-btn]');
const mobileMenu = document.querySelectorAll('[data-show]');
const closeToggle = document.querySelectorAll('[data-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let x = 0; x < menuToggle.length; x++){
    const closeMenu = function(){
        mobileMenu[x].classList.remove('active');
        overlay.classList.remove('active');
    }
    menuToggle[x].addEventListener('click', function(){
        mobileMenu[x].classList.add('active');
        overlay.classList.add('active');
    })
    closeToggle[x].addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu)
}

const subMenu = document.querySelectorAll('.sub-toggle');
    subMenu.forEach((menu) => menu.addEventListener('click', toggle));
    function toggle(){
        subMenu.forEach((item) => item != this? item.classList.remove('expand'): null);

        if(this.classList != 'expand'){
            this.classList.toggle('expand')
        }
    }

//---------- Swiper ----------
var tabbedNav = new Swiper('.tabs',{
    slidePerView: 1,
    centeredSlides: true,
    slidesPerGroup: false,
    spaceBetween: 20,
});
var theTab = new Swiper('.tabs-box',{
    slidePerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbedNav
    },
    
})
