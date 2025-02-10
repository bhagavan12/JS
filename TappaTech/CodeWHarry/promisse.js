console.log("p1");
setTimeout(()=>{
    console.log('p2 in 2 seconds')
},2000)
console.log('p3')

//o/p:
// p1
// p3
// p2 in 2 seconds

//promise
let promise = new Promise((resolve,reject)=>{
    console.log(" I am an alert in promise");
    resolve(21);
})
console.log(promise)
//o/p:
// p1
// p3
// I am an alert in promise
// Promise { 21 }
//p2 in 2 seconds