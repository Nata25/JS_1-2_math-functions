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
    if (number != undefined) {
        power = getParameters('power');
    }

    if (power != undefined) {
        result = calculatePow(number, power);
        console.log(number + ' to the power of ' +
                    power + ' equals ' + result);
    }
}

// -------------------------------------
// Helpers
// -------------------------------------

// Get and validate user input; only numbers are allowed
// @param {string} param
// @return {string} input

function getParameters(param) {

    do {

        var input = prompt('Enter the ' + param + ', numbers only:', '0');

        // If user cancels input or deletes default value
        if ( (input == null) || (input == '') ) {
            console.log("No values provided.");
            return;
        }

        var invalid = (Number.isNaN(+input) || (input.indexOf(' ') != -1) );

    } while (invalid);

    return input;
}

// Calculate power of a number
// @param {number} number >= 0 or =< 0
// @param {number} power
// @return {number}

function calculatePow(number, power) {

    if (number == 0) return 0;

    // for absolute value of power
    var absResult = absPow(number, Math.abs(power));

    console.log(typeof absResult);
    // based on negative/positive value of power
    if (power > 0) return absResult;
    else return 1 / absResult;
}

// Recursively calculate power of number
// @param {number} number > 0
// @param {number} power is natural >= 0
// @return {number}

function absPow(number, power) {
    if (power == 0) return 1;
    else return number * absPow(number, power - 1);
}
