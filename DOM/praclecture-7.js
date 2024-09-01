let div = document.querySelector("div");
console.log(div.getAttribute("id"));

let newButton = document.createElement("button");
div.style.height = "100px";
div.style.width = "100px";
newButton.innerText = "Click Me!";
div.append(newButton);

let para = document.querySelector("p");