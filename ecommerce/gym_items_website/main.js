let cartcheck = document.querySelector('#cart-check-out');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-btn');

cartcheck.onclick = () =>{
    cart.classList.add('active')
};
closecart.onclick = () =>{
    cart.classList.remove('active')
};
