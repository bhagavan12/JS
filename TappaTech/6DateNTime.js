//JavaScript Date objects represent a single moment in time in a
//platform-independent format. Date objects contain a Number
//that represents milliseconds since 1 January: 1974 UTC.

//creating a Date object  in 4 ways
// new Date();
// new Date(year,month,day,hours,minutes,seconds,milliseconds);
// new Date(milliseconds);
// new Date(date string);


//new Date() -created with Date() constructor
let date = new Date();
// console.log(date); //o/p:2024-02-04T07:19:21.693Z

// console.log(new Date().toLocaleString());//4/2/2024, 4:34:09 pm
// console.log(new Date().toDateString()); //Sun Feb 04 2024
// console.log(new Date().toString()); //Sun Feb 04 2024 16:36:06 GMT+0530 (India Standard Time)
// console.log(Date.now()); //Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 UTC
//o/p:1707044886885
//Represents Jan-0 to Dec-11
// console.log(new Date(2021,1,4,16,40,50,55).toLocaleString()); //o/p:4/2/2021, 4:40:50 pm
var da=new Date("16:45:34 ,4 2024 Feb"); // we can write in any order of this time date,month .....

// console.log(da);

const curDate = new Date();
//Get
// console.log(curDate.toLocaleString()); //4/2/2024, 4:50:03 pm
// console.log(curDate.getFullYear()); //2024
// console.log(curDate.getMonth()); //o/p: 1   means Feb
//Set
// console.log(curDate.setFullYear(2020,10,11));
// console.log(curDate.setMonth(11));



console.log(curDate.getTime()); //returns time from 1970 1 in milliseconds
console.log(curDate.setHours(5)); // o/p: 1707045829538
console.log(curDate.toLocaleTimeString()); // o/p:5:01:42 pm