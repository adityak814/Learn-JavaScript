/*setInterval & clearInterval*/
let Age = prompt("Enter your Age:");

const ageCheck = (Age) => {
    console.log("Age = ", Age, Date.now());
}

let clearInt;

document.querySelector("#Start").addEventListener('click', () => {
    clearInt = setInterval(ageCheck, 2000, Age);
});
document.querySelector("#Stop").addEventListener('click', () => {
    clearInterval(clearInt);
    console.log("Cleared");
});