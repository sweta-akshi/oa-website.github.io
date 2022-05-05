function sumPendingOrders(orders) {
    const sum = orders
        .filter(o => o.status === 'pending')
        .map(o => o.price)
        .reduce((a, b) => a + b, 0);
    return sum === 0 ? 'no pending orders' : sum;
}

const order = [
    { price: 45.0, status: "processed" },
    { price: 20.0, status: "pending" },
    { price: 60.0, status: "pending" },
    { price: 15.0, status: "processed" }
];

console.log(sumPendingOrders(order));       // 80
