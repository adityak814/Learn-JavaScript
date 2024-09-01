
let Name = prompt("Enter your Name:");


/*setTimeout & clearTimeout*/

const person = (Name) => {
    console.log(Name);
}

/*let clr = setTimeout(person(Name), 2000); //this syntax immideatly invokes the person function which we don't want*/
let clearTime = setTimeout(() => { person(Name) }, 2000);

document.querySelector("#Stop").addEventListener("click", () => {
    clearTimeout(clearTime);
    console.log("Stopped");
});





