//six static methods for promise class


let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    },1000);
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },2000);
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },3000);
})

// p1.then((val)=>{
//     console.log(val);
// })
// p2.then((val)=>{
//     console.log(val);
// })
// p3.then((val)=>{
//     console.log(val);
// })
//o/p:
// value 1
// value 2
// value 3
//promise.all;
let promise_all=Promise.all([p1,p2,p3])//waits for all objs to return their values
// promise_all.then((val)=>{//if one promise obj is rejected then promise.all will return fail entirely
//     console.log(val); //[ 'value 1', 'value 2', 'value 3' ]
// })
// let promise_allsettled=Promise.allSettled([p1,p2,p3])
// promise_allsettled.then((val)=>{//if one promise obj is rejected then promise.allsettle will return all objs status and their values
//     console.log(val); 
//     //o/p:
//     // [
//     //     { status: 'fulfilled', value: 'value 1' },
//     //     { status: 'fulfilled', value: 'value 2' },
//     //     { status: 'fulfilled', value: 'value 3' }
//     //   ]
// })
// let promise_race=Promise.race([p2,p1,p3])
// promise_race.then((val)=>{//waits for the first promise to settle and its result/error becomes the outcome
//     console.log(val); //value 1
// })
let promise_any=Promise.any([p2,p1,p3])
promise_any.then((val)=>{//waits for the first promise to settle and its result/error becomes the outcome
    console.log(val); //value 1
})//throws AggregrateError if all the promises are rejected
let promise_reject=Promise.reject([p2,p1,p3])
let promise_resolve=Promise.resolve([p2,p1,p3])
promise_resolve.then((val)=>{
    // console.log(val); //[ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
})//


//Promise API 6 methods
// Promise.all
// Promise.allSettled
// Promise.race
// Promise.any
// Promise.resolve
// Promise.reject



