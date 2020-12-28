// Objects
// one of the Javascirpt's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaSCript are instance of Object
// object = { key : value };

// 1. Literals and properties
// const name = 'ellie';
// const age = 4;
// print(name, age);
const obj1 = {};        // 'object literal' syntax
obj2 = new Object();    // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamic typed language)
// can add propertied later
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);    // 정확한 값을 가져올 때
console.log(ellie['name']); // 정확히 모를 때(runtime)
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj, );
}