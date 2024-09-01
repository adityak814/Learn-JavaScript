//for-of loop
//can be used as an iterator for Arrays and Strings

let str = "Umbrella";
for (let i of str) {
    console.log(i);
}

//for-in loop used for iterating on Objects
//It stores key in the iterator

const student = {
    Name: "Aditya",
    RegNo: 220911364,
    Sem: 4,
    College: "MIT"
};

for (let i in student) {
    console.log("key :", i, "Value is", student[i]);

}

console.log(student["College"]);


//prompt() function returns String when clicked 'OK"
// else returns NULL when clicked cancel

let gameNumber = 25;
let checkNum;
do {
    checkNum = prompt("Enter a Number:");
} while (checkNum != gameNumber);

console.log("You entered the correct number");


