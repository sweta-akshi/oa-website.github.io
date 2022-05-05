const numbers = [12, 3, 26, 19, 11, -4, 99];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
        console.log(`${numbers[index]} is even`);
    } else {
        console.log(`${numbers[index]} is odd`);
    }
}
