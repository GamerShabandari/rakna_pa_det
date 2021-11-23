

let firstNumber = document.getElementById("firstNumber");

let secondNumber = document.getElementById("secondNumber");

let raknesatt = document.getElementById("raknesatt");


myBtn.addEventListener ("click" , function(){

    let summa = 0;
    raknesatt = document.getElementById("raknesatt").value;
    console.log(raknesatt);

    switch(raknesatt) {
        case "+":
            summa = Number(firstNumber.value) + Number(secondNumber.value);
            console.log(summa);
            console.log("adderade");
        break;
        case "-":
            summa = Number(firstNumber.value) - Number(secondNumber.value);
            console.log(summa);
            console.log("subtraherade");
        break;
        case "/":
            summa = Number(firstNumber.value) / Number(secondNumber.value);
            console.log(summa);
            console.log("delade");
        break;
        case "*":
            summa = Number(firstNumber.value) * Number(secondNumber.value);
            console.log(summa);
            console.log("gångrade");
        break;

    };

});