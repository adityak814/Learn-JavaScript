function add(x, y) {
    let sum = x + y;
    return sum;
}

let x = 4;
let y = 3;
let sum = add(x, y);
console.log(sum);
console.log(add(x, y));


/*Arrow Function*/
//here Sum is just another variable in which we have stored an entire function
//we can call Sum anytime we want by passing relevant arguments
const Sum = (a, b) => {
    return a + b;
}
console.log(Sum(4, 5));


//Practice Questions
//Question1

let str = prompt("Enter a String - ");

function findVowels(str) {
    let count = 0;
    for (let x of str) {
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == "u") {
            count++;
        }
        if (x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == "U") {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels in String are: ", findVowels(str));


let countVowels = (str) => {
    let count = 0;
    for (let x of str) {
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == "u") {
            count++;
        }
        if (x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == "U") {
            count++;
        }
    }
    return count;
}

console.log("Number of vowels in String are: ", countVowels(str));

