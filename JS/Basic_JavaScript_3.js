function addition_Function() {
    var addition = 47 + 77 ;
    document.getElementById("Math").innerHTML = "47 + 77 = " + addition;
}

function subtraction_Function() {
    var subtraction = 8 - 3 ;
    document.getElementById("math").innerHTML = "8 - 3 = " + subtraction;
}

function multiply_by() {
    var simple_Math = 7 * 9;
    document.getElementById("multiply").innerHTML = "7 x 9 = " + simple_Math;
}

function divide_by() {
    var simple_Math = 84 / 3;
    document.getElementById("divide").innerHTML = "84 / 3 = " + simple_Math;
}

function remainder_of() {
    var simple_math = 20 % 3;
    document.getElementById("modulous").innerHTML = "When you divide 20 by 3 you have a remainder of " + simple_math;
}

function negation_opp() {
    var x = 14;
    document.getElementById("negative").innerHTML = -x;
}

var x = 33;
x++;
document.write(x);

var x = 79;
x--;
document.write(x);

window.alert(Math.random());

document.write(Math.PI);