const amount = 45.00;
const service = 'great';  // service can be 'great', 'good', or 'poor'

let tip = null;
if (service === 'great') {
    tip = amount * 0.20;
} else if (service === 'good') {
    tip = amount * 0.15;
} else {
    tip = amount * 0.10;
}
console.log('tip:', tip);
