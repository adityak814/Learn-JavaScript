/*
Strings are immutable in Javascript
str.length
String Methods-
str.toUpperCase()
str.toLowercase()
str.trim() - trims spaces from Starting and end
str.slice(startIndex,lastIndex) //lastIndex is exclusive
str1.concat(str2)
str.replace("str1","str2")
str.charAt(index)
*/
let fullName = prompt("Enter Your Full Name:");
let userName = `@${fullName}${fullName.length}`;
console.log(userName);

//${} is called a place holder.
//To create a string by substitution of placeholders is called String Interpolation


let str = "    I Love my country    ";
console.log(str.trim());

let str1 = "Hello ";
let str2 = "Welcome to India";
console.log(str2.length);
console.log(str1.concat(str2));
console.log(str1.toLowerCase());
console.log(str2.slice(11, 14));
console.log(str2.replace("India", "New Delhi"));
console.log(str1.charAt(1));