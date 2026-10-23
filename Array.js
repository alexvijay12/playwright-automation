const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

fruits.push('Pineapple');
console.log('After push:', fruits);

fruits.pop();
console.log('After pop:', fruits);

fruits.unshift('Watermelon');
console.log('After unshift:', fruits);

fruits.shift();
console.log('After shift:', fruits);

// Creates a new array containing Banana, Mango, and Orange.
const selectedFruits = fruits.slice(1, 4);
console.log('Slice result:', selectedFruits);

// Remove Mango.
fruits.splice(fruits.indexOf('Mango'), 1);
console.log('After removing Mango:', fruits);

// Add Kiwi between Banana and Orange.
fruits.splice(fruits.indexOf('Orange'), 0, 'Kiwi');
console.log('After adding Kiwi:', fruits);

// Replace Orange with Papaya.
fruits.splice(fruits.indexOf('Orange'), 1, 'Papaya');
console.log('After replacing Orange:', fruits);


