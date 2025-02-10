
async function teja(){//when i add async then it return promise 
    let delhi= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('27 delhi')
        }, 1000);
    })
    let bangalore= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('21 bangalore')
        }, 5000);
    })
    // delhi.then((val)=>{
    //     console.log(val);
    // })
    // bangalore.then((val)=>{
    //     console.log(val);
    // })
    //op:
    // 21 bangalore
    // 27 delhi
    console.log("fetching delhi weather,plz wait")
    let delW=await delhi;
    console.log("fetching bangalore weather,plz wait")
    let bang=await bangalore;
    return [bang,delW]
}
// console.log(teja().then())
//O/P:
// fetching delhi weather,plz wait
// VM71:28 Promise[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Array(2)
// VM71:24 fetching bangalore weather,plz wait
// teja() -returning (promise obj) which uses async
console.log(teja().then((val)=>{
    console.log(val);
    //o/p:
    // fetching delhi weather,plz wait
    // Promise { <pending> }
    // fetching bangalore weather,plz wait
    // [ '21 bangalore', '27 delhi' ]
}))
//another functions running stimultanously with teja() function to return
