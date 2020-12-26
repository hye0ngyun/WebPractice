// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calcurates a value

/*
1. Function declaration
funtion name(param1, param2) { body ... return; }
one function === one thing -- 하나의 함수는 한가지의 일만 하도록
naming: doSomething, command, verb
e.g. createCardAndPoint -> createCard, createPoint
function is object in JS
*/
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);
/*
on typescript
function log(message: string): number{
    console.log(message);
    return 0;
}
log('hello');
*/

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const shin = {name:'shin'};
console.log(shin.name);
console.log(shin);
changeName(shin);
console.log(shin.name);
console.log(shin);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    /*
    if(from === undefined){
        from = 'unknown';
    }
    */
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){ // pyhton for a in b:와 동일
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global';   // global variable
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); impossible
}
printMessage();

console.log(`sum: ${sum(1, 3)}`);   // hoisting
// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad
function upgradeUser(uesr){
    if(uesr.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(uesr){
    if(uesr.point <= 10){
        return;
    }
    // long upgrade logic...
}

/*
First-class function
functions are treated like any other variable
can be assigned as a value to variable
can be passed as an argument to other functions.
can be returned by another function
*/

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){   // anoymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
/*
const simplePrint = function(){
    console.log('simplePrint!');
};
*/

const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;
/*
const add = function(a, b) {
    // do something more
    return a + b;
};
*/

// IIFE: Immediately Invokely Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// quiz
// function calcurate(command, a, b)
// command: (add, subtract, divide, muliply, remainder)

const calcurate = function(command, a, b){
    switch(command){
        case add:
            return a + b
            break;
        case subtract:
            return a - b
            break;
        case divide:
            return a / b
            break;
        case multiply:
            return a * b
            break;
        case remainder:
            return a % b
            break;
        default:
            break;
    }
}
console.log(calcurate(add, 5, 13));

//console.log(calcurate(subtract, 5, 13));
/*
console.log(calcurate(divide, 5, 13));
console.log(calcurate(multiply, 5, 13));
console.log(calcurate(remainder, 5, 13));
*/