/* Map ,Filter, Reduce */

// Map - Similar to forEach method but the difference is that it returns an array after doing some operation on each element of array

//arr.map((num, idx, arr) =>{})

let arr1 = [2, 4, 6, 8, 10];

let Cubes = arr1.map((num) => {
    return num ** 3;
});
console.log(Cubes);

//Filter - It returns a new array of elements after traversing through an array and filtering out elements based on a given condition

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Even = arr2.filter((num) => {
    if (num % 2 === 0) {
        return num;
    }
});

console.log(Even);


//Reduce - It is used to return only one value if we have to obtain a single value output after performing some operation on an array

let Sum = arr2.reduce((prev, cur) => {
    return prev + cur;
});

console.log(Sum);