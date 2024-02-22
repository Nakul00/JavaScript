const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const otherNumber2 = 123.9
console.log(otherNumber2.toPrecision(3));


console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.round(4.3))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))


console.log(Math.random())  //values always between 0 and 1 inclusive

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //values between max and min only i.e 10-20