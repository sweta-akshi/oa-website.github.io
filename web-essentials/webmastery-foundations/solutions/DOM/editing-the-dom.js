var list = document.querySelector('#list');

// Update the 'Coffee' item to say 'Fair Trade Coffee'
list.children[1].innerHTML = "Fair Trade Coffee";

// Remove 'Veggie Burgers' from the list
list.children[3].remove();

// Add an item 'Cheese Whiz'
var cheeseWhiz = document.createElement('li');
cheeseWhiz.innerHTML = 'Cheese Whiz';
list.appendChild(cheeseWhiz);

// Clear the list and programmatically add the following items
//   ['protein powder', 'muscle milk', 'power bars']`
list.innerHTML = '';
['protein powder', 'muscle milk', 'power bars'].forEach(function(itemText) {
	var li = document.createElement('li');
	li.innerHTML = itemText;
	list.appendChild(li);
})

// Add the class 'important' to the muscle milk item.
list.children[1].className = "important";
