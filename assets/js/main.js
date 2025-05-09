const myinp = document.querySelector('.myinp')
const buttons = document.querySelectorAll('.buttons')
const specialChars = ['/', '*', '-', '+', '%', '=']

let outPut = ""
const calculator = (btnValue) => {
    if(btnValue == '=' && outPut !== ""){
        outPut = eval(outPut.replace("%", "/100"))
    }else if(btnValue == 'AC'){
        outPut = ""
    }else if(btnValue == 'DEL'){
        outPut = outPut.toString().slice(0, -1)
    }else{
        if(outPut == "" && specialChars.includes(btnValue)) return;
        outPut += btnValue
    }

    myinp.value = outPut
}

buttons.forEach((val)=>{
    val.addEventListener('click', (e)=> calculator(e.target.dataset.value))
})