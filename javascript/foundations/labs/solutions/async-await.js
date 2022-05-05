function getNumber(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n), 500);
    });
}

const getX = () => getNumber(3);
const getY = () => getNumber(5);
const getZ = () => getNumber(2);

async function sumData() {
    const x = await getX();
    const y = await getY();
    const z = await getZ();
    console.log(x + y + z);

    /* or alternatively you can put the awaits inside the console.log, which actually runs faster
       as the 3 promises resolve concurrently:
    const x = getX();
    const y = getY();
    const z = getZ();
    console.log(await x + await y + await z);
    */
}

sumData();
