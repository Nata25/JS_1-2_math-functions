// Calculate square root of n
// @param n number > 0.001;
// @return res number; floats are rounded to 3 dec places

function sqrt(n) {
    var guess1 = n / 2;
    var guess2, current, delta;

    while (true) {
        guess2 = 0.5 * (guess1 + n / guess1);
        current = guess2 * guess2;
        delta = Math.abs(n - currentResult);
        // console.log(current, guess2);
        if (delta < 0.001) {
            res = Math.round(guess2 * 1000) / 1000;
            return res;
        }
        guess1 = guess2;
    }
}

var number = 81;
console.log(sqrt(number));
