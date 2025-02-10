// In js , Array is a class
//arrays are prototype of this class -think like prototype means interface in java
var list = new Array; // optional
var list = [32454, "sai bhagavan", "javvadi", 20];
// console.log(list[list.length-1]=23);//changed
// console.log(list[list.length-1]);

// for(var i=0;i<list.length;i++){
//     console.log(list[i]+", ");
// }

//After ES6 for in and for of loop

//for in loop - index is returing and value 
for (let element in list){
    // console.log("index="+element+",value="+list[element]);
}

//for of loop - direct element value is returning
for (let element of list) {
    // console.log("value="+element);
}

//normal function
list.forEach(function (element, index, array) {
    // console.log("ele="+element+" ,index="+index+" ,array="+array);
});
//arrow function
list.forEach((ele, i, array) => {
    // console.log("ele="+ele+" ,index="+i+" ,array="+array);
})
//output:
// ele=32454 ,index=0 ,array=32454,sai bhagavan,javvadi,20
// ele=sai bhagavan ,index=1 ,array=32454,sai bhagavan,javvadi,20
// ele=javvadi ,index=2 ,array=32454,sai bhagavan,javvadi,20
// ele=20 ,index=3 ,array=32454,sai bhagavan,javvadi,20

//searching and filtering
// //Array.prototype.indexOf()-
// The indexOf() method of Array instances returns the first index at which a given 
//element can be found in the array, or -1 if it is not present.
// If you need the index of the found element in the array, use findIndex().
// If you need to find the index of a value, use indexOf(). (It's similar to findIndex(),
//  but indexOf checks each element for equality with the value instead of using a testing function.)
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
// console.log(beasts.indexOf('bison', 2)); //'ant', 'bison', 'camel (started at this index(2))', 'duck', 'bison - 4 index(ans)'
// Expected output: 4

// console.log(beasts.indexOf('giraffe')); // giraffe is not avaliable
// Expected output: -1
// console.log(beasts.findIndex('camel')); wrng

// Array.prototype.find() -The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function

var array1 = [5, 12, 8, 130, 44];

var found = array1.find((element) => element > 10);

// console.log(found);
// Expected output: 12 -12 founded 1st which satisfys the condition

// Array.prototype.findIndex() -The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.
var found = array1.findIndex((element) => element > 10);

// console.log(found); // Expected output: 1 (index of 12)

//Array.prototype.includes() -The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
var array1 = [1, 2, 3];

// console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// Expected output: true

// console.log(pets.includes('at'));
// Expected output: false

//Array instance functions.....
//Array.forEach(func(each ele))
//Array.prototype.indexOf(by value),by testing function(find(),findIndex()),includes(by value)


//Arrays -CRUD (push,pop,unshift,shift,splice)
//Array.prototype.push() -can add one or more eles at a time ,returns new array length
const animals = ['pigs', 'cat', 'tiger'];
var len = animals.push('lion', 'goat'); // returns the new array length 
// console.log(animals+" :,:"+len);  //o/p:pigs,cat,tiger,lion,goat :,:5
var len = animals.unshift('dog');
// console.log(animals,len);//o/p -[ 'dog', 'pigs', 'cat', 'tiger', 'lion', 'goat' ] 6

//Array.prototype.pop()
// console.log(animals.pop()); //removes last ele and return that removed element -goat 
// console.log(animals); //o/p:[ 'dog', 'pigs', 'cat', 'tiger', 'lion' ]
// console.log(animals.shift());//  removes 1st ele and return that removed element -dog 


// Array.prototype.splice() - for adding and deleting at a time( as per x)->(n,x,"") ,returns empty array
const months = ['jan', 'march', 'april', 'june', 'july'];
const newMonth = months.splice(3, 1, "Dec");
// console.log(months); //for (3,0,"") -> [ 'jan', 'march', 'april', 'Dec', 'june', 'july' ]
//for (3,1,"") -> [ 'jan', 'march', 'april', 'Dec', 'july' ]
//for (3,2,"") -> [ 'jan', 'march', 'april', 'Dec']

// At position 2, add 2 elements:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);//[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
//At position 2, remove 2 items:

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);


