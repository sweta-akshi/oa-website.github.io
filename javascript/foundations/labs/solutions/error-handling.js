
function validate(num) {
    if (typeof (num) !== 'number') {
        throw new TypeError(`The value ${num} is not a number`);
    }
    console.log(`The value ${num} is valid.`);
}

// TODO: The program exits when it encounters the 'banana' value.
//       Add a try / catch so that all values are validated
const numbers = [1, 2, 'banana', 4, 'orange', 5];
numbers.forEach(function (val) {
    try {
        validate(val);
    } catch (e) {
        console.log(e.message);
    }
});
