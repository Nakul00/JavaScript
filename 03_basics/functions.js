function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("U");
    console.log("L");
}
//sayMyName()

function add(num1, num2){
    console.log(num1 + num2);
}
add(3,4)



function addition(num1,num2){
    let result = num1 + num2
    return result
}
let result = addition(5,3)
console.log("Result:",result);



function loginUser(username){
    return `${username} has logged in.`
}
console.log(loginUser("John"));



function loginUser(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} has logged in.`
}
console.log(loginUser());



function loginUser(username){
    if(username === undefined){        //same as if(!username)
        console.log("Please enter a username");
        return //if not need any output
    }
    return `${username} has logged in.`
}
console.log(loginUser());


function calculateCartPrice(num){
    return num
}
console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice1(...num1){   // ... rest operator/spread operator to print all the values
    return num1
}
console.log(calculateCartPrice1(200, 400, 500));

function calculateCartPrice2(val1, val2, ...num2){
    return num2
}
console.log(calculateCartPrice2(200, 400, 500, 1000));  //val1=200, val2=400, rest in array

//how to pass object in function

const user = {        //object
    username: "John",
    price: 199
}

function handleObject(anyobject) {          //function
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

//pass array in function

const array = [100,200,300]

function returnValue(getArray) {
    return getArray[2]
}
console.log(returnValue(array));



