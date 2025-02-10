
function sum(){
    var a =12,b=13;
    return a+b;
}
// console.log(sum());

//function parameters are values in function definition 
//function arguments are real values which are passed to function

function add(a,b){
    return a+b
}

// console.log(add(20,30));//o/p: 50

//functions expressions -function assigning to a variable
var a=5,b=15; 
var ans=add(a,b);
// console.log(`sum of ${a} and ${b} = ` +ans); //o/p : 20


//anonymous function- function without name is called anonymous function

var funcAns = function(a,b){
    return a*b;
}
var a=4,b=5;
// console.log(`product of ${a} and ${b} = `+funcAns(a,b));

// console.log(funcAns); //o/P :[Function: funcAns]
// console.log(`product of ${a} and ${b} = `+funcAns); 
// //o/p:product of 4 and 5 = function(a,b){
// //     return a*b;
// //    }
// console.log(funcAns(a,b));//o/p; 20

//ECMAScript 6edition -ES6
//var => function scope
//let and const => Block SCope
function name(){
    let fname="javvadi";
    // console.log(fname); //o/P:javvadi
    if(true){ //block
        let lname="sai";
        // console.log("inner ="+lname); //o/p: sai
        // console.log("inner ="+fname); //o/p: javvadi
    }
    // console.log("outer ="+lname); //o/p: not defined
}
name()

//declaring two functions is not a problem with same name in js
// let a1=4,b1=5
// function mult(){
//     return a1+b1;

// }
// console.log(mult(4,5)); //o/p: 20

function mult(a,b){
    return a*b;
}
// console.log(mult(4)); //o/p: NaN

function div(a=3,b=4){
    return a/b;
}
// console.log(div()); //o/p: 3


//Fat Arrow function - for arrow function we need to define the 1st and call 
// if we write the console.log(func) before func declaration then get func is not a function
let a2=14,b2=13
const minus = (a4,b4) =>{
    // return `Subtraction of ${a4} and ${b4} = ${(a4=4)-(b4=1)}`; //o/p: 3
    return `Subtraction of ${a4} and ${b4} = ${a4-b4}`;
}
// console.log(minus(a2,b2));//o/p: 1

const minus1 = (a4,b4) =>`Subtraction of ${a4} and ${b4} = ${a4-b4}`;
console.log(minus1(a2,b2));




var x;            // Declaration
x = 10;           // Assignment
var y = 20;       // Declaration + assignment (also known as definition)
let z;            // Declaration (z is uninitialized in TDZ)
z = 30;           // Assignment
const w = 40;     // Declaration and definition (w must be assigned when declared becoz of const )

function myFunc() { // Function declaration and definition
  console.log("Hello!");
}

const anotherFunc = function() { // Declaration and definition of function expression
  console.log("Hi!");
};

// Function Declarations:      Fully hoisted. You can call them before declaring.
// Function Expressions:       Only the variable is hoisted (as undefined), so calling before initialization results in an error.
// var Declarations:           Hoisted and initialized to undefined, making them accessible before assignment but with an undefined value.
// let and const Declarations: Hoisted but uninitialized, leading to a ReferenceError if accessed before their declaration.

// var function expressions           ::::::> are hoisted but initialized to undefined, leading to a TypeError if called before definition.
// let and const function expressions ::::::> are hoisted but uninitialized, resulting in a ReferenceError if accessed before definition.
