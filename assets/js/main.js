const myinp = document.getElementById('myinp')
const btnClear = document.querySelector('#btn-clear')
const btnLastAction = document.querySelector('#btn-last-action')
const btnBackSpace = document.querySelector('#btn-back-space')
const btnDiv = document.querySelector('#btn-div')
const btnPlus = document.querySelector('#btn-plus')
const btnMin = document.querySelector('#btn-min')
const btnMul = document.querySelector('#btn-mul')
const btnPint = document.querySelector('#btn-pint')
const btnEquls = document.querySelector('#btn-equls')
const btnPn = document.querySelector('#btn-pn')
const btnNumber = document.querySelectorAll('.btn-Number')

let flag = false
let num1 , num2 ;
let op = ''
let result;
let setr = false


btnNumber.forEach((val) =>{
    val.addEventListener('click', function(e){
        if(myinp.value == '0.0'){
            myinp.value = e.target.textContent
        }else{
            myinp.value += e.target.textContent
        }
    })
})

btnClear.addEventListener('click', function(e){
    myinp.value = '0.0'
    flag = false
    setr = false
    num1 = 0
    num2 = 0
})

btnBackSpace.addEventListener('click', function(e){
    let lastnum = myinp.value.slice(-1)
    if(lastnum == '.'){
        flag = false
    }
    if (myinp.value === '0.0' || myinp.value.length === 1) {
        myinp.value = '0.0'
    } else {
        myinp.value = myinp.value.slice(0, -1)
    }
})

btnPn.addEventListener('click', function(e){
    myinp.value = myinp.value* (-1)
})


btnPint.addEventListener('click', function(e){
    if(flag == false){
        myinp.value = myinp.value + '.'
        flag = true
    }
})

btnMin.addEventListener('click', function(e){
    num1 = Number(myinp.value)
    myinp.value = '0.0'
    op = '-'
})

btnEquls.addEventListener('click' , function(){
    if(setr == false){
        num2 = Number(myinp.value)
    }else{
        num1 = Number(myinp.value)
    }
    switch(op){
        case '-' : result =num1 - num2 ; break ;
        case '+' : result =num1 + num2 ; break ;
        case '*' : result =num1 * num2 ; break ;
        case '/' : result =num1 / num2 ; break ;
    }
    myinp.value = result
    setr = false
    num1 = result
    flag = false
})

btnDiv.addEventListener('click', function(){
    num1 = Number(myinp.value)
    myinp.value = '0.0'
    op = '/'
})

btnMul.addEventListener('click', function(){
    num1 = Number(myinp.value)
    myinp.value = '0.0'
    op = '*'
})

btnPlus.addEventListener('click', function(){
    num1 = Number(myinp.value)
    myinp.value = '0.0'
    op = '+'
})
btnLastAction.addEventListener('click',function(){
    myinp.value = '0.0'
})