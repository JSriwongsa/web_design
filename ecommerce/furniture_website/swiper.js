const slider1 = document.querySelector('#glide_')
if(slider1){
    new Glide(slider1, {
        type:'footer',
        startAt: 0,
        autoplay:3000,
        gap:0,
        hover:true,
        perView:1,
        animationDuration:800,
        AnimationTimeframe: 'linear',
    }).mount();
}