function count(arr, callback) {
    return arr.reduce((cnt, v) => callback(v) ? cnt + 1 : cnt, 0);
}

const numbers = [1, 2, -3, 4, 5, -6, 7, 8];

const evens = count(numbers, n => n % 2 === 0);
console.log('evens:', evens);

const negatives = count(numbers, n => n < 0);
console.log('negatives:', negatives);

const fruit = ['apple', 'orange', 'apple', 'banana', 'kiwi', 'apple'];
const apples = count(fruit, f => f === 'apple');
console.log('apples:', apples);
