let a = [2, 4, 6];
console.log(a);

//Array in javascript is special type of Object

let cities = ["New Delhi", "Mumbai", "Chennai", "Kolkata", "Bangalore", "Hyderabad"];
for (let city of cities) {
    console.log(city.toUpperCase());
}


let price = [250, 645, 300, 900, 50];
for (let x of price) {
    console.log(x);
}

for (let i = 0; i < price.length; i++) {
    price[i] = price[i] * (9 / 10);
}

console.log("After 10% offer");

for (let x of price) {
    console.log(x);
}


//Methods in Array
//arr.push()
//arr.pop()
//arr.toString() - converts Array to String and returns new String
//arr.concat() - concatinates multiple arrays and returns a new array
//arr.unshift() - add new element from start of an array
//arr.shift() - pops an element from start of an array and returns it
//arr.slice(startIndex, endIndex) - returns elements from startindex to endIndex - 1 (Does not affect the original array)
//arr.splice(startIndex, deleteCount, newElement1, newElement1,..) changes the original array


let arr = ["India", "US", "Sri Lanka", "Japan"];
console.log(arr);

//push, pop, convert to String operation
arr.push("China");
console.log(arr);
console.log(arr.pop());
console.log(arr.toString());

//concat operation
let arr1 = ["Nepal", "Singapore", "Australia"];
let arr2 = arr.concat(arr1);
console.log(arr2);

//shift and unshift operation
arr2.unshift("Bharat");
console.log(arr2);
let c = arr2.shift();
console.log(c);
console.log(arr2);

//slice operation
console.log(arr2.slice(1, 4));


//splice operation
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
let arr3 = companies.splice(1, 3, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
console.log(arr3);
let arr4 = companies.splice(1);
console.log(arr4);



/*Important*/
//arr.splice(2,3,...) returns an array of deleted elements from the original array from index 2 till 3 positions forward
//arr.splice(2) returns an array of deleted elements from index 2 to last index of the array