const user = {
    username: "John",
    price: 99,

    welcomeMessage: function(){
        console.log(`Welcome to website ${this.username}`);
    }
}
user.welcomeMessage()

user.username = "Sam"
user.welcomeMessage()

//this keyword not used in function

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = function(){
    let username = "hitesh"
    console.log(this.username);
}
chai()

// call function using arrow => arrow function

const chaii = () => {
    let username = "hitesh"
    console.log(this.username);
}
//chaii()

const add = (num1, num2) => {    // arrow function
    return num1 + num2
}
console.log(add(3,4));

// same code diff style known as (implicit return)

const add1 = (num1, num2) => num1 + num2    // same as (num1 + num2)
console.log(add(2,4));

// instead of num1 + num2 , to return object

const add2 = (num1, num2) => ({username : "hitesh"}) 
console.log(add2(2,4));






