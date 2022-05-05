function getData() {
    return new Promise((resolve, reject) => {
        const data = [1, 2, 3];
        setTimeout(() => resolve(data), 1000);
    });
}

getData().then(data => {
    const sum = data.reduce((a, b) => a + b, 0);
    console.log(sum);
});
