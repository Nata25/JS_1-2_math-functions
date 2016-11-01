// -------------------------------------
// JavaScript. HW 1
// analogue of Math.pow()
// pow is whole number
// -------------------------------------

var number = prompt("Enter number: ", 0);
var power = prompt("Enter power:", 0);

if ( (!isNumeric(number)) || (!isNumeric(power)) ) {
    console.log("Invalid input");
}
else console.log(pow(number, power));

// Raise number to the given power
function pow(num, pw) {
    var result = 1;
    for (var i = 1; i<= Math.abs(pw); i++) {
        result *= num;
    }
    if (pw < 0) result = 1/result;

    var decimal = parseInt(num, 16);
    if (decimal.toString(16) == num) {
        console.log("true");
    }

    return "0x" + result.toString(16);
}

// helper to manage empty string
function isNumeric(n) {
    return !isNaN(parseFloat(n));
}
