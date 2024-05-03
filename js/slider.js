const left =document.querySelector('.left-btn');
const right =document.querySelector('.right-btn');
let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');
let bg1 = document.querySelectorAll('.bg-1')
let c=0;
right.addEventListener('click',function(){
    console.log(bg1)
    for(let el of bg1){
        el.classList.remove('active')
    }
    title.classList.remove('active');
    subtitle.classList.remove('active');
    if(c==2){
        c=0;
        title.classList.add('active');
        subtitle.classList.add('active');
    }else{
        c++
    }
    
    bg1[c].classList.add('active');
})
left.addEventListener('click',function(){
    console.log(bg1)
    title.classList.remove('active');
    subtitle.classList.remove('active');
    for(let el of bg1){
        el.classList.remove('active')
    }
    if(c==0){
        c=2;
    }else if(c == 1){
        c--
        title.classList.add('active');
        subtitle.classList.add('active');
    }else{
        c--
    }
    
    bg1[c].classList.add('active');
})
