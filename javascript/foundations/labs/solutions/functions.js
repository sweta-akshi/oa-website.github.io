function fizzBuzz(value) {
    if (value % 15 === 0) {
        return 'FizzBuzz';
    } else if (value % 3 === 0) {
        return 'Fizz';
    } else if (value % 5 === 0) {
        return 'Buzz'
    } else {
        return value;
    }
};

// extra credit here
for (let n = 1; n <= 15; n++) {
    console.log(fizzBuzz(n));
}

// Please don't modify the line below
module.exports = { fizzBuzz };
