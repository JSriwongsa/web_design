const navBar = document.querySelector('.nav-bar');
const navList = document.querySelector('.nav-list');

if(navBar){
    navBar.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
}


let scrollcontainer = document.querySelector('.gallery');
let backButton = document.getElementById('back-btn');
let nextButton = document.getElementById('next-btn');

scrollcontainer.addEventListener('wheel', (evt) =>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
});

nextButton.addEventListener('click', () =>{
    scrollcontainer.style.scrollBehavior = 'smooth';
    scrollcontainer.scrollLeft += 900;
});
backButton.addEventListener('click', () =>{
    scrollcontainer.style.scrollBehavior = 'smooth';
    scrollcontainer.scrollLeft -= 900;
});


