// numbers
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
let evenNumbers = numbers.filter(n => n % 2 === 0);
let oddNumber = numbers.find(n => n % 2 !== 0);
let largestNumber = numbers.reduce((a, b) => a > b ? a : b);
console.log('evenNumbers:', evenNumbers);
console.log('oddNumber:', oddNumber);
console.log('largestNumber:', largestNumber);

// strings
const strings = ["this", "is", "a", "collection", "of", "words"];
let onlyIs = strings.filter(str => str.includes("is"));
let longestWord = strings.reduce((a, b) => a.length > b.length ? a : b);
console.log('onlyIs:', onlyIs);
console.log('longestWord:', longestWord);

// objects
const orders = [
    { price: 45.0, status: "processed" },
    { price: 20.0, status: "pending" },
    { price: 60.0, status: "pending" },
    { price: 15.0, status: "processed" }
];
let allPrices = orders.map(o => o.price);
let pendingOrders = orders.filter(o => o.status === "pending");
let total = allPrices.reduce((a, b) => a + b, 0);
console.log('allPrices:', allPrices);
console.log('pendingOrders:', pendingOrders);
console.log('total:', total);
