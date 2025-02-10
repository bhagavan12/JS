// Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.

// Array Destructuring
const myBioData = ['teja', 21, "javvadi"];
// let myFName = myBioData[0];
// let  myAge= myBioData[1];
// let myLName = myBioData[2];
// console.log(myAge) ;//o/p:21

let [myFName, myAge, myLName] = myBioData;
// console.log(myFName); //o/p:teja

//  0bJect destructuring
const myBio = {
    myFname: 'teja',
    myLname: 'javvadi',
    age:21
}
let {myFname, myLname, age}=myBio; //variables need to be same as keys of object
console.log(age);//o/p:21

// Object Properties
// we can now use Dynamic Properties
// no need to write key and value,
let namee = "name" ;
let myName = "teja" ;
let bioo={
    [namee]:[myName],
    [20+1]: 21
}
// console.log(bioo);
// if both are same


const obj3={namee,myName};
// console.log(obj3);//o/p:{ namee: 'name', myName: 'teja' }


//spread Operator

const colors=['blue', 'white', 'yellow', 'black'];
const mycolors=['red','yellow','blue','green','white'];

const res=[...colors,'qwerty','qazxsw']
console.log(res);//https://chat.openai.com/share/d16784d6-6f71-48d1-ae0f-393b4fd40979

//ES7
// Arrays.prototype.includes()
//......



//ES8--------------------------------------------------------
//String padding - used to achieve desired string length by adding at start,end
//Object.values()
//Object.entries()
const message= "my name is vinod";

//padding--------------------------------------------------

// console.log(message);
// console.log(message.padStart(20));//here 20 represents total length of string with old value

// console.log(message.padEnd(20,"*"));
//o/p:
// my name is vinod
//     my name is vinod
// my name is vinod****


//Object.values()-------------------------------
const mee={
    'name':'teja',
    'age':21,
    'standard':"3rd"
}
// console.log(Object.values(mee)); //o/p:[ 'teja', 21, '3rd' ]
// console.log(Object.entries(mee)); //o/p:[ [ 'name', 'teja' ], [ 'age', 21 ], [ 'standard', '3rd' ] ]
//ES10
// console.log(Object.fromEntries(Object.entries(mee)));//o/p:{ name: 'teja', age: 21, standard: '3rd' }


// ES9

//spread operator

//ES2019-(ES10)
// How to flatten the array?
const arr=[
    ['afds1','faafd2'],
    ['afds3','faafd1'],
    ['afds4','faafd2'],
    ['afds6','faafd8'],
    ['afds5','faafd7']
]
//old
let flatArr= arr.reduce((accum, currVal)=>{
    return accum.concat(currVal);
})
console.log(flatArr);
let arr2=[1,2,3,4,5];
let arr1=[1,2,3,4,5];
let arr3=arr2.concat(arr1);//array concatenation
// console.log(arr3);
//ES10
// console.log("arr.flat()",arr.flat()); //arr.flat(no.of levels of arr to flat)
// console.log(Object.fromEntries(Object.entries(mee)));//o/p:{ name: 'teja', age: 21, standard: '3rd' }

//ES11-ES2020
//#1: BigInt
let oldNum=Number.MAX_SAFE_INTEGER;
// console.log(oldNum);//o/p:9007199254740991 i we add any num to this number absoultly wnrg ans will get
// console.log(oldNum+190);//o/p:9007199254741180 (wrng❌) 

// console.log(9007199254740991n+190n,"type=",typeof (9007199254740991n+190n));//o/p:9007199254741181n type= bigint (crt✅)
//nullish 


