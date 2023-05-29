const nav = document.querySelector("header");
window.addEventListener("scroll", function(){
  if(this.document.documentElement.scrollTop>20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }

})

const Parallax = document.querySelector("#home");
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  Parallax.style.backgroundPositionY = offset * 0.5 +"px";
});


//menu 
let menu = document.querySelector('nav')
let menubtn = document.querySelector('.menu-btn')
let closebtn = document.querySelector('.close-btn')

menubtn.addEventListener('click', function(){
    menu.classList.add('active');
});
closebtn.addEventListener('click', function(){
    menu.classList.remove('active');
});

//static

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

//countdown

const openTimeStr = "We are open at 17:00"
const openTime = parseInt(openTimeStr.substring(15, 20));
document.getElementById("open-time").innerText = openTimeStr;
const inputs = document.querySelectorAll("input")

function clock(){
  const closeTime = 22 
  const now = new Date();
  var now_hh = now.getHours();
  
  // if its after the restaraunt closed:
  if (now_hh >= closeTime) {
    tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(openTime);
    tomorrow.setMinutes(00);
    tomorrow.setSeconds(00);
    var diff = tomorrow - now;
  }

  // restaraunt is closed we are waiting for it to open
  if (now_hh < openTime) {
    todayOpen = new Date(now);
    todayOpen.setHours(openTime);
    todayOpen.setMinutes(00);
    todayOpen.setSeconds(00);
    var diff = todayOpen - now;
  }

  // return early if restaraunt is open.
   if (now_hh > openTime && now_hh < closeTime) {
     return;
  }

  day_to_miliseconds = 1000 * 60 * 60 * 24
  // 1 day equivalent in milliseconds
  hour_to_miliseconds = 1000 * 60 * 60
  // 1 hour equivalent in milliseconds
  minute_to_miliseconds = 1000 * 60
  // 1 minute equivalent in milliseconds
  second_to_miliseconds = 1000
  // 1 second equivalent in milliseconds

  let days = Math.floor(diff / day_to_miliseconds );
  // number of days from the difference in dates
  let hours = Math.floor((diff % day_to_miliseconds) / hour_to_miliseconds);
  // number of hours from the remaining time after removing days 
  let minutes = Math.floor((diff % hour_to_miliseconds) / minute_to_miliseconds);
  // number of minutes from the remaining time after removing hours
  let seconds = Math.floor((diff % minute_to_miliseconds) / second_to_miliseconds);
  // number of hours from the remaining time after removing seconds

  console.log(days, hours, minutes, seconds)
  inputs[0].value = hours;
  inputs[1].value = minutes;
  inputs[2].value = seconds;
}

clock()

setInterval(
  ()=>{
    clock()
  },
  1000
)


