//' ' or " " -primitives
// new String(); -using String constructor
let namee='teja';
// console.log(namee); //o/p:teja
namee =new String("qwerty");
// console.log(namee); //o/p:[String: 'qwerty']
//String.prototype.length
// console.log(namee.length); //o/p:6
// escape charcter (\) 
let any="qwertyerv dfghgfd \"qwerty\" frgtf";
// console.log(any); //o/p:qwertyerv dfghgfd "qwerty" frgtf
any ='wertyerv dfghgfd \"qwerty\" frgtf'; //o/p: no error
any ='wertyerv dfghgfd "qwerty" frgtf'; 
// console.log(any); //o/p:wertyerv dfghgfd "qwerty" frgtf

//Finding string in a String
//String.prototype.indexOf("search value") // case sensitive
// console.log(any.indexOf("fd",10)); // , value ->represents the from where it need to search

//search() method - returns the position
// console.log(any.search("wer",4)); // there is no (_ ,value) to start from that index

//extracting a part of string using  
// - slice(start,end) -extracts a part and retunrns that part[st,end) in a new string

var str="Apple , Banana , Kiwi";
// console.log(str.slice(0,5)); //Apple [0,5)
// console.log(str.slice(7,-1)); //op: Banana , Kiw
// console.log(str.slice(7,-2));//o/p: Banana , Ki

// - substring(start,end) similar to slice [st,end)
//but diff is can't accept the negative index 
// console.log(str.substring(9,-1)); //O/P:Apple , B dont accepts -ve index so from 0th index to st index it will return 

// - substr() similar to slice but 2nd parameter represents the length of extracted part
// console.log(str.substr(8,4)); //from 8th index string with length of 4 will return

// String.prototype.replace(searchFor,replaceWith) -method replace a specified value
//with another value in a string -return new string dont change the old string
//replace only 1st appearance of that specified string .case sensitive

let replacedata  = str.replace('Banana','Guava');
// console.log("oldString: " +str+" new string: " +replacedata); //o/p:oldString: Apple , Banana , Kiwi new string: Apple , Guava , Kiwi


//Extracting string characters

//charAt() at specified index in a string
//charCodeAt() returns the unicode(Ascii value) of the character at a specified index in a string
// console.log("qwerty".charCodeAt(4));

//property access
var str1="qwertyuiop";
// console.log(str1[4],str1.charAt(4));//o/p:t t

//case conversion
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

//concat
var str2="afsgdhsf";
str1=str1.concat(str2);
str2=str2+str1;
// console.log(str1,str2); //o/P:qwertyuiopafsgdhsf afsgdhsfqwertyuiopafsgdhsf
// console.log(`${str1} and ${str2}`); //o/p:qwertyuiopafsgdhsf and afsgdhsfqwertyuiopafsgdhsf
// console.log(str1.concat(" ",str2)); //o/p:qwertyuiopafsgdhsf afsgdhsfqwertyuiopafsgdhsf

//String.trim() -removes whitespaces in a string at starting and ending

var str3=" ds sdf afr   ";
// console.log(str3.trim());

//convert string into array

// split()

var tt="a,b,c,d,e,fg";
// console.log(tt.split(",")); //o/p:[ 'a', 'b', 'c', 'd', 'e', 'fg' ]

