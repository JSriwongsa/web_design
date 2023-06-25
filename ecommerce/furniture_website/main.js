const navBar = document.querySelector('.nav-bar');
const navList = document.querySelector('.nav-list');

if(navBar){
    navBar.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
}



