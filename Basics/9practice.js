let arr = [100, 91, 87, 54, 73, 95, 78, 96, 99];
let A = arr.filter((marks) => {
    if (marks >= 90) {
        return marks;
    }
});
console.log(A);


let n = prompt("Enter the size of Array");
let arr1 = [];
for (let i = 1; i <= n; i++) {
    arr1[i - 1] = i;
}

let Sum = arr1.reduce((prev, cur) => {
    return prev + cur;
})

console.log(`Sum is ${Sum}`);

let prod = arr1.reduce((prev, cur) => {
    return prev * cur;
})

console.log(`Product is ${prod}`);