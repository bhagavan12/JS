// let promise = fetch(url,[action])
//here action is optional ,if not mentioned it can considered as a GET request to network 
let promise = fetch('https://price-api.datayuge.com/api/v1/compare/list/categories?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&page=1')
promise.then((val)=>{
    console.log(val.status) //200
    console.log(val.ok) //true
    console.log(val.headers)
    //o/p:
    return val.json();
}).then((val)=>{
    console.log(val);
})