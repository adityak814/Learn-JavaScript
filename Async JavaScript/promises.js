
/*
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 3;
        if (a != 3) {
            reject("Something Went Wrong")
        }
        else {
            console.log("Hello from inside Promise")
            resolve({ name: "Aditya", age: 20 })
        }
    }, 2000)

})

promise1.then((user) => {
    console.log(user)
    return user.age
}).then((age) => {
    console.log(age)
}).catch((err) => {
    console.log(err);
})*/

/*
async function promise2() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Something Went Wrong");
    }

}

promise2()
*/

fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json')
    .then((response) => {
        const data = response.json()
        return data
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })