
let sum = 0;

function Add(...nums) {
    nums.forEach((val) => {
        sum = sum + val;
    })
}

Add(1, 2, 3, 4, 5)
console.log(sum)