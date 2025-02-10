//cookies.html used for this js
//Local storage provides a larger storage capacity (usually several megabytes) compared to cookies.
//Data stored in local storage remains until explicitly deleted by the website or cleared by the user
// local storage is not sent to the server with every HTTP request. It is purely client-side storage
let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)
//key =red is 1st setted

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}
//after this removeItem function instantly removed in flash speed
// all this function are in prototype of localStorage class
//.setItem(k ,v)
//.getItem(k)
//.removeItem(k)
//.clear()-delete everything 
//.key(index)-returns indexed key
//.length
//if we want to change the value of key use setItem for same key then value will be changed

