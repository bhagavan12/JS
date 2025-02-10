//in console
//document.cookie="me=teja"
// 'me=teja'
//document.cookie="me=tejaaa"
// 'me=teja'
// document.cookie="mee=tejaaaa"
// 'mee=tejaaaa'
// document.cookie;
// 'me=tejaaa; mee=tejaaaa'

//we can update the "me" value to another (teja to tejaaa) 
//have specific attributes such as expiration date, path, and domain.
//Cookies are sent back to the server with every subsequent request made to the same domain.
console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//if we write as document.cookie = `${key}=${value}` then if ';' is a character in key then cookie will understand as value (empty=value),
//when we print only string before ; will display
console.log(document.cookie)

//total no of cookies to one domain  is max 20 and dependent on browser
// name=value should not exceedd 4kb
