// immediately invoked function expression
// iife - to execute function immediately so global scope do not pollute this function

// to do this just write function inside parenthesis

(function chai(){    //named iife
    console.log(`DB connected`)
} ) () ;         // (*define function*) (*for execution*)     (;) to end the iife execution

//using arrow function

( () => {    //unnamed iife
    console.log(`DB connected two`)
} ) ();

( (name) => {
    console.log(`DB connected two ${name}`)
} ) ("hitesh");

