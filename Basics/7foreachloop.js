//arr.forEach(callBackFunction)
//CallbackFunction : Here, it is a function to execute for each element in array
//A callback is a function passed as an argument to another function

/*forEach Loop*/
/*
arr.forEach((val) => {
    console.log(val);
})
*/

/*Some Important Points*/
/*
Higher Order Functions - Any function that either takes any other function as an argument or returns a function as an output is called a Higher Order Function
*/

//forEach is a Higher Order Function

/*Some Optional Parametes that can be passed with CallBack Function*/
//(val, index, arr) =>{}


let arr = [1, 2, 3, 4, 5];

arr.forEach((num) => {
    console.log(num * num); //num**2
});

//Another way to write callback Function
let calcSquare = (num) => {
    console.log(num * num);
}
arr.forEach(calcSquare);
