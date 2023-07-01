//navbar
const openBtn = document.querySelectorAll('[trigger-button]');
const closeBtn = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let x = 0; x < openBtn.length; x++){
    let currentID = openBtn[x].dataset.target,
    targetEl =document.querySelector(`#${currentID}`)

    const openData =function(){
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };
    openBtn[x].addEventListener('click', function(){
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });
    targetEl.querySelector('[close-button]').addEventListener('click',openData);
    overlay.addEventListener('click', openData);
}
//submenu
const subMenu = document.querySelectorAll('.child-trigger');
    subMenu.forEach((menu) => menu.addEventListener('click', function(e){
        e.preventDefault();
        subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);

        if(this.closest('.has-child').classList != 'active'){
            this.closest('.has-child').classList.toggle('active');
        }
    }))
    
//swiper product
const thumbImage = new Swiper('.thumbnail-image', {
    //loop: true,
    direction:'vertical',
    spaceBetween: 25,
    slidePerView: 1,
    freeMode: true,
    watchSlideProgress: true,
});
const mainImage = new Swiper('.main-image', {
    loop: true,
    autoHeight: true,

    pagination:{
        el: '.swiper-pagination',
        clickable:true,
    },
    thumbs:{
        swiper: thumbImage,
    },
});
