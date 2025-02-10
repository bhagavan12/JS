// reference n.... a.... w... : https://chatgpt.com/share/26773c64-2b18-4d03-87d2-c48a666cc9ac
// Reference Error: A Reference Error in JavaScript occurs when you try to use a variable or function that has not been declared or defined
// A Type Error in JavaScript occurs when an operation is performed on a value of the wrong data type
// //Asynchronous 
// Inside the async function: The await pauses the execution within the function, waiting for the promise to resolve.
// Outside the async function: The main thread continues to execute other code without waiting for the async function to complete.
// //Hoisting in javascript
// //Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.
// Variable declarations with var are hoisted and initialized with undefined.
// Variable declarations with let and const are hoisted but not initialized, leading to a temporal dead zone.
// Function declarations are fully hoisted, including the body.
// Function expressions are not hoisted; only the variable declarations are hoisted(ex: var func=()=>{},var func=function(){})
// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5

// foo(); // "Hello, world!"

// function foo() {
//     console.log("Hello, world!");
// }

// bar(); // TypeError: bar is not a function

// var bar = function() {
//     console.log("This won't work!");
// };




// console.log(yx); // ReferenceError: Cannot access 'x' before initialization
// let yx = 5;
// console.log(yx); // 5

// greet(); // TypeError: greet is not a function

// const greet = () => {
//     console.log("Hello, world!");
// };

                /*inside function hoisting*/
// function hoistingExample() {
//     console.log(varVariable); // Output: undefined (due to hoisting)
//     console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
//     console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization

//     var varVariable = 'I am a var variable';
//     let letVariable = 'I am a let variable';
//     const constVariable = 'I am a const variable';
// }

// hoistingExample();

// function testScope() {
//     var varVariable = 'I am a var variable';
//     let letVariable = 'I am a let variable';
//     const constVariable = 'I am a const variable';

//     console.log(varVariable); // Output: 'I am a var variable'
//     console.log(letVariable); // Output: 'I am a let variable'
//     console.log(constVariable); // Output: 'I am a const variable'
// }

// testScope();

// console.log(varVariable); // ReferenceError: varVariable is not defined
// console.log(letVariable); // ReferenceError: letVariable is not defined
// console.log(constVariable); // ReferenceError: constVariable is not defined

                /*inside function hoisting*/

//Lexical Scoping means Now, the inner function can get access to
// their parent functions variables but the vice-versa is not true.

let a="qwerty1"
const fi=()=>{
    let b="qwerty2";
    const se=()=>{
        let c='qwerty3';
        // console.log(`${a+b+c}`); //o/p:qwerty1qwerty2qwerty3
    }
    se();
    // console.log(`${a+b+c}`);//o/p:ReferenceError: c is not defined

}
fi();
//Closure in js means ,outer function's parameters,varaieables access to inner function even though executing is completed
// A closure allows a function to "remember" the environment in which it was created. This is a powerful feature for maintaining state across function calls and creating encapsulated modules.
function outerFunction() {
    let outerVar = "I am outside!";
    
    function innerFunction() {
      console.log(outerVar); // Accesses outerVar even after outerFunction completes
    }
    
    return innerFunction;
  }
  
  const closure = outerFunction(); // outerFunction has finished executing here
  closure(); // Logs: "I am outside!"


const outerFun =(a)=>{
    let b=10;
    const innnerFun=()=>{
        let sum=a+b;
        // console.log(`the sum of the two no is ${sum}`)
    }
    innnerFun();
}
outerFun(5);

//Synchronous means one by one execution of operations ,next operation need to be wait until its previous operations needed to completed 


//Asynchronous Example

const fun2 =()=>{
    setTimeout(()=>{
        // console.log('Function 2 is called');
    } , 2000);
}
const funl =()=>{
    // console.log('Function 1 is called');
    fun2();
    // console.log('Function 1 is called Again');
}
funl()
//o/p:
// Function 1 is called
// Function 1 is called Again
// Function 2 is called

//interview q
//Event Loop

//Function Currying
// const sum =(a)=>{
//     console.log(a);
//     return ((b)=>{
//         console.log(b);
//         return ((c)=>{
//             console.log(c);
//             console.log("sum",a+b+c);
//         })
//     })
// }
//o/p:
// 1
// 2
// 3
// sum 6
//----------------or --------------
const sum=(num1)=>(num2)=>(num3)=>console.log("sum=",num1+num2+num3)
sum(1)(2)(3);

//o/p: sum 6


//------CallBack Hell-------
setTimeout(()=>{
        console.log(`1️⃣ works is done`);    
        setTimeout(()=>{
            console.log(`2️⃣ works is done`); 
            setTimeout(()=>{
                console.log(`3️⃣ works is done`);  
                setTimeout(()=>{
                    console.log(`4️⃣ works is done`); 
                    setTimeout(()=>{
                        console.log(`5️⃣ works is done`);   
                        setTimeout(()=>{
                            console.log(`6️⃣ works is done`);    
                        }, 1000) 
                    }, 1000)   
                }, 1000)  
            }, 1000)   
        }, 1000)
    }, 1000)


// Solution to callback hell to understand easily: Promises and Async/Await
// Promises can help to flatten the nesting:


doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doAnotherThing(newResult))
    .then(finalResult => console.log(finalResult))
    .catch(error => console.error(error));

// Async/Await provides a more synchronous-looking approach:

// javascript
// Copy code
async function asyncFunction() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doAnotherThing(newResult);
        console.log(finalResult);
    } catch (error) {
        console.error(error);
    }
}

asyncFunction();

// JavaScript is single-threaded, meaning it can execute one piece of code at a time. 
// However, it can handle asynchronous operations using the event loop,
//  which allows JavaScript to perform non-blocking operations.

// How it works:
// Call Stack: Where function calls are made and executed.
// Web APIs: Browser features like setTimeout, DOM events, fetch which provide asynchronous functionality.
// Task Queue: Queues up callbacks from asynchronous operations.(callback queue or message queue)
// Event Loop: Continuously checks the call stack and task queue, moving callbacks from the task queue to the call stack when the stack is empty.