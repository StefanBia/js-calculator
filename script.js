let number = 0;
let prev = 0;

const result = document.querySelector(".result");

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const add = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const equal = document.querySelector(".equal");
const clr = document.querySelector(".clear-button");

let sign = "nop";

zero.addEventListener('click', function() {

    number *= 10;
    number += 0;

    result.textContent = number.toString();
});

one.addEventListener('click', function() {

    number *= 10;
    number += 1;

    result.textContent = number.toString();
});

two.addEventListener('click', function() {
    number *= 10;
    number += 2;
    result.textContent = number.toString();
});

three.addEventListener('click', function() {
    number *= 10;
    number += 3;
    result.textContent = number.toString();
});

four.addEventListener('click', function() {
    number *= 10;
    number += 4;
    result.textContent = number.toString();
});

five.addEventListener('click', function() {
    number *= 10;
    number += 5;
    result.textContent = number.toString();
});

six.addEventListener('click', function() {
    number *= 10;
    number += 6;
    result.textContent = number.toString();
});

seven.addEventListener('click', function() {
    number *= 10;
    number += 7;
    result.textContent = number.toString();
});

eight.addEventListener('click', function() {
    number *= 10;
    number += 8;
    result.textContent = number.toString();
});

nine.addEventListener('click', function() {
    number *= 10;
    number += 9;
    result.textContent = number.toString();
});

////////////////////////////////////////////////////////////////Operation Buttons

add.addEventListener('click', function() {
    prev += number;
    number = 0;
    result.textContent = number.toString();
    sign = "+";
});

minus.addEventListener('click', function() {
    prev = number;
    number = 0;
    result.textContent = number.toString();
    sign = "-";
});

divide.addEventListener('click', function() {

        prev = number;
        number = 0;
        result.textContent = number.toString();
        sign = "/";
   
});

multiply.addEventListener('click', function() {
    prev = number;
    number = 0;
    result.textContent = number.toString();
    sign = "*";
});

/////////////////////////////////////////////////////////////////////

equal.addEventListener('click', function() {
    
    switch(sign){
        case "+" : number += prev;
        prev = 0;
        break;
        case "-":
            number = prev - number;
            prev = 0;
            break;
        case "/":
            if (number !== 0) {
                number = prev / number;
                prev = 0;
                number = parseFloat(number.toFixed(4));
            } else {
                console.error("Division by zero error!");
            }
            break;
        case "*":
            number *= prev;
            prev = 0;
            break;
    }

    result.textContent = number.toString();
});

clr.addEventListener('click', function() {
    prev = 0;
    number = 0;
    result.textContent = number.toString();
    sign = "nop";
});