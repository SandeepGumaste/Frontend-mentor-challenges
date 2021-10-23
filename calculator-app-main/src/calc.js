const resetBtn = document.getElementById('reset-btn');
const equalBtn = document.getElementById('equal-btn');
const screen = document.getElementById('screen');
const numberBtn = document.querySelectorAll('.number');
const operationBtn = document.querySelectorAll('.operator');
const deleteBtn = document.getElementById('del-btn');
const decimal = document.getElementById('decimal');

let variables = ['',''];
let operator = '';
let id = 0;

function reset(){
    let variables = ['',''];
    let operator = '';
    let id = 0;
    updateScreen();
}

function updateScreen(){
    if(variables[id]===''){
        screen.innerText = '0';
    }else{
        screen.innerText=variables[id];
    }
}
function del(){
    if(variables[id].length>0){
        variables[id]= variables[id].substr(0,variables[id].length-1);
        console.log(variables)
        updateScreen();
    }
}

function calculate(){
    let res = eval(variables[0]+operator+variables[1]);
    res = res.toString();
    res.indexOf('.')>0?res=res.substr(0,9):res=res.substr(0,8);
    res=parseFloat(res);
    operator='';
    variables[1]='';
    variables[0]=res;
    id=0;
    updateScreen()
    variables[0]='';
}

resetBtn.addEventListener('click',reset);
numberBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const regexp= /^[-+]?[0-9]+([.][0-9]*)?|([.][0-9]+)$/;
        if(regexp.test(variables[id]+btn.innerText)){

            variables[id]+=btn.innerText;
            updateScreen();
            
        }
    })
})

deleteBtn.addEventListener('click', del);
equalBtn.addEventListener('click', calculate)

operationBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        if(variables[0]===''&& screen.innerText!=='0'){
            variables[0]= screen.innerText;
        }
        decimal.disabled = false;
        id++;
        switch(btn.innerText){
            case '+':
            case '-':
            case '/':
                operator=btn.innerText
                break;
            case 'x':
                operator = '*' ;

        }
    })
})
decimal.addEventListener('click',()=>{
    decimal.disabled = true;
})