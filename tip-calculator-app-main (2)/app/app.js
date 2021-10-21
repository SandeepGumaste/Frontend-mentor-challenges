let btns = document.querySelectorAll('.btn');
const bill = document.getElementById('bill');
const peep = document.getElementById('peep')
let pp = document.getElementById('pp');
let tp = document.getElementById('tp');
const cust = document.getElementById('cust')
btns.forEach(button => {
    button.addEventListener('click', ()=>{
        removeActiveClasses();
        let bil = bill.value;
        let btn = button.value
        calculate(bil,btn);
        button.classList.add('active')
    })
})
function reset(){
    bill.value = null;
    peep.value = 1;
    calculate(0,0);
    removeActiveClasses()
}
function calculate(x,y){
    
    const perc = x*y/100;
    pp.innerText = (perc/peep.value).toFixed(2);
    tp.innerText = ((x/peep.value)+parseFloat(pp.innerText)).toFixed(2);
}
function removeActiveClasses(){
    btns.forEach(button => {
        button.classList.remove('active')
    })
}

