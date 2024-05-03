const buttons = document.querySelectorAll('.buttonn');
const title = document.querySelectorAll('.dropdown__title');
const close = document.querySelectorAll('.close__button');
const dropdown = document.querySelector('.dropdown');
const bg = document.querySelector('.box__bg');
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        for(let j=0;j<buttons.length;j++){
            buttons[j].classList.remove('active');
            close[j].classList.remove('active');
            title[j].classList.remove('active');
            dropdown.classList.remove('active');
            bg.classList.remove('active');
        }
        buttons[i].classList.add('active');
        close[i].classList.add('active');
        title[i].classList.add('active');
        dropdown.classList.add('active');
        bg.classList.add('active');
    })
}

for(let c of close){
    c.addEventListener('click',function(){
        for(let j=0;j<buttons.length;j++){
            buttons[j].classList.remove('active');
            close[j].classList.remove('active');
            title[j].classList.remove('active');
            dropdown.classList.remove('active');
            bg.classList.remove('active');
        }
    })
}
bg.addEventListener('click',function(){
    for(let j=0;j<buttons.length;j++){
        buttons[j].classList.remove('active');
        close[j].classList.remove('active');
        title[j].classList.remove('active');
        dropdown.classList.remove('active');
        bg.classList.remove('active');
    }
})