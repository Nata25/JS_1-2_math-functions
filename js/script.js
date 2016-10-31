// -------------------------------------
// JavaScript. HW 1
// Raise number to the given power
// Parameters are get from user input
// Result is printed to the console
// -------------------------------------

var number = prompt("Enter number: ");
var power = prompt("Enter power:");

if ( (isNaN(+number)) || (isNaN(+power)) ) {
    console.log("Invalid input");
}
else console.log(pow(number, power));


function pow(num, pw) {
    var result = 1;
    for (var i = 1; i<= pw; i++) {
        result *= num;
    }
    return result;
}
