// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")

//Session Storage maintains data for the duration of the page session
//Data survives across page reloads and restores, but it is lost when the browser is closed.
// The storage capacity of Session Storage is similar to Local Storage, typically several megabytes per origin (domain)
//Session Storage is isolated from other tabs or windows open in the same browser.
//JSON.stringify() and JSON.parse() are often used to store and retrieve complex data structures as like localstorage

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}
