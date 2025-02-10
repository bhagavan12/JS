//Event Propagation
//capture phase -window -> event target phase
//target phase  -
//bubble phase  -event target ->window

//event bubbling  -- inner to outer
//event capturing -- outer to inner(tricking remember the order of prapagating)


//event bubbling is a default behaviour,if i do an event was done on targeted element then 1st target ele event is done then it's parent ele event is done upto root element(window,html).
//event capturing means when i do event on targeted ele then 1st it's top parent(window,html....) will do event then last targeted element event will done 
//document.getElementById("parent").addEventListener("click", function(event) {
//     alert("The parent element was clicked!");
// }, true);
