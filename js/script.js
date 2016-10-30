// -------------------------------------
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

  //
  // else if ( (number == '') || (power == '') ) {
  //     number = power = '1';
  //     console.log("You didn't specify some values.");
  //     console.log("Here's the default result:");
  // }
  //
  // // If number is 0, return 0 and do no further calculations
  // else if (number == 0) result = 0;

  else {
    result = calculatePow(number, power);
  }

  console.log(number, 'raised to the power of',
              power, 'equals', result);

} // end of pow()


// -------------------------------------
// Helper functions
// -------------------------------------

// Get and validate user input; only numbers are allowed
// @param {string} param
function getParameters(param) {
  var result = prompt('Enter the ' + param + ':', '1');
  // Check if user entered a number; prompt again if not:
  var checkResult = +result;
  while ( (Number.isNaN(checkResult)) || (result.indexOf(' ') != -1) ) {
    result = prompt('Only numbers, please. Enter the ' + param + ':', '1');
    checkResult = +result;
  }
  return result;
}

// Calculate any power of number != 0
// @param {number} number > 0 or < 0
// @param {number} power
function calculatePow(number, power) {
  // for absolute value of power
  var absResult = absPow(number, Math.abs(power));
  // based on negative/positive value of power
  if (power > 0) return absResult;
  else return 1 / absResult;
}

// Recursively calculate power of number if power is positive
// @param {number} number
// @param {number} power is natural >= 0
function absPow(number, power) {
    if (power == 0) {
      return 1;
    }
    else {
      return number * absPow(number, power - 1);
    }
}
