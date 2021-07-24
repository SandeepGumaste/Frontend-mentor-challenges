const tog = document.getElementById('tog');
const basic = document.getElementById('basic')
const pro = document.getElementById('pro')
const master = document.getElementById('master')
let count=0;
function monthly(){
    count++;
    if(count==1){
        basic.innerHTML='$19.99';
        pro.innerHTML='$24.99'
        master.innerHTML='$39.99'
    }else{
        count=0;
        basic.innerHTML='$199.99';
        pro.innerHTML='$249.99'
        master.innerHTML='$399.99'
    }
}