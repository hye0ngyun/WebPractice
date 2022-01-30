'use strict'

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2[1]);

// 2. Inex position
const fruit = ['🍈', '🍉'];
console.log(fruit);
console.log(fruit.length);
console.log(fruit['0']);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);

// 3. Looping over an array
// print all fruit
// a. for
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

// b. for of
for(let value of fruit){
    console.log(value);
}

// c. forEach
fruit.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruit.push('🍊', '🍌')
console.log(fruit);

// pop: remove an item form the end
fruit.pop();
console.log(fruit);
fruit.pop();
console.log(fruit);



// unshift: add an item to the benigging
fruit.unshift('🍊', '🍌')
console.log(fruit);

// shift: remove an item ftom the benigging
fruit.shift();
console.log(fruit);
fruit.shift();
console.log(fruit);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index positon
fruit.push('🍓', '🍅', '🍒');
console.log(fruit);
fruit.splice(1, 1);
console.log(fruit);
fruit.splice(1, 1, '🍍', '🥭');
console.log(fruit);

// combine two arrays
const fruit2 = ['🍇', '🥝'];
const newFruit = fruit2.concat(fruit);
console.log(newFruit);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruit);
console.log(fruit.indexOf('🍍'));
console.log(fruit.indexOf('🍒'));
console.log(fruit.indexOf('🍇'));

// includes
console.log(fruit.includes('🥭'));
console.log(fruit.includes('🍇'));

// lastIndexOf
console.clear();
fruit.push('🍍');
console.log(fruit);
console.log(fruit.indexOf('🍍'));
console.log(fruit.lastIndexOf('🍍'));