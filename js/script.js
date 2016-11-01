// -------------------------------------
// JavaScript. HW 1
// analogue of Math.pow()
// pow is a whole number
// works with decimal and hexadecimal,
// but both param should be of one base
// -------------------------------------

var number = prompt("Enter number: ", "0");
var power = prompt("Enter power:", "0");

if ( isNaN(parseFloat(number)) || isNaN(parseFloat(power)) ) {
    console.log("Invalid input");
}
else console.log(pow(number, power));

// Raise number to the given power
// @param num, pw string
function pow(num, pw) {

    var base = 10;
    var prefix = '';

    if ( /0x/.test(num) ) {
        base = 16;
    }

    num = parseInt(num); // for negative hex
    pw = parseInt(pw); // for hex pow

    var result = 1;
    for (var i = 1; i<= Math.abs(pw); i++) {
        result *= num;
    }

    if (pw < 0) {
        result = 1/result;
    }

    return result.toString(base);
}
