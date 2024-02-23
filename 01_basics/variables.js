const accountId = 14429
let accountEmail = "hi@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"   //without keyword works but not recommended
let accountState

//prefer not to use var because of an issue in block scope and functional scope

accountEmail = "hello@google.com"
accountPassword = "123"
accountCity = "Aldie"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])