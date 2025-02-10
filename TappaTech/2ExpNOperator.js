//expression = combination of operands and operators 
var x,y;
x=5;y=5;
//here x is concatinating with string msg and comaparing with y ,so it shows false 
//ex: x=5;y="equals or not 5" then o/p will be true
// console.log("equals or not "+ x==y); //o/p: false 
// console.log("equals or not= "+ (x==y)); //o/p:equals or not= true 
// console.log(`equals or not "+ ${x==y}`); //o/p: equals or not "+ true //ES6 update 

var n=15;
var n1=n++; //(postfix)before incrementing n it is returning value  ,so n1 is 15 only 
// console.log("n="+n+", "+"n1="+n1); //o/p: n=16, n1=15
var n2= n1++ +5; //15+5
// console.log("n2="+n2);//o/p:20

var n=15;
var n1=++n; //(prefix)after increment value is returning
// console.log("n="+n+", "+"n1="+n1); //o/p: n=16, n1=16

var n2=++n +5;//(17+5)
// console.log("n2="+n2);//o/p:22


//Controle statements and loops

//for 0,"",undefined,null,NaN are false 
if(undefined){
    // console.log("true");
}else{
    // console.log("false"); //✅
}

//ternary operator-take 3 operands
age=18;
var eligible= (age>=18) ? "eligible to vote": "ineligible";
// console.log(eligible); //o/p:eligible to vote

//switch statement
//If you omit the break statement, the next case will be executed even if the evaluation does not match the case.




console.log(true === 1); // false, because the types are different (boolean vs. number)
console.log(false === 0); // false, because the types are different (boolean vs. number)
