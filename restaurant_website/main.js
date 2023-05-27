let menu = document.querySelector('nav')
let menubtn = document.querySelector('.menu-btn')
let closebtn = document.querySelector('.close-btn')

menubtn.addEventListener('click', function(){
    menu.classList.add('active');
});
closebtn.addEventListener('click', function(){
    menu.classList.remove('active');
});







const staticContentE1 = document.querySelectorAll('.num');

staticContentE1.forEach((staticContentE1) =>{
  staticContentE1.innerText = "0";
  increamentCounter();

  function increamentCounter(){
    let currentNum = +staticContentE1.innerText;
    const dataCeil = staticContentE1.getAttribute('data')
    const increament = dataCeil/15;
    currentNum = Math.ceil(currentNum+increament);

    if(currentNum < dataCeil){
      staticContentE1.innerText = currentNum;
      setTimeout(increamentCounter, 70);
    }
    else{
      staticContentE1.innerHTML = dataCeil
    }
  }
});
