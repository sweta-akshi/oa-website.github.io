const shoppingList = ['pizza', 'chips', 'salsa', 'coffee'];
const cart = [];

// TODO: add 'apples' to the end of the shoppingList
shoppingList.push('apples');

// TODO: add 'bread' to the front of the shoppingList
shoppingList.unshift('bread');

// TODO: use indexOf to replace 'coffee' with 'tea'
const coffeeIndex = shoppingList.indexOf('coffee');
shoppingList[coffeeIndex] = 'tea';

// TODO: use splice to replace `chips` and `salsa` with `rice` and `beans`
const chipsIndex = shoppingList.indexOf('chips')
shoppingList.splice(chipsIndex, 2, 'rice', 'beans');

// TODO: put the first and the last items from your shoppingList into your cart
cart.push(shoppingList.shift());
cart.push(shoppingList.pop());

console.log('shoppingList:', shoppingList);
console.log('cart:', cart);