// change the march to MARCH
const month = ['jan', 'march', 'april', 'june', 'july'];
const updatedMonth = month.splice(1, 1, "MARCH"); //returns old value
// console.log(updatedMonth,month); //o/p: [ 'march' ] [ 'jan', 'MARCH', 'april', 'june', 'july' ]

//Map and Reduce
// Array.prototype.map()
const arr2 = [1, 2, 3, 4, 5, 6, 25]
let newArr = arr2.filter((currele, i, arr) => {
    return currele > 9;
})
// console.log(arr2+" -- "+newArr); //o/p:1,2,3,4,5,6,25 -- 25
newArr = arr2.map((currele, i, arr) => {
    return currele > 9;
})
// console.log(arr2+" -- "+newArr); //o/p:1,2,3,4,5,6,25 -- false,false,false,false,false,false,true

newArr = arr2.map((currele, i, arr) => { //order fixed ele,i,arr 
    return `Index no =${i} and value is ${currele} belong to ${arr}`;
})
// console.log(newArr);
// [
//     'Index no =0 and value is 1 belong to 1,2,3,4,5,6,25',
//     'Index no =1 and value is 2 belong to 1,2,3,4,5,6,25',
//     'Index no =2 and value is 3 belong to 1,2,3,4,5,6,25',
//     'Index no =3 and value is 4 belong to 1,2,3,4,5,6,25',
//     'Index no =4 and value is 5 belong to 1,2,3,4,5,6,25',
//     'Index no =5 and value is 6 belong to 1,2,3,4,5,6,25',
//     'Index no =6 and value is 25 belong to 1,2,3,4,5,6,25'
//   ]


newArr = arr2.forEach((currele, i, arr) => { //order fixed ele,i,arr  & no return value
    return `Index no =${i} and value is ${currele} belong to ${arr}`;
})
// console.log(newArr);  //undefined -no chaining with another methods(reduce,filter...) for froEach (returns nothing thats why no chaining will work)

let arr3 = arr2.map((curElm) => {
    return curElm * 2;
}).filter((curElem) =>{
    return curElem > 10;
})
// console.log(arr3); //o/p:[ 12, 50 ]

arr3 = arr2.filter((curElem) =>{
    return curElem*2 > 10;
})
// console.log(arr3); //o/p:[ 6, 25 ]


//reduce()

// takes four arguments -acc,curval,curind,arr

arr3=arr2.reduce((acc,ele,i,arr)=>{
    return acc=acc+ele;
});
// console.log(arr3); //o/p:46


// Multi-Threading in JavaScript
// While JavaScript is inherently single-threaded, you can achieve multi-threading using Web Workers:
// Web Workers: These allow you to run scripts in background threads. The main JavaScript thread can offload tasks to these workers, which execute in parallel without blocking the main thread,UI.
// Limitations: Web Workers do not have access to the DOM, which limits their use to tasks that don't require interacting with the UI directly.
// Each Web Worker runs in its own global context. This means they don’t have access to the DOM or global variables (like window, document), but they can communicate with the main thread via messages.
//Web Workers in JavaScript do not automatically run in the background; you must explicitly create and manage them. 
// Main Thread:

// const worker = new Worker('fibonacciWorker.js');

// // Send a number to calculate the Fibonacci number
// worker.postMessage(40);

// // Get the result from the worker
// worker.onmessage = function(event) {
// ...}
// Worker (fibonacciWorker.js):

// // Fibonacci calculation in a worker
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Listen for messages from the main thread
// onmessage = function(event) {
//   const result = fibonacci(event.data);
//   postMessage(result);  // Send the result back to the main thread
// };
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// console.log("Start") is placed on the call stack and executed. It prints "Start".
// setTimeout(...) is called. The timer is set to 0ms, and its callback is sent to the Web API, which will place it in the task queue once the timer completes.
// Promise.resolve().then(...) creates a microtask that is added to the microtask queue.
// console.log("End") is placed on the call stack and executed. It prints "End".
// Call Stack is Empty: The event loop checks the microtask queue. The promise's .then() callback is pushed onto the call stack and executed, printing "Promise".
// Next, the event loop checks the task queue. The setTimeout callback is pushed onto the call stack and executed, printing "Timeout".
// perfernce of execution 
//Call stack(nrml statements) > microtask queue( Promise.resolve().then call back functions) > task queue(nrml call back functions)