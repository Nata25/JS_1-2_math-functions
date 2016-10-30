// -------------------------------------
// Javasctipt. HW 1
// Raise the number into the given power
// Parameters are get from user input
// Result is printed to the console
// -------------------------------------

pow();

// Main controller
function pow() {

    var result, number, power;

    number = getParameters('number');
    power = getParameters('power');

    // If user cancelled prompt
    if ( (number == null) || (power == null) ) {
        console.log("No values provided.");
    }

    else {
      result = calculatePow(number, power);
    }

    console.log(number + ' to the power of ' +
                power + ' equals ' + result);

} // end of pow()

// -------------------------------------
// Helpers
// -------------------------------------

// Get and validate user input; only numbers are allowed
// @param {string} param
// @return {number} value

function getParameters(param) {

    var input = prompt('Enter the ' + param + ':', '1');
    // Check if user entered a number; prompt again if not:
    var value = +input;
    while ( (Number.isNaN(input)) || (input.indexOf(' ') != -1) ) {
      input = prompt('Only numbers, please. Enter the ' + param + ':', '1');
      value = +input;
    }
    return value;
}

// Calculate power of a number
// @param {number} number >= 0 or =< 0
// @param {number} power

function calculatePow(number, power) {

    if (number == 0) return 0;

    // for absolute value of power
    var absResult = absPow(number, Math.abs(power));

    // based on negative/positive value of power
    if (power > 0) return absResult;
    else return 1 / absResult;
}

// Recursively calculate power of number
// @param {number} number > 0
// @param {number} power is natural >= 0

function absPow(number, power) {
    if (power == 0) return 1;
    else return number * absPow(number, power - 1);
}
