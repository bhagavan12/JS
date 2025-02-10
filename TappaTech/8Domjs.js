//window object (parent )- document (child)
// window.history.back() -move to last visited url
 //<html> is a document root element
 //if we want to access the elements use Element combined function (previousElementSibling)
//document.documentElement-><html> retrieved
//document.body -> <body> retrieved
//document.body.parentElement ->Retrives the html(parent element)
//document.body.children -> retrieve elements under body
//document.body.sibling -> retrives the head(sibling) element
//document.body.children.length -> retrieve no of elements under body
//document.body.hasChildNodes() -> true or false
//document.querySelector()//-It returns the first element that matches the selector, or null if no matches are found
//document.body.div.p.style

// access elements -
// id is unique - getElementById('') ,className is not unique - getElementsByClassName(''),getElementsByTagName('')
//Direct
// document.getElementById("idvalue").innerHTML="qwerty";
//Referencing
// const ele=document.getElementById("idd");
// ele.innerHTML="qwerty";
 
// document.querySelector('any id,class,name,tag') -returns 1st matching value
// document.querySelectorAll('any id,class,name,tag') -returns all matching value elements

