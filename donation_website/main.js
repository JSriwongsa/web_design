const menuTrigger = document.querySelectorAll('[open-btn]');
const mobileMenu = document.querySelectorAll('[data-show]');
const closeTrigger = document.querySelectorAll('[close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let x = 0; x < menuTrigger.length; x++){
    const closeMenu = function(){
        mobileMenu[x].classList.remove('active');
        overlay.classList.remove('active');
    }
    menuTrigger[x].addEventListener('click', function() {
        mobileMenu[x].classList.add('active');
        overlay.classList.add('active');
    })
    closeTrigger[x].addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu)
}