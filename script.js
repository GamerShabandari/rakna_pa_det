

let firstNumber = document.getElementById("firstNumber");

let secondNumber = document.getElementById("secondNumber");

let raknesatt = document.getElementById("raknesatt");


myBtn.addEventListener ("click" , function(){

    let summa = Number(firstNumber.value) + Number(secondNumber.value);
    console.log(summa);

});