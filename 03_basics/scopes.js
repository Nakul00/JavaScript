// let a = 10
// const b = 20
// var c = 300  //not printed in case of var

let a = 300  // printed in case of let, inside scope should not be printed, only global ones

if(true){
    let a = 10   // because values are used inside the if not in global scope
    const b = 20  // because values are used inside the if not in global scope
    //var c = 30  //still it will get print so no use of var
    console.log("Inner a is " +a);
}
console.log(a)
//console.log(c);  //only c will get printed and thats why we dont use var in js



function one(){
    const username = "John"

    function two(){
        const website = "youtube"
        console.log(username);  // it will print, two can print of one, but one wont print of two
    }
   // console.log(website);  //throw error to call website outside function
    two()
}
one()    // closure - inside function can access outside function


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website);  //error cannot print outside scope
}
//console.log(username);  //error cannot print outside scope



// **************** interesting ***************

addOne()   // you can declare before function calling, if function is in this way
function addOne(num){
    return num + 1
}
console.log(addOne(5)) 

//variables in js could hold anything even function, so other way is


// addTwo()   // but you cannot declare before function calling, if func is declared in this way when storing in variable
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)) 
