"use strict"; // treat all JS code as newer version

//alert(3+3) //we are using nodejs not browser

// primitive
// number
// bigint
// string
// boolean
// null -> standalone value
// undefined


// object

console.log(typeof undefined);
console.log(typeof null);

// non primitive (reference)

// Arrays
const heroes = ["shaktiman", "naagraj", "doga"];

//Objects
let myObj = {
    name: "Paul",
    age: 40
}

//Functions
const myFunction = function() {
    console.log("Hello world");
    
}
// primitive datatypes memory is stored in stack, it gives a copy

let myYoutubename = "code regularly"
let anotherName = myYoutubename
anotherName = "code properly"

console.log(myYoutubename);
console.log(anotherName);

// non primitive datatypes memory is stored in heap, it gives a reference

let userOne = {
    email: "hi@google.com",
    upi: "hi@ybl"
}

let userTwo = userOne
userTwo.email = "hello@google.com"

console.log(userOne);
console.log(userTwo);





