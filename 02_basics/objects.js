// to crerate object either through constructor or object literals
// for constructor Object.create  and it makes singleton only in constructor

//object literals

const mySym = Symbol("key1")   // now to use a symbol 

const JsUser = {
    name: "Paul",
    [mySym]: "mykey1",
    "fullName": "Paul John",  //only access using sq. brackets
    age: 18,
    location: "Mumbai"
}
 //now to access object

 console.log(JsUser.name);
 console.log(JsUser["name"]);
 console.log(JsUser.mySym);   //cannot access through dot
 console.log(JsUser[mySym]);

 //to change the values in object
 JsUser.age = 24
 console.log(JsUser);

 //to not change the values freeze it

//Object.freeze(JsUser)
 
JsUser.age = 34
 console.log(JsUser);  //same not changed to 34 because we freezed it


 //for function
 JsUser.greeting = function(){
    console.log("Hello JS user");
 }
 JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.age}` );  //string interpolation
 }


 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

 // ******************** using constructor i.e singleton part 2 ******************

 const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isloggedIn = false
 console.log(tinderUser);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}

 const obj3 = {obj1, obj2}
 const obj4 = Object.assign({}, obj1, obj2)
 console.log(obj3);
 console.log(obj4);

 const obj5 = {...obj1, ...obj2}  //widely used "spread operator"
 console.log(obj5)
 
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty('isloggedIn'));

 // *********** destructuring *************

 const course = {
   coursename : "Javascript",
   price : "20",
   instructor: "hitesh"
 }

 //console.log(course.price);
 const {instructor: teacher} = course  //destrcuturing the object, destrcuture the name then instructor: teacher
 console.log(teacher);  //done

