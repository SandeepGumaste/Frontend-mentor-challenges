
const themeToggle = document.getElementById('theme-toggle');
const ball = document.getElementById('ball-toggle');
const body = document.querySelector('body');
let theme = 1;
themeToggle.addEventListener('click', ()=>{
    theme==3?theme=1:theme++;
    switch(theme){
        case 1:
            body.classList.remove('theme-3');
            ball.classList.remove('justify-end');
            break;
        case 2:
            body.classList.add('theme-2')
            ball.classList.add('justify-center');
            break;
        case 3:
            body.classList.remove('theme-2');
            body.classList.add('theme-3')
            ball.classList.remove('justify-center');
            ball.classList.add('justify-end');
            break;
    }
})
